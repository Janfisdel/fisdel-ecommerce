import React from 'react'
import { useState, useEffect } from 'react'
import {useParams} from 'react-router-dom'
//import getFetch from '../../helpers/getFetch'
import ItemList from '../ItemList/ItemList'
import {getDocs, getFirestore, collection, query, where} from 'firebase/firestore'
import Loading from '../Loading/Loading'

function ItemListContainer({greeting}) {
    const [products, setProducts]=useState([])
    const [loading, setLoading] = useState(true)

    const {idCategory} = useParams()

     useEffect(()=>{

         const db= getFirestore()

         const queryCollection = idCategory ?
                                 query(collection(db, 'products'), where('category', '==', idCategory))
                                : collection(db, 'products')

        getDocs(queryCollection)
        .then(resp => setProducts( resp.docs.map(prod => ({ id: prod.id, ...prod.data() }) ) ) )
        .catch(err=>console.log(err))
        .finally(()=>setLoading(false))
                                
    //   if (idCategoria) {
    //    
     
    //     const queryCollection = ;
    //     

    //     }else {
    //             const db= getFirestore()
    //             const queryCollection= collection(db, 'productos')
    //             getDocs(queryCollection)
    //             .then(resp => setProductos( resp.docs.map(prod => ({ id: prod.id, ...prod.data() }) ) ) )
    //             .catch(err =>console.log(err))
    //             .finally(()=>setLoading(false))

        
     },[idCategory])


    
    return (
        <main className ="container">
            <h1>{greeting}</h1>
            {loading ? <Loading />
                     :<ItemList products={products} />
            }
           
        </main>
    )
}

export default ItemListContainer
