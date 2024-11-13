import { Search, ShoppingCart } from "lucide-react";
import styles from "./styles/header.module.css";
import Flex from "../shared/Flex";
import Dropdown, { DropdownContent, DropdownTrigger } from "../shared/Dropdown";
import { Link } from "react-router-dom";
import { useCartState } from "../../providers/context/CartContext";

export default function Header() {
    const { count, cart, clear, remove } = useCartState();


    return (
        <Flex as="header" className={styles.header} justifyContent="space-between">
            <div>
                <Link to='/'>BOOKSHOPPING</Link>
                <span>
                    <Search size={20} strokeWidth={0.75} />
                </span>
                <input type="search" name="" id="" placeholder="Search..." />
            </div>
            <div>
                <ul>
                    <Flex as="ul" style={{cloumnGap:12}}>
                        <li>
                            <Link to="/admin">Admin</Link>
                        </li>
                    </Flex>
                    <Dropdown as="li">
                        <DropdownTrigger>
                            <ShoppingCart />
                            <span >{count}</span>
                        </DropdownTrigger>
                        <DropdownContent>
                            <Flex as="ul" direction="column" className={styles.cartDropdownContent}>
                                {cart.length ? cart.map((item) => (
                                    <Flex as="li" className={styles.products} key={item.id}>
                                        <div>
                                            <img src={item.image} alt="" />
                                        </div>
                                        <div>
                                            <span>{item.author}</span>
                                            <span>${item.discount_price}</span>
                                            <b>X{item.quantity}</b>
                                        </div>
                                        <button onClick={() => remove(item.id)}>X</button>
                                    </Flex>
                                )) : (
                                    <li>Cart is Empty!</li>
                                )}
                            </Flex>
                            <Flex as="li" direction='column' alignItems='strech'>
                                <button onClick={clear}>Clean Cart</button>
                            </Flex>
                        </DropdownContent>
                    </Dropdown>
                </ul>
            </div>
        </Flex>
    );
}