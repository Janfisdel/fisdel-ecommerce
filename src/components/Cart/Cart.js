import {Table} from 'react-bootstrap'
import { useCartContext } from '../../context/CartContext'
import CartItem from '../CartItem/CartItem'
import './Cart.css'

function Cart() {
  const { cartList, addQuantity, addPrices } = useCartContext();
  return (
    <Table striped bordered hover>
      <thead>
        <tr>
          <th></th>
          <th>Producto</th>
          <th>Cantidad</th>
          <th>Precio</th>
          <th>Eliminar</th>
        </tr>
      </thead>
      <tbody>
        {cartList.map((prod) => (
          <CartItem prod={prod} /> 
        ))}
        <tr>
          <th></th>
          <td>Cantidad total:</td>
          <td>{addQuantity()}</td>
          <td>Precio total:</td>
          <td>${addPrices()}</td>
          </tr>
      </tbody>
    </Table>
  );
}

export default Cart;
