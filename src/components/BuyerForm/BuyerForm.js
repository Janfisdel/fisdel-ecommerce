import './BuyerForm.css'
import {Link} from 'react-router-dom'
import {addDoc, collection, getFirestore, Timestamp} from 'firebase/firestore'
import {useState} from 'react'
import {useCartContext} from '../../context/CartContext'
import Button from '../Button/Button'

function BuyerForm() {
    const {cartList, deleteCart, addPrices, addQuantity} =useCartContext() 
    const [idOrder, setIdOrder] = useState("")
    const [dataForm, setDataForm] = useState({
        name:"", phone:"", email:"", emailConfirm:""
    })
    
    const handlerChange = (e)=>{
         setDataForm({...dataForm, 
                     [e.target.name]:e.target.value})
    }
  
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
         
         const db = getFirestore()
         const orderCollection = collection(db, 'orders')
         addDoc(orderCollection, order)
         .then(answer=>setIdOrder(answer.id))
         .catch(err=> console.log(err))
         .finally(()=>{deleteCart()
             setDataForm({name:"", phone:"", email:"", emailConfirm:""})}
                     )
     }
   
    return (
        <div className ='container'>
            <h1>Formulario de compra</h1>
            
            <form className='form' onSubmit={generateOrder}>
              <label>Nombre completo:</label>
              <input type="text" name="name" placeholder="Nombre"  pattern="[a-zA-ZñÑáéíóú'´ÁÉÍÓÚ ]{2,50}" onChange={handlerChange} value={dataForm.name} size="35" required /> 
                    <span className='formIncomplete'>*</span> <br />
              <label >Telefono:</label>
              <input type="text" name="phone" placeholder="Telefono" pattern="[0-9]{7,15}" onChange={handlerChange} value= {dataForm.phone} size="35" required /> 
                    <span className='formIncomplete'>*</span> <br/>
              <label>Correo electrónico:</label>
              <input type="email" name="email" placeholder="Ingrese su correo electronico" onChange={handlerChange} value={dataForm.email} size="35" required /> 
                    <span className='formIncomplete'>*</span> <br />
              <label >Confirmar correo electrónico</label>
              <input type="email" name="emailConfirm" placeholder="Confirme su  correo electronico" onChange={handlerChange}  value={dataForm.emailConfirm} size="35" required />
                    <span className='formIncomplete'>*</span> <br/>
              
              <p className='formIncomplete'> * Por favor completar los campos obligatorios</p>      
               
             {cartList.length !== 0 & dataForm.name !== "" & dataForm.phone !== "" & dataForm.email !== "" & dataForm.email === dataForm.emailConfirm 
                          ? <div className='buttonForm'><Button text='Terminar compra' /></div>
                          : <></>
              }
            </form>

            
            {idOrder.length !== 0 ? <div className='orderSuccess'> 
                                        <h3>Gracias por elegirnos! </h3>
                                        <p>Compra realizada con exito. La orden es {idOrder}</p>
                                        <p><Link to="/"> 
                                             <Button text='Realizar otra compra' />
                                          </Link> 
                                        </p>
                                    </div>
                                 : <Link to="/">
                                         <Button text='Continuar comprando' />
                                   </Link>
            }
        </div>
    )
}

export default BuyerForm
