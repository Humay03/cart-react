import { ShoppingCart } from "lucide-react";
import styles from './styles/header.module.css';
import Flex from "../shared/Flex";

export default function Header() {
    return (
        <Flex as="header" className={styles.header} justifyContent="space-between">
            <div >
                search
            </div>
            <div>
                <ul>
                    <li>
                        <button>
                            <ShoppingCart />
                        </button>
                    </li>
                </ul>
            </div>
        </Flex>
    )
}
