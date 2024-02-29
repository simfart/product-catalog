import { useQuery } from "react-query";
import { getItems } from "../api";

export const useItems = (offset) =>
  useQuery({ queryKey: ["items"], queryFn: () => getItems(offset) });
