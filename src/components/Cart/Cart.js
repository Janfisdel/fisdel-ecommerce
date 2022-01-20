import {Table} from 'react-bootstrap'
import { useCartContext } from '../../context/CartContext'
import './Cart.css'

function Cart() {
  const { cartList, deleteItem, addQuantity, addPrices } = useCartContext();
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
          <tr key={prod.id}>
            <td> <img className='imgCart' src={prod.img} alt={prod.alt} /></td>
            <td>{prod.name}</td>
            <td>{prod.quantity}</td>
            <td>$ {prod.price * prod.quantity}</td>
            <td>
              <svg
                onClick={() => deleteItem(prod.id)}
                xmlns="http://www.w3.org/2000/svg"
                fill="currentColor"
                className='deleteItem'
                viewBox="0 0 16 16"
              >
                <path d="M2.5 1a1 1 0 0 0-1 1v1a1 1 0 0 0 1 1H3v9a2 2 0 0 0 2 2h6a2 2 0 0 0 2-2V4h.5a1 1 0 0 0 1-1V2a1 1 0 0 0-1-1H10a1 1 0 0 0-1-1H7a1 1 0 0 0-1 1H2.5zm3 4a.5.5 0 0 1 .5.5v7a.5.5 0 0 1-1 0v-7a.5.5 0 0 1 .5-.5zM8 5a.5.5 0 0 1 .5.5v7a.5.5 0 0 1-1 0v-7A.5.5 0 0 1 8 5zm3 .5v7a.5.5 0 0 1-1 0v-7a.5.5 0 0 1 1 0z" />
              </svg>
            </td>
          </tr>
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
