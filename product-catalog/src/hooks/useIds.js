import { useQuery } from "react-query";
import { getIds } from "../api";

export const useIds = (offset) =>
  useQuery({ queryKey: ["ids"], queryFn: () => getIds(offset) });
