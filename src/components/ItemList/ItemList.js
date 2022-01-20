import Item from '../Item/Item'
import './ItemList.css'

function ItemList({products}) {
    return (
        <div className='productGrid'>
             {products.map((prod)=> <Item key={prod.id} prod={prod} />)        }
        </div>
    )
}

export default ItemList
