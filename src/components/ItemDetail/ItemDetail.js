import {useState} from 'react'
import {Link} from 'react-router-dom'
import ItemCount from '../ItemCount/ItemCount'
import { useCartContext } from '../../context/CartContext'
import Button from '../Button/Button'
import './ItemDetail.css'

function ItemDetail({item}) {
  const [goCart, setGoCart] = useState(true)
  const {addCart} = useCartContext()

  function onAdd(cant){
     setGoCart(false)
     addCart({...item, quantity:cant})
  }

    return (
     <>  <div key={item.id}>
            <h2>  {item.name}</h2>
            <div className='divDetail'>
                <img className='imgDetail' src={item.img} alt={item.alt} />
                <div className='descriptionItem'>
                         <p> Descripcion: {item.description}</p>
                         <p>Precio: ${item.price}</p>
              
                        {goCart ? <ItemCount  stock ={item.stock} initial={1} onAdd={onAdd}/> 
                                   :<Link to="/cart"><Button text='Ir al carrito'/></Link>
                        }
                </div>
            </div>  
        </div>

        <div className='descriptionItem'>
              <Link  to="/" ><Button text='Continuar comprando'/></Link>
        </div>
      </> 
  
    )
}
export default ItemDetail
