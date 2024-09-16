import './product.css'
import { useDispatch } from 'react-redux'
import { addItemToCart } from '../store/slices/product-slices'


function Product({image, title, price, description, id}){
    const dispatch = useDispatch();

    return(   
        <article className='product'>
        <img src={image} alt={title} />
        <div className="product-content">
        <div>
            <h3>{title}</h3>
            <p className="product-price">${price}</p>
            <p >{description}</p>
        </div>
        <p className="product-actions">
            <button onClick={() => dispatch(addItemToCart(id))}>Add to Cart</button>
        </p>
        </div>
        </article>
        )
}


export default Product