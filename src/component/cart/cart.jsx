import './cart.css'
import { useDispatch, useSelector } from 'react-redux'
import { updateQuantity } from '../store/slices/product-slices'


export default function Cart(){
    const dispatch = useDispatch();
    const items =useSelector((state) => state.product.item)

    const totalPrice = items.reduce(
        (acc, item) => acc + item.price * item.quantity,
        0
    )


    return(
        <div className="cart">
        {items.length ===0 && <p>No items in cart!</p>}
        {items.length > 0 && (
            <ul id="cart-items">
            {items.map(item => {
                return (
                    <>
                    <li key={item.id}>
                        <div>
                            <span>{item.name}</span>
                            <span>{`$${item.price.toFixed(2)}`}</span>
                        </div>
                        <div className="cart-item-actions">
                            <button 
                                onClick={() => dispatch(updateQuantity({
                                    productId: item.id,
                                    amount: -1
                                }))}
                            >
                                -
                            </button>
                            <span>{item.quantity}</span>
                            <button
                                onClick={()=> dispatch(updateQuantity({
                                    productId: item.id,
                                    amount: 1 
                                }))}
                            >
                                +
                            </button>
                        </div>
                    </li>
                    </>
                )
            })}
            </ul>
        )}

            <p id="cart-total-price">
            Cart Total: <strong>{`$${totalPrice.toFixed(2)}`}</strong>
            </p>
        </div>
    )
}