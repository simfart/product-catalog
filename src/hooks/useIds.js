import { useQuery } from "react-query";
import { getIds } from "../api";

// export const useIds = (page) =>
//   useQuery(
//     ["dataIds", page], async ()=>{
//       const dataIds = await getIds(page);
//       return dataIds
//     },
//     { keepPreviousData: true }
//   );

export const useIds = (page) => {
  return useQuery(
    ["dataIds", page],
    async () => {
      const dataIds = await getIds(page);
      return dataIds;
    },
    { keepPreviousData: true }
  );
};
