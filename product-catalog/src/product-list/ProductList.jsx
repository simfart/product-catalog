import { useProducts } from "../hooks/useProducts";
import { useMemo } from "react";

export const ProductList = () => {
  const { data: products } = useProducts();
  console.log("products", products);

  const productList = useMemo(() => {
    if (products) {
      return products.toReversed().map((card) => (
        <div key={Object.keys(card)}>{card} </div>
        // <Card
        //   //   onCardClick={onCardClick}
        //   //   onCardLike={onCardLike}
        //   //   onCardDelete={onCardDelete}
        //   card={card}
        //   key={card._id}
        // />
      ));
    }
    return null;
  }, [products]);

  return <section>{productList}</section>;
};
