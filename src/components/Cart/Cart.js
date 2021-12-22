import { useCartContext } from "../../context/CartContext"
import {Link} from 'react-router-dom'
import './Cart.css';


function Cart() {
   const {cartList, borrarCarrito, borrarItem} =useCartContext()
   
  return (
        <div className ="container">
          <h1>Carrito de compras</h1>  
          {cartList.map(prod=><li key={prod.id}>{prod.nombre} - {prod.cantidad} - ${prod.precio * prod.cantidad} - 
                                                <svg onClick={() => borrarItem(prod.id)} xmlns="http://www.w3.org/2000/svg" fill="currentColor" className="trash" viewBox="0 0 16 16">
                                                     <path d="M2.5 1a1 1 0 0 0-1 1v1a1 1 0 0 0 1 1H3v9a2 2 0 0 0 2 2h6a2 2 0 0 0 2-2V4h.5a1 1 0 0 0 1-1V2a1 1 0 0 0-1-1H10a1 1 0 0 0-1-1H7a1 1 0 0 0-1 1H2.5zm3 4a.5.5 0 0 1 .5.5v7a.5.5 0 0 1-1 0v-7a.5.5 0 0 1 .5-.5zM8 5a.5.5 0 0 1 .5.5v7a.5.5 0 0 1-1 0v-7A.5.5 0 0 1 8 5zm3 .5v7a.5.5 0 0 1-1 0v-7a.5.5 0 0 1 1 0z"/>
                                                </svg>
                                          </li>)}
          
          <button className="button-vaciar" onClick={borrarCarrito}>Vaciar Carrito</button>
          
        
        </div>
    )
}

export default Cart
