import { useQuery, useMutation, useQueryClient } from "react-query";
import { filterItems, getItems } from "./api";
import { useEffect, useMemo, useState } from "react";

export const ItemsList = () => {
  // Получаем доступ к клиенту
  const queryClient = useQueryClient();

  const [listData, setListData] = useState([]);

  const query = useQuery({ queryKey: ["todos"], queryFn: () => getItems(5) });

  // Запрос
  useEffect(() => {
    setListData(query);
  }, []);

  const productList = useMemo(() => {
    if (listData.data) {
      return listData.data
        .toReversed()
        .map((card, index) => (
          <div key={index}> {card.brand + card.price}</div>
        ));
    }
    return null;
  }, [listData.data]);

  // Мутация
  const mutation = useMutation(filterItems({ brand: "Bvlgari" }), {
    onSuccess: () => {
      // Инвалидация и обновление
      queryClient.invalidateQueries(listData);
    },
  });

  const onclick = () => {
    console.log(query.data);
    mutation.mutate(query);
  };
  return (
    <div>
      <ul>{productList}</ul>

      <button onClick={onclick}>Добавить задачу</button>
    </div>
  );
};
