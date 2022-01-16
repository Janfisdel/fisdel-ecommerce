import React from 'react'
import {Link} from 'react-router-dom'
import { useCartContext } from '../../context/CartContext'
import Button from '../Button/Button'
import './CartTotal.css'


function CartTotal() {
    const {deleteCart, addQuantity, addPrices} = useCartContext()
    return (
        <>
        <div className="cartTotal"><p>Cantidad total de productos: {addQuantity()} </p>
                                   <p> Precio total: ${addPrices()}</p>  
        </div>
{/*         
        <button className="button-vaciar" onClick={borrarCarrito}>Vaciar Carrito</button> */}
       <div onClick={deleteCart}><Button text='Vaciar Carrito' / ></div> 
        {/* <Link to="/buyerForm"><button className="button-vaciar" >Finalizar Compra</button></Link> */}
        <Link to="/buyerForm"><Button text='Finalizar compra' /></Link>
                                  
        </>
    )
}

export default CartTotal
