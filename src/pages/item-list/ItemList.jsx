import { useFilteredItems, useItems } from '../../entities/hooks';
import { FilterItems } from '../../widgets/filter-items';
import { useState } from 'react';

export const ItemList = () => {
  const [isFilteredItemsShow, setIsFilteredItemsShow] = useState(false);
  const showFilteredItems = () => setIsFilteredItemsShow(true);
  const hideFilteredItems = () => setIsFilteredItemsShow(false);

  const {
    items,
    isLoading: isItemsLoading,
    page,
    incrementPage,
    decrementPage,
  } = useItems();
  const { filteredItems, isLoading: isFilteredItemsLoading } =
    useFilteredItems();

  return (
    <div>
      <FilterItems
        showFilteredItems={showFilteredItems}
        hideFilteredItems={hideFilteredItems}
      />

      {isFilteredItemsShow
        ? filteredItems && (
            <div className="card">
              {filteredItems?.map((item) => (
                <div key={item.id}>
                  {item.brand + item.price + item.product}{' '}
                </div>
              ))}
            </div>
          )
        : items && (
            <>
              <div className="card">
                {items?.map((item) => (
                  <div key={item.id}>
                    {' '}
                    {item.brand + item.price + item.product}{' '}
                  </div>
                ))}
              </div>
              <div className="nav btn-container">
                <button onClick={() => decrementPage()} disabled={page === 1}>
                  Prev Page
                </button>
                <button onClick={() => incrementPage()}>Next Page</button>
              </div>
            </>
          )}

      <div>{isItemsLoading ? 'Fetching items...' : null}</div>
      <div>{isFilteredItemsLoading ? 'Fetching filtered items...' : null}</div>
    </div>
  );
};
