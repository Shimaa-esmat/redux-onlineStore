import shopLogo from '../../assets/logo-removebg-preview.png'
import './header.css'
import CartModal from '../cart/CartModal'
import { useRef } from 'react'
import { useSelector } from 'react-redux'

function Header(){
    const modal = useRef()
    const items = useSelector((state) => state.product.item)

    const itemsQuantity = items.length


    function handleOpenCart(){
        modal.current.open()
    }
    let modalAction = <button>close</button>;
    
    return (
        <>
            <CartModal ref={modal} action={modalAction}/>
            <header id="main-header">
                <div id="main-title">
                <img src={shopLogo} alt='shop logo'/>
                <h2>online store</h2>
                </div>
                <button onClick={handleOpenCart}>cart({itemsQuantity})</button>
            </header>
        </>
    )
}


export default Header