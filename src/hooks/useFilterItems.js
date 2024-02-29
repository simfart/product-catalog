import { useMutation, useQuery, useQueryClient } from "react-query";
import { filterItems } from "../api";
import { useMemo } from "react";

export const useFilterItems = () => {
  return useQuery(["items"], async () => {
    const data = filterItems();
    return data;
  });
};
