import { useFilteredItems, useItems } from '../../entities/hooks';
import { FilterItems } from '../../widgets/filter-items';
import { useState } from 'react';
import { Table } from '../../shared/table';

import './ItemList.scss';

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
    <section>
      <FilterItems
        showFilteredItems={showFilteredItems}
        hideFilteredItems={hideFilteredItems}
      />
      <h1>{isFilteredItemsShow ? 'Filtered items' : 'All items'}</h1>
      {isFilteredItemsShow
        ? filteredItems && <Table items={filteredItems} />
        : items && (
            <>
              <Table items={items} />
              <div>
                <button onClick={() => decrementPage()} disabled={page === 0}>
                  Prev Page
                </button>
                <button onClick={() => incrementPage()}>Next Page</button>
              </div>
            </>
          )}
      <div>{isItemsLoading ? 'Fetching items...' : null}</div>
      <div>{isFilteredItemsLoading ? 'Fetching filtered items...' : null}</div>
    </section>
  );
};
