import { useQuery } from 'react-query';
import { requestFields } from '../../shared/api';

export const useGetFields = (field) => {
  return useQuery(
    ['fields', field],
    async () => {
      const dataFields = requestFields(field);
      return dataFields;
    },
    { keepPreviousData: true },
    {
      retry: 3,
      onError: (error) => {
        console.log(error);
      },
    },
  );
};
