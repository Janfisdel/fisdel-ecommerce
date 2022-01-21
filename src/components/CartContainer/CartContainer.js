import { useCartContext } from '../../context/CartContext'
import {Link} from 'react-router-dom'
import Cart from '../Cart/Cart'
import Button from '../Button/Button'

function CartContainer() {
   const {cartList, deleteCart} =useCartContext() 

    return (
        <div className ='container'>
            <h1>Carrito de compras</h1>      
            
                 {cartList.length === 0 ? <><p>El carrito se encuentra vacio </p>
                                            <Link to="/" className='continueLink'> Continuar comprando</Link>
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
