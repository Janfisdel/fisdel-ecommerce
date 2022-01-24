import {useState} from 'react'
import Button from '../Button/Button'
import './ItemCount.css'

function ItemCount({stock, initial, onAdd}) {
    const [value, setValue] = useState(initial)
    
    const handleAddition = (plus)=>{
        value < stock ? setValue(stateBefore=> stateBefore + plus)
                      : setValue(value)
    }
    
    const handleSubtraction =(minus)=>{
        value > initial ? setValue( stateBefore => stateBefore - minus) 
                        : setValue(value)
    }

    return (
        <>
            <div className='divCount'>
                <div   onClick={()=>handleAddition(1)}>
                    <Button text='+'/>
                </div> 
                    <p className='pCount'>
                        {value}
                    </p>  
                <div  onClick={()=>handleSubtraction(1)}>
                    <Button text='-'/>
                </div>
            </div>
        
            <div  onClick={()=>onAdd(value)}>
                <Button  text='Agregar al carrito' / >
            </div>
        
        </>
    )
}
export default ItemCount
