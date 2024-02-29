
import { useMemo } from "react";
import { useItems } from "../hooks/useItems";
import { Loader } from "../loader/Loader";

export const ProductList = () => {
  
  const {data: items, isLoading, isFetching}  = useItems(10)

  const productList = useMemo(() => {
    if (items) {
      return items.toReversed().map((card, index) => (
        <div key={index}>{card.price} </div>
   
      ));
    }
    return null;
  }, [items]);

if (isLoading||isFetching) return <Loader/>

  return <section>{productList}</section>;
};
