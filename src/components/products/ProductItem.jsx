import Flex from "../shared/Flex";


export default function ProductItem({ book }) {
    return (
        <Flex as="article">
            <div>
                <img src={book.image} alt="" />
            </div>
            <div>
                <h5>{book.name}</h5>
                <p>{book.author}</p>
                <div>
                    <span>${book.price}</span>
                    <span>${book.discount_price}</span>
                </div>
            </div>
        </Flex>
    )
}
