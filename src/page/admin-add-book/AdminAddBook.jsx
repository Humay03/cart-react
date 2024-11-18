import { useNavigate } from "react-router-dom";
import styles from "../../components/layout/styles/admindashboard.module.css";

export default function AdminAddBook() {
    const navigate = useNavigate();
    const handleSubmit = async (e) => {
        e.preventDefault();

        const { author, name, genre, price, image } = e.currentTarget;

        if (
            author !== "" && name !== "" && genre !== "" && price !== "" && image !== ""
        ) {
            const data = {

                author: author.value,
                name: name.value,
                genre: genre.value,
                price: price.value,
                image: image.value,

            }

            const response = await fetch("http://localhost:4000/Books", {
                method: "POST",
                header: {
                    "Content-Type": 'application/json'
                },
                body: JSON.stringify(data)
            })
            if (response.ok) {
                navigate('/')
            }
        }
    };

    return (
        <div className={styles.authorPost}>
            <form onSubmit={handleSubmit} className={styles.bookBox}>
                <input type="text" placeholder="Author Name" name="author" />
                <input type="text" placeholder="Book Title" name="name" />
                <input type="text" placeholder="Genre" name="genre" />
                <input type="number" placeholder="Price" name="price" />
                <input type="text" placeholder="Image Url" name="image" />
                <button>SEND</button>
            </form>
        </div>
    )
}
