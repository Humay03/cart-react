
import styles from "../../components/layout/styles/adminbooklist.module.css";

export default function AdminBookList() {
    
    return (
        <table className={styles.bookList}>
            <thead>
                <tr>
                    <th>Book Image</th>
                    <th>Book Name</th>
                    <th>Author</th>
                    <th>Price</th>
                </tr>
            </thead>
            <tbody>
                <tr>
                    <td><img src="" alt="" /></td>
                    <td></td>
                    <td></td>
                    <td></td>
                </tr>
            </tbody>
        </table>
    )
}
