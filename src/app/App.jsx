import { QueryClientProvider } from '../QueryClientProvider';
import { ReactQueryDevtools } from 'react-query/devtools';
import { ItemList } from '../pages/item-list';

import './App.scss';

export const App = () => {
  return (
    <div className="app">
      <QueryClientProvider>
        <ReactQueryDevtools initialIsOpen={true} />
        <ItemList />
      </QueryClientProvider>
    </div>
  );
};
