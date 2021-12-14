import React from 'react'
import Item from '../Item/Item'
import './ItemList.css';

function ItemList({productos}) {
    return (
        <div className="productGrid">
        {productos.map((prod)=> <Item prod={prod} />)        }
        
        
        </div>
    )
}

export default ItemList
