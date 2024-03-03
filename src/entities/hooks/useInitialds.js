import { useQuery } from "react-query";
import { getIds } from "../../shared/api";

export const useInitialds = (page) => {
  return useQuery(
    { queryKey: ["ids", page] },
    async () => {
      const dataIds = getIds(page);
      return dataIds;
    },
    {
      retry: 3,
      onError: (error) => {
        console.log(error);
      },
    }
  );
};
