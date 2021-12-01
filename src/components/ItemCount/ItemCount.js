import React, {useState} from 'react'

function ItemCount({stock, initial}) {


    const [value, setValue] = useState(initial)

    const handleSuma = (valor)=>{
        value < stock ? setValue(previo => previo+ valor): console.log('compra maxima posible')

        // if (value <stock)
        // setValue(value + 1)
    }

    const handleResta =(valor)=>{
        value > initial ? setValue(estadoPrevio => estadoPrevio - valor) : console.log('compra minima posible')



        // if (value > initial){
        // setValue(value - 1)
        // }
        
    }
    
    const handleAgregar =()=>{
        console.log('Se agregaron' + {} + 'productos al carrito')
    }

    return (
        <div>
        <p>{value}</p>    
        <button onClick={()=>handleSuma(1)}>+</button>
        <button onClick={()=>handleResta(1)}>-</button>
        <button onClick={handleAgregar}>Agregar al carrito</button>
        
        </div>
    )
}

export default ItemCount
