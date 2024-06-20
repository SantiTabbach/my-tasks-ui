import { useEffect, useState } from "react";

export interface IFetchState<T> {
  isLoading: boolean;
  isError: boolean;
  isSuccess: boolean;
  data: T | null;
  error: { status: string; message: string } | null;
}

export interface IFetchProps<T> {
  fetchFn: (...args: any[]) => Promise<T>;
  args?: any[];
}

const initalState = {
  isLoading: false,
  isError: false,
  isSuccess: false,
  data: null,
  error: null,
};

const usePerformFetch = <T>({ fetchFn, args }: IFetchProps<T>) => {
  const [fetchState, setFetchState] = useState<IFetchState<T>>(initalState);

  useEffect(() => {
    const performFetch = async () => {
      setFetchState((prevState) => ({ ...prevState, isLoading: true }));

      try {
        const data = await fetchFn(args);
        setFetchState({
          isLoading: false,
          isError: false,
          isSuccess: true,
          data,
          error: null,
        });
      } catch (error: any) {
        setFetchState({
          isLoading: false,
          isError: true,
          isSuccess: false,
          data: null,
          error: {
            status: error.response?.status || "Unknown",
            message: error.message || "An error occurred",
          },
        });
      }
    };

    performFetch();
  }, []);

  return fetchState;
};

export default usePerformFetch;
