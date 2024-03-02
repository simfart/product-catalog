import { useInitialItems } from "./useInitialItems";

export const usePangination = (page) => {
  const { data, isLoading, isError, error, isFetching } = useInitialItems(page);

  if (isLoading) {
    return <h2>Loading...</h2>;
  }

  if (isError) {
    return <h2>{error.message}</h2>;
  }

  return { data, isFetching };

};
