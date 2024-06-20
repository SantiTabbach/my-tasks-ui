import usePerformFetch, { IFetchProps } from "@/hooks/usePerformFetch";
import React, { ReactElement } from "react";
import { ThemedText } from "../theme";

type TComponent<P> = (props: P) => ReactElement;

interface IHocConfig {
  errorMessage?: string;
  emptyMessage?: string;
  loadingMessage?: string;
}

const defaultHocConfig: IHocConfig = {
  errorMessage: "Something went wrong.",
  emptyMessage: "Nothing to show...",
  loadingMessage: "Loading data...",
};

const withApiFeedback = <P, T>(
  WrappedComponent: TComponent<P>,
  fetchProps: IFetchProps<T>,
  resourceName = "data",
  hocConfig?: IHocConfig
) => {
  return (props: P): ReactElement => {
    const { data, isError, isLoading, isSuccess } = usePerformFetch(fetchProps);

    if (isLoading) {
      return (
        <ThemedText>
          {hocConfig?.loadingMessage || defaultHocConfig.loadingMessage}
        </ThemedText>
      );
    }

    if (isError) {
      return (
        <ThemedText>
          {hocConfig?.errorMessage || defaultHocConfig.errorMessage}
        </ThemedText>
      );
    }

    if (isSuccess && !data) {
      return (
        <ThemedText>
          {hocConfig?.emptyMessage || defaultHocConfig.emptyMessage}
        </ThemedText>
      );
    }

    const resourceProps = { [resourceName]: data };

    return <WrappedComponent {...props} {...resourceProps} />;
  };
};

export default withApiFeedback;
