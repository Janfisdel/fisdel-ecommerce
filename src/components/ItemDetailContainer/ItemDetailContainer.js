import { useState, useEffect } from 'react'
import { useParams } from 'react-router-dom'
import ItemDetail from '../ItemDetail/ItemDetail'
import {doc, getDoc, getFirestore} from 'firebase/firestore'
import Loading from '../Loading/Loading'
import NotFound from '../NotFound/NotFound'

function ItemDetailContainer() {
    const [item, setItem] = useState({})
    const [loading, setLoading] = useState(true)
    const [status, setStatus] = useState()
    const {idProd} = useParams()
 
    useEffect(()=>{
        const db= getFirestore()
        const queryDb = doc(db, 'products', idProd)
        getDoc(queryDb)
        .then(answer=>!(answer._document === null) ? setItem({id: answer.id, ...answer.data()})
                                               : setStatus('error'))
        .catch(err=>console.log(err))
        .finally(()=>setLoading(false))
    },[idProd])
     
        if (status) {
            return (
                    <NotFound />
            )
        }
        else{
            return (
                    <div className ='container'>
                        <h1>Detalle de producto </h1>
                        {loading ? <Loading />
                                 : <ItemDetail item={item}/>}
                    </div>
                    )
        }
    
    
}

export default ItemDetailContainer
