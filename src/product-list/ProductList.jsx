import { useCallback, useMemo, useState } from "react";
import { useItems } from "../hooks/useItems";
import { Loader } from "../loader/Loader";
import { Pagination } from "../pagination";
import { Filter } from "../filter/Filter";


export const ProductList = () => {
  const [currentPage, setCurrentPage] = useState(1);
  const [offset, setOffset] = useState(10);

  const handlePrevClick = useCallback(() => {
    if (currentPage !== 1) {
      setCurrentPage((page) => page - 1);
      setOffset(currentPage*10)
    }
  }, [currentPage, setCurrentPage]);

  const handleNextClick = useCallback(() => {
    setCurrentPage((page) => page +1);
    setOffset(currentPage*10)
  }, [currentPage]);



  const { data: items, isLoading, isFetching } = useItems(offset);
 


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
      <Pagination currentPage={currentPage} handleNextClick={handleNextClick} handlePrevClick={handlePrevClick} />
      <Filter/>
    </section>
  );
};
