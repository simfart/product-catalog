import './Card.scss';

export const Card = ({ card }) => {
  return (
    <div className="card">
      <h2>{card.product}</h2>
      <small>{card?.brand}</small>
      <div>{card?.price}</div>
    </div>
  );
};
