import React from 'react'
import Item from '../Item/Item'
import './ItemList.css';

function ItemList({productos}) {
    return (
        <div className="productGrid">
            {/* PREGUNTAR SI ESTA BIEN LA KEY AHI SINO ME TIRA ERROR */}
        {productos.map((prod)=> <Item key={prod.id} prod={prod} />)        }
        </div>
    )
}

export default ItemList
