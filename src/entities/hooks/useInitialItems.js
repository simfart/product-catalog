import { useQuery } from "react-query";
import { getIds, getItems } from "../../shared/api";

export const useInitialItems = (page) =>
  useQuery(
    ["items", page],
    async () => {
      const dataIds = await getIds(page);
      return getItems(dataIds);
    },
    {
      retry: 3,
      retryDelay: (attempt) => Math.pow(2, attempt) * 1000,
      onError: (error) => {
        console.log(error);
      },
    }
  );
