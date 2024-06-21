import usePerformFetch, { IFetchProps } from "@/hooks/usePerformFetch";
import { ThemedText } from "../theme";

type TComponent<P> = (props: P) => React.ReactElement;

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
  return (
    props: Omit<P, typeof resourceName> &
      Partial<Record<typeof resourceName, T>>
  ): React.ReactElement => {
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

    const resourceProps = { [resourceName]: data } as Partial<
      Record<typeof resourceName, T>
    >;

    return <WrappedComponent {...(props as P)} {...resourceProps} />;
  };
};

export default withApiFeedback;
