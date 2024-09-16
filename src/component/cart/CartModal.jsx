import { useRef, forwardRef, useImperativeHandle } from "react";
import { createPortal } from "react-dom";
import './cart.css'
import Cart from "./cart";

// export default function CartModal()
const CartModal = forwardRef(function Modal({action},ref){
    const dialog = useRef();
    useImperativeHandle(ref,()=> {
        return{
            open: () => {
                dialog.current.showModal();
            }
        }
    })
    return createPortal(
        <dialog id="modal" ref={dialog}>
            <h2>title</h2>
            <Cart />
            <form method="dialog" id="modal-action">
            {action}
            </form>
        </dialog>,
        document.getElementById('modal')
    )
})



export default CartModal;