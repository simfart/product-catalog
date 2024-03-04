import { Card } from '../card';
import './Table.scss';

export const Table = ({ items }) => {
  return (
    <>
      <div className="tbl-header">
        <table cellPadding="0" cellSpacing="0" border="0">
          <thead>
            <tr>
              <th className="tbl-brand">Brand</th>
              <th className="tbl-product">Product</th>
              <th className="tbl-price">Price</th>
              <th className="tbl-id">id</th>
            </tr>
          </thead>
        </table>
      </div>
      <div className="tbl-content">
        <table cellPadding="0" cellSpacing="0" border="0">
          <tbody>
            {items?.map((item) => (
              <Card key={item.id} card={item} />
            ))}
          </tbody>
        </table>
      </div>
    </>
  );
};
