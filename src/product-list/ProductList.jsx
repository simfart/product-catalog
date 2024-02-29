import { useMemo, useState } from "react";
import { useItems } from "../hooks/useItems";
import { Loader } from "../loader/Loader";
import { Pagination } from "../pagination";

export const ProductList = () => {
  const [currentPage, setCurrentPage] = useState(1);
  const [offset, setОffset] = useState(10 * currentPage);

  console.log("offset", offset);

  const { data: items, isLoading, isFetching } = useItems(offset);
  const [activePage, setActivePage] = useState(1);

  console.log(items);

  const productList = useMemo(() => {
    if (items) {
      return items
        .toReversed()
        .map((card, index) => <div key={index}>{card.price} </div>);
    }
    return null;
  }, [items]);

  if (isLoading || isFetching) return <Loader />;

  return (
    <section>
      {productList}
      <Pagination currentPage={currentPage} setActivePage={setActivePage} />
    </section>
  );
};
