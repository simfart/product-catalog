import { useEffect, useState } from "react";
import { usePangination, useItems, useIds } from "../../entities/hooks";
import { FilterItems } from "../../widgets/filter-items";

export const ItemList = () => {
  const [page, setPage] = useState(1);
  const { data, isFetching } = usePangination(page);

  const { mutate, isLoading } = useItems();

  const handleSubmit = (e) => {
    e.preventDefault();
    mutate(page);
  };

  return (
    <div>
      <FilterItems />

      {data && (
        <div className="card">
          {data?.map((item, index) => (
            <div key={index}>{item.product} </div>
          ))}
        </div>
      )}
      <div className="nav btn-container">
        <button
          onClick={() => {
            setPage((prevState) => Math.max(prevState - 1, 0));
            handleSubmit;
          }}
          disabled={page === 1}
        >
          Prev Page
        </button>

        <button
          onClick={() => {
            setPage((prevState) => prevState + 1);
            handleSubmit;
          }}
        >
          Next Page
        </button>
      </div>

      <div>{isFetching ? "Fetching..." : null}</div>
      <div>{isLoading ? "Loading..." : null}</div>
    </div>
  );
};
