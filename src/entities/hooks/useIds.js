import { useMutation, useQueryClient } from 'react-query';
import { requestIds } from '../../shared/api';
import { useMemo } from 'react';

export const useIds = () => {
  const queryClient = useQueryClient();

  const { mutate, isLoading } = useMutation(
    requestIds,
    {
      onSuccess: () => {
        queryClient.invalidateQueries(['dataIds']);
      },
    },
    {
      retry: 3,
      retryDelay: (attempt) => Math.pow(2, attempt) * 1000,
    },
    { keepPreviousData: true },
  );
  return useMemo(() => ({ mutate, isLoading }), [mutate, isLoading]);
};
