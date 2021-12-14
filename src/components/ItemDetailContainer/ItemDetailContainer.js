import React from 'react'
import { useState, useEffect } from 'react'
import { useParams } from 'react-router-dom'
import getFetch from '../../helpers/getFetch'
import ItemDetail from '../ItemDetail/ItemDetail'


function ItemDetailContainer() {
    const [item, setItem] = useState({})
    const [loading, setLoading] = useState(true)
    
    const {idProd} = useParams()
    useEffect(()=>{
        getFetch
        .then(resp =>setItem(resp.find((prod)=>prod.id===parseInt(idProd))))
        .catch(err =>console.log(err))
        .finally(()=>setLoading(false))
        
    },[idProd])
    
    

    return (
        <div className ="container">
            <h1>Detalle de producto </h1>
            {loading ? <div className="preCarga"></div>
            :  <ItemDetail item={item}/>}
        </div>
    )
}

export default ItemDetailContainer
