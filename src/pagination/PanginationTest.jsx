import { useState } from "react";
import { useQuery } from "react-query";
import { getIds, getItems } from "../api";

export const PanginationTest = () => {
  const [page, setPage] = useState(1);

  const useIds = (page) => {
    return useQuery(
      ["items", page],
      async () => {
        const data = await getIds(page);
        const dataItems = getItems(data);
        return dataItems;
      },
      { keepPreviousData: true }
    );
  };

  const { data, isLoading, isError, error, isFetching } = useIds(page);

  if (isLoading) {
    return <h2>Loading...</h2>;
  }

  if (isError) {
    return <h2>{error.message}</h2>;
  }

  return (
    <div>
      <h2>Paginated View</h2>

      {data && (
        <div className="card">
          {data?.map((card, index) => (
            <div key={index}>{card.id} </div>
          ))}
        </div>
      )}
      <div className="nav btn-container">
        <button
          onClick={() => setPage((prevState) => Math.max(prevState - 1, 0))}
          disabled={page === 1}
        >
          Prev Page
        </button>

        <button onClick={() => setPage((prevState) => prevState + 1)}>
          Next Page
        </button>
      </div>

      <div>{isFetching ? "Fetching..." : null}</div>
    </div>
  );
};
