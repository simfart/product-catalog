import { useMutation, useQueryClient } from "react-query";
import { getItems } from "../../shared/api";
import { useMemo } from "react";

export const useItems = () => {
  const queryClient = useQueryClient();

  const { mutate, isLoading } = useMutation(
    getItems,
    {
      onSuccess: () => {
        queryClient.invalidateQueries(["items"]);
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
