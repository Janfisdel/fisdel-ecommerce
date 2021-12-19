import React, {useState} from 'react';
import {Link} from 'react-router-dom'
import './ItemDetail.css';
import ItemCount from '../ItemCount/ItemCount'

function ItemDetail({item}) {
 
  const [irCarrito, setIrCarrito] = useState(true)
 
  const onAdd=(cantidad)=>{
    console.log(cantidad)
      setIrCarrito(false)
  }
    
    return (
        <div key={item.id}>
            <p> Producto: {item.nombre}</p>
            <p> Descripcion: {item.descripcion}</p>
            <p>
                 <img className='imgDetail' src={item.img} alt={item.alt} />
            </p>
            <p>precio: ${item.precio}</p>
             <div> {irCarrito ? <ItemCount  stock ={item.stock} initial={1} onAdd={onAdd}/> :  <Link to="/cart"><button className="button-cart">Ir al carrito</button></Link>}
            </div>
           
        </div>
    )
}

export default ItemDetail
