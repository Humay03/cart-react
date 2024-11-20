import { Outlet, Route, Routes } from "react-router-dom";
import Layout from "./page/Layout";
import ProductProvider from "./providers/context/ProductContext";
import ProductDashbord from "./components/products/ProductDashbord";
import Book from "./components/products/Book";
import AdminDashboard from "./page/admin/AdminDashboard";
import AdminLayout from "./page/admin/AdminLayout";
import AdminAddBook from "./page/admin-add-book/AdminAddBook";
import AdminBookList from "./page/admin/AdminBookList";
import Login from "./page/auth/Login";
import Register from "./page/auth/Register";

export default function App() {

  return (
    <ProductProvider>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<ProductDashbord />} />
          <Route path="books/:id" element={<Book />} />
          <Route path="admin" element={<AdminLayout />}>
            <Route index element={<AdminDashboard />} />
            <Route path="add" element={<AdminAddBook />} />
            <Route path="addsecond" element={<AdminBookList />} />
          </Route>
        </Route>
        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Register />} />
      </Routes>
    </ProductProvider >

  )
}

