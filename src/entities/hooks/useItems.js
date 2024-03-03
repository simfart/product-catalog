import { useState } from 'react';
import { requestItems, requestIds } from '../../shared/api';
import { useQuery } from 'react-query';

export const useItems = () => {
  const [page, setPage] = useState(1);

  const incrementPage = () => setPage((prev) => prev + 1);
  const decrementPage = () => setPage((prev) => Math.max(prev - 1, 0));

  const { data: items, isLoading } = useQuery(
    ['items', page],
    async () => {
      const dataIds = await requestIds(page);

      return await requestItems(dataIds);
    },
    {
      retry: 3,
      retryDelay: (attempt) => Math.pow(2, attempt) * 1000,
    },
  );

  return { page, items, isLoading, incrementPage, decrementPage };
};
