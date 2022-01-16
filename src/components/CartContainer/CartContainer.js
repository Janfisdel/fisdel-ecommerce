import { useCartContext } from "../../context/CartContext"
import {Link} from 'react-router-dom'
import './CartContainer.css';
import Cart from "../Cart/Cart";
import CartTotal from "../CartTotal/CartTotal";



function CartContainer() {
   const {cartList} =useCartContext() 
  

    return (
        <div className ="container">
          <h1>Carrito de compras</h1>      
            
                                
          {cartList.length === 0 ? <><p>El carrito se encuentra vacio </p>
                                        <Link to="/" className="enlaceContinuar"> Continuar comprando</Link>
                                  </>
                                 :<> <Cart />
                                    <CartTotal />
                                    </>}
          
          
       
        </div>
    )
}

export default CartContainer
