import { useMutation, useQueryClient } from "react-query";
import { getIds } from "../../shared/api";
import { useMemo } from "react";

export const useIds = () => {
  const queryClient = useQueryClient();

  const { mutate, isLoading } = useMutation(
    getIds,
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

// export const useIds = (page) => {
//   return useQuery(
//     ["dataIds", page],
//     async () => {
//       const dataIds = await getIds(page);
//       return dataIds;
//     },
//     { keepPreviousData: true }
//   );
// };
