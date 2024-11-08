import { Heart, ShoppingBag, Star } from "lucide-react";
import Flex from "../shared/Flex";
import styles from "./product.module.css";
import { useNavigate } from "react-router-dom";


export default function ProductItem({ book }) {
    const navigate =useNavigate();

    return (
        <Flex as="article" className={styles.productItem}>
            <div className={styles.productImage}>
                <img src={book.image} alt="" />
                <div className={styles.productHover}>
                  <button onClick={() => navigate(`/books/${book.id}`)}>Wiev Book</button>
                </div>
            </div>
            <div>
                <h5>{book.name}</h5>
                <p>{book.author}</p>
                <div>
                    <Star size={16} strokeWidth={3} />
                    <Star size={16} strokeWidth={3} />
                    <Star size={16} strokeWidth={3} />
                    <Star size={16} strokeWidth={3} />
                    <Star size={16} strokeWidth={3} />
                </div>
                <div>
                    <span>${book.price}</span>
                    <span>${book.discount_price}</span>
                </div>
                <div>
                    <button><ShoppingBag size={16} strokeWidth={1.25} /></button>
                    <button><Heart size={16} strokeWidth={1.25} /></button>
                </div>
            </div>
        </Flex>
    )
}
