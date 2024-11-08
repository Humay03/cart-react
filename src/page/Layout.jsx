import { Outlet } from "react-router-dom";
import Header from "../components/layout/Header";
import Main from "../components/layout/Main";


export default function Layout() {
    return (
        <>
            <Header />
            <Outlet />
        </>
    )
}