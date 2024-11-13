import { Outlet } from "react-router-dom";
import Header from "../components/layout/Header";
import Main from "../components/layout/Main";
import CartProvider from "../providers/context/CartContext";


export default function Layout() {
    return (
        <CartProvider>
            <Header />
            <Outlet />
        </CartProvider>
    )
}