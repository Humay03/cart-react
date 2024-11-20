import axios from "axios";
import { createContext, useContext, useEffect, useState } from "react";

const ProductContext = createContext(null);

export const useProducts = () => {
    if (!ProductContext) return "context ehtiyac var!";
    return useContext(ProductContext);
};

export default function ProductProvider({ children }) {
    const [books, setBooks] = useState([]);

    const getProducts = async () => {
        const request = await fetch('http://localhost:4000/Books');
        return await request.json();
    }

    useEffect(() => {
        getProducts().then(data => setBooks(data))
    }, []);

    const deleteBook = async (id, cb) => {
        if (!id) return "ID is required";
        const result = await axios.delete(`http://localhost:4000/Books/${id}`);

        if (result.status === 200) {
            cb?.();
        }
    }

    if (!books.length) return <div>Loading...</div>
    return (
        <ProductContext.Provider value={{
            books,
            remove: deleteBook,
        }}>
            {children}
        </ProductContext.Provider>
    )
}
