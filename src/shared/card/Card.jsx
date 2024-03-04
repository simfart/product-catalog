export const Card = ({ card }) => {
  return (
    <tr>
      <td className="tbl-brand">{card.brand ? card.brand : ''}</td>
      <td className="tbl-product">{card?.product}</td>
      <td className="tbl-price">{card?.price}</td>
      <td className="tbl-id">{card?.id}</td>
    </tr>
  );
};
