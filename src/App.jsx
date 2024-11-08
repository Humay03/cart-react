import { Route, Routes } from "react-router-dom";
import Layout from "./page/Layout";
import ProductProvider from "./providers/context/ProductContext";
import ProductDashbord from "./components/products/ProductDashbord";
import Book from "./components/products/Book";

export default function App() {

  return (
    <ProductProvider>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<ProductDashbord />} />
          <Route path="books/:id" element={<Book />} />
        </Route>
      </Routes>
    </ProductProvider >

  )
}

