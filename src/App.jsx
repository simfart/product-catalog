import { QueryClientProvider } from "./QueryClientProvider";
import { ProductList } from "./product-list/ProductList";

import "./App.scss";

function App() {
  return (
    <QueryClientProvider>
      <ProductList />
    </QueryClientProvider>
  );
}

export default App;
