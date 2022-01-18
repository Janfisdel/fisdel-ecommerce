import React from 'react'
import './BuyerForm.css';
import {Link} from 'react-router-dom'
import {addDoc, collection, getFirestore, Timestamp} from 'firebase/firestore'
import { useState } from "react";
import { useCartContext } from "../../context/CartContext"
import Button from '../Button/Button'

function BuyerForm() {
    const {cartList, deleteCart, addPrices, addQuantity} =useCartContext() 
    const [idOrder, setidOrder] = useState("")
    const [dataForm, setDataForm] = useState({
        name:"", phone:"", email:"", emailConfirm:""
    })
 
    const handlerChange = (e)=>{
         // console.log(e.target.name)
         // console.log(e.target.value)
         setDataForm({...dataForm, 
                     [e.target.name]:e.target.value})
    }
     console.log(dataForm)
     //pasar esto a otro componente?
 
     const generateOrder = (e)=>{
         e.preventDefault()

        let order= {}       
         order.date = Timestamp.fromDate(new Date())
         order.buyer= dataForm
         order.totalPrice = addPrices()
         order.totalQuantity = addQuantity()

 
         order.items = cartList.map( cartItem =>{
             const id = cartItem.id;
             const name = cartItem.name;
             const quantity = cartItem.quantity;
             const price = cartItem.price * cartItem.quantity
 
             return {id, name, quantity, price}
         })
         
 
         //Generar orden
 
         const db = getFirestore()
         const orderCollection = collection(db, 'orders')
         addDoc(orderCollection, order)
         .then(resp=>setidOrder(resp.id))
         .catch(err=> console.log(err))
         .finally(()=>{deleteCart()
             setDataForm({name:"", phone:"", email:"", emailConfirm:""})}
                     )

         
            
     }
   
    return (
        <div className ="container">
            <h1>Formulario de compra</h1>
            
            <form className="form" onSubmit={generateOrder}
               onChange={handlerChange}>
              <input type="text" name="name" placeholder="Nombre"  pattern="[a-zA-ZñÑáéíóú'´ÁÉÍÓÚ ]{2,50}" value={dataForm.name} required /> <br />
              <input type="text" name="phone" placeholder="Telefono" pattern="[0-9]{7,15}" value= {dataForm.phone} required /><br />
              <input type="email" name="email" placeholder="Ingrese su correo electronico" value={dataForm.email} required /><br />
              <input type="email" name="emailConfirm" placeholder="Confirme su  correo electronico" value={dataForm.emailConfirm} required /><br></br>
              


                {/* VER COMO SEPARAR QUE SI HAY PRODUCTOS APAREZCA VOLVER AL CARRITO Y SI ADEMAS PONE EL MAIL PERMITA FINALIZAR */}
              
              {cartList.length !== 0 & dataForm.name !== "" & dataForm.phone !== "" & dataForm.email !== "" & dataForm.email === dataForm.emailConfirm 
                  ? <Button text='Terminar compra' />
                //   <button className="buttonForm">Terminar compra</button> 
                    
                  : <p className='formIncomplete'>Por favor completar los campos obligatorios</p>
                 
                  } 

          </form>
               
            {idOrder.length !== 0 && <> <p>Compra finalizada. La orden es {idOrder}</p>
                                    <p><Link to="/" className="enlaceContinuar"> Realizar otra  compra </Link></p> </>}
       
        </div>
    )
}

export default BuyerForm
