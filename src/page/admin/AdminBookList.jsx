import { PenIcon, TrashIcon } from "lucide-react";
import styles from "../../components/layout/styles/adminbooklist.module.css";
import { useProducts } from "../../providers/context/ProductContext";

export default function AdminBookList() {
    const { books, remove } = useProducts();

    return (
        <section className="w-full h-full p-4">
            <table className={`w-full border border-[#ccc]  ${styles.table}`}>
                <thead>
                    <tr>
                        <th>ID</th>
                        <th>Image</th>
                        <th>Title</th>
                        <th>Author Name</th>
                        <th>Genre</th>
                        <th>Price</th>
                        <th>Actions</th>
                    </tr>
                </thead>
                <tbody>
                    {books.map((book) => (
                        <tr key={book.id}> 
                            <td>{book.id}</td>
                            <td><img className="w-[40px]" src={book.image} alt="" /></td>
                            <td>{book.name}</td>
                            <td>{book.author}</td>
                            <td>{book?.genre ?? 'NULL'}</td>
                            <td>{book.price}</td>
                            <td>
                                <button className="border border-orange-400 p-1 rounded-md text-orange-400 m-1"><PenIcon /></button>
                                <button className="border border-rose-500 p-1 rounded-md text-rose-500"
                                    onClick={() => remove(book.id)}
                                ><TrashIcon /></button>
                            </td>
                        </tr>
                    ))}
                </tbody>
            </table>
        </section>
    );
}
