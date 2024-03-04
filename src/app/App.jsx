import { QueryClientProvider } from '../QueryClientProvider';
import { ItemList } from '../pages/item-list';

import './App.scss';

export const App = () => {
  return (
    <div className="app">
      <QueryClientProvider>
        <ItemList />
      </QueryClientProvider>
    </div>
  );
};
