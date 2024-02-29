import { useQuery } from "react-query";
import { getItems } from "../api";

// export const useItems = (offset) =>
//   useQuery({ queryKey: ["items"], queryFn: () => getItems(offset) });

export const useItems = (offset) => {
  return useQuery(
    ["items", offset],
    async () => {
      const data = getItems(offset);
      return data;
    },
    { keepPreviousData: true }
  );
};
