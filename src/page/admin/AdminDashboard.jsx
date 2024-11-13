
import styles from "../../components/layout/styles/admindashboard.module.css";
export default function AdminDashboard() {
    return (
        <div className={styles.authorPost}>
            <div className={styles.bookBox}>
                <input type="text" placeholder="Author Name"></input>
                <input type="text" placeholder="Book Title"></input>
                <input type="text" placeholder="Genre"></input>
                <input type="number" placeholder="Price"></input>
                <input type="email" placeholder="Email Adress"></input>
                <button>SEND</button>
            </div>
        </div>
    )
}
