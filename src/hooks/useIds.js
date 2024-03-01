import { useQuery } from "react-query";
import { getIds } from "../api";

export const useIds = (page) =>
  useQuery(
    { queryKey: ["users"], queryFn: () => getIds(page) },
    { keepPreviousData: true }
  );
