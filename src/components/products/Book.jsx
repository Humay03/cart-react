import { useParams } from "react-router-dom";
import { useProducts } from "../../providers/context/ProductContext";
import { Facebook, Heart, Linkedin, Star, Twitter, Youtube } from "lucide-react";
import { useCartState } from "../../providers/context/CartContext";
import styles from "../products/book.module.css";
import Flex from "../shared/Flex";

export default function Book() {
    const { books } = useProducts();
    const { add } = useCartState();
    const { id } = useParams();
    const book = books.find((item) => item.id === Number(id));
    return (
        <div className={styles.aboutBook}>
            {book ? (
                <Flex as="div" className={styles.Book}>
                    <div>
                        <img src={book.image} alt="" />
                    </div>
                    <div>
                        <h5>{book.name}</h5>
                        <div className={styles.price}>
                            <span>${book.price}</span>
                            <span className={styles.discount_price}>${book.discount_price}</span>
                        </div>
                        <div className={styles.stars}>
                            <Star size={16} strokeWidth={3} />
                            <Star size={16} strokeWidth={3} />
                            <Star size={16} strokeWidth={3} />
                            <Star size={16} strokeWidth={3} />
                            <Star size={16} strokeWidth={3} />
                        </div>
                        <div>
                            <p>
                                Monterhing in the best book testem ipsum is simply dtest in find in a of the printing and typeseting industry into to end.in find in a of the printing and typeseting industry in find to make it all done into end.
                            </p>
                        </div>
                        <Flex as="div" className={styles.authorName}>
                            <span>Author:</span><p>{book.author}</p>
                        </Flex>
                        <div>
                            <button onClick={() => add(book)}>Add to Cart</button>
                            <button>Read Sample</button>
                        </div>
                        <div className={styles.wishlist}>
                            <Heart size={16} /><h6>Add to Wishlist</h6>
                        </div>
                        <div className={styles.share}>
                            <h5>Share:</h5> <Facebook size={16} strokeWidth={1.5} />
                            <Twitter size={16} strokeWidth={1.5} />
                            <Youtube size={16} strokeWidth={1.5} />
                            <Linkedin size={16} strokeWidth={1.5} />

                        </div>
                    </div>
                </Flex>
            ) : (<p>Loading..</p>)}
        </div>
    )
}
