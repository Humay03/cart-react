
import { BookPlus, BookText, BookUser } from "lucide-react";
import styles from "../../components/layout/styles/admindashboard.module.css";
import { Link, Outlet } from "react-router-dom";


export default function AdminLayout() {


    return (
        <div className={styles.wrapper}>
            <div className={styles.layout}>
                <ul>
                    <li ><Link to="/admin">Main Page<BookPlus strokeWidth={1.25} /></Link></li>
                    <li><Link to="/admin/addsecond">Books<BookText strokeWidth={1.25} /></Link></li>
                    <li ><Link to="/admin/add">Add Book<BookUser strokeWidth={1.25} /></Link></li>
                </ul>
            </div>
            <div className={styles.main}>
                <Outlet />
            </div>
        </div>
    )
}
