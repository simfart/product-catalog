import { QueryClientProvider } from "./QueryClientProvider";
import { ProductList } from "./product-list/ProductList";
import { ReactQueryDevtools } from "react-query/devtools";
import "./App.scss";
import { PanginationTest } from "./pagination/PanginationTest";

function App() {
  return (
    <QueryClientProvider>
      <ReactQueryDevtools initialIsOpen={true} />
      <PanginationTest />
      {/* <ProductList /> */}
      {/* <ItemsList /> */}
    </QueryClientProvider>
  );
}

export default App;
