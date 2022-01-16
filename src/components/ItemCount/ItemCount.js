import React, {useState} from 'react';
import './ItemCount.css';
import Button from '../Button/Button';

function ItemCount({stock, initial, onAdd}) {


    const [value, setValue] = useState(initial)

    const handleAddition = (plus)=>{
        value < stock ? setValue(stateBefore=> stateBefore + plus): console.log('compra maxima posible')
    }

    const handleSubtraction =(minus)=>{
        value > initial ? setValue( stateBefore => stateBefore - minus) : console.log('compra minima posible')
    }

    return (
        <>
            <div className='divCount'>
        <p  className='pCount' onClick={()=>handleAddition(1)}><Button text='+'/></p> 
        <p className='pCount'>{value}</p>  
       
        <p className='pCount' onClick={()=>handleSubtraction(1)}><Button text='-'/></p>
        </div>
        
        <p className='pCount' onClick={()=>onAdd(value)}><Button  text='Agregar al carrito' / ></p>
        
        </>
    )
}
export default ItemCount
