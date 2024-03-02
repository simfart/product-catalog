import { useMutation, useQueryClient } from "react-query";
import { filterItems } from "../../shared/api";
import { useMemo } from "react";

export const useFilterItems = () => {
  const queryClient = useQueryClient();

  const { mutate, isLoading } = useMutation(
    filterItems,
    {
      onSuccess: () => {
        queryClient.invalidateQueries(["dataIds"]);
      },
    },
    {
      retry: 3,
      onError: (error) => {
        console.log(error);
      },
    }
  );
  return useMemo(() => ({ mutate, isLoading }), [mutate, isLoading]);
};
