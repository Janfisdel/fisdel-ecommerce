import { useCartContext } from '../../context/CartContext'
import {Link} from 'react-router-dom'
import Cart from '../Cart/Cart'
import Button from '../Button/Button'
import './CartContainer.css'

function CartContainer() {
   const {cartList, deleteCart} =useCartContext() 

    return (
        <div className ='container'>
            <h1 className='title'>Carrito de compras</h1>      
            
                 {cartList.length === 0 ? <><p className='emptyCart'>El carrito se encuentra vacío </p>
                                            <Link to="/"> <Button text='Continuar comprando' /></Link>
                                          </>
                                        :<> <Cart />
                                            <Link to="/buyerForm">
                                                <Button text='Finalizar compra' />
                                            </Link>
                                            <Link to="/">
                                                <Button text='Continuar comprando' />
                                            </Link>
                                            <div onClick={deleteCart}>
                                                <Button text='Vaciar Carrito' />
                                            </div> 
                                    </>}
        </div>
    )
}

export default CartContainer
