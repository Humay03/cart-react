import AdminDashboard from "./AdminDashboard";
import styles from "../../components/layout/styles/admindashboard.module.css";
import { Outlet } from "react-router-dom";
export default function AdminLayout() {
    <div className={styles.wrapper}>
        <div className={styles.layout}>
            <AdminDashboard />
            {/* <Outlet/> */}
        </div>
        <div className={styles.main}>

        </div>
    </div>
}
