import React, {useState} from 'react'

function ItemCount({stock, initial}) {


    const [value, setValue] = useState(initial)

    const handleSuma = (valor)=>{
        value < stock ? setValue(previo => previo+ valor): console.log('compra maxima posible')
    }

    const handleResta =(valor)=>{
        value > initial ? setValue(estadoPrevio => estadoPrevio - valor) : console.log('compra minima posible')
    }


    //ESTA ES LA CONSULTA QUE TENGO SOBRE LA FUNCION onADD
    const onAdd =()=>{
        alert("Producto agregado")
    }

    return (
        <div>
        <p>{value}</p>    
        <button onClick={()=>handleSuma(1)}>+</button>
        <button onClick={()=>handleResta(1)}>-</button>
        <button onClick={onAdd}>Agregar al carrito</button>
        
        </div>
    )
}

export default ItemCount
