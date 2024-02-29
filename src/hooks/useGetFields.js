import { useQuery } from "react-query";
import { getFields } from "../api";

export const useGetFields = (field) => {
  return useQuery(
    ["fields", field],
    async () => {
      const dataFields = getFields(field);
      return dataFields;
    },
    { keepPreviousData: true }
  );
};
