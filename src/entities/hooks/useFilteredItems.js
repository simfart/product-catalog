import { useQuery, useQueryClient } from 'react-query';
import { requestFilterItems } from '../../shared/api';
import { useMemo, useState } from 'react';

export const useFilteredItems = (values) => {
  const {
    data: filteredItems,
    refetch: fetchFilteredItems,
    isLoading,
  } = useQuery({
    queryFn: async () => {
      const valuesArr = Object.entries(values);

      const filteredArr = valuesArr.filter(function ([key, value]) {
        return value !== '';
      });

      const newValues = Object.fromEntries(filteredArr);

      return await requestFilterItems(newValues);
    },
    queryKey: ['filteredItems'],
    retry: 3,
    enabled: values?.length >= 1,
  });

  return {
    filteredItems,
    isLoading,
    fetchFilteredItems,
  };
};
