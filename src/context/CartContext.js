import {createContext, useState, useContext} from 'react'

const CartContext = createContext([])

export const useCartContext = ()=>useContext(CartContext)

function CartContextProvider({children}) {
    const [cartList, setCartList] = useState([])
      
    function addCart (item){
       //si el producto que agrego ya existe en el carrito, "indice" devuelve su posición, si no existe devuelve -1
        const index = cartList.findIndex(i=> i.id === item.id) 

        if(index >-1){
            //si el producto existe se elimina del carrito y se vuelve a agregar sumando la cantidad anterior y la nueva
            const quantPrev = cartList[index].quantity
            cartList.splice(index,1)
            setCartList([...cartList, {...item, quantity:item.quantity + quantPrev}])
            
        }else {
            //si el producto no existe solo se agrega al carrito
            setCartList([...cartList, item])
           
        }
       
    } 

    function deleteCart(){
        setCartList([])
    }

    function deleteItem(id){
       //Creo nuevo array con aquellos productos que no coincida el id con el del producto a eliminar
         const cartNoItem = cartList.filter(prodDelete=>prodDelete.id !== id) 
         setCartList(cartNoItem)
                
    }

    function addQuantity(){
        const totalQuantity = cartList.map(prod =>prod.quantity).reduce((a,b)=>a+b)
        return(
            totalQuantity
        )

    }
    function addPrices(){
        const totalPrice = cartList.map(prod=>prod.quantity*prod.price).reduce((a,b)=>a+b)
        
        return (
            totalPrice
        )
    }

    return (
        <CartContext.Provider value={{   
        cartList,
        addCart,
        deleteCart,
        deleteItem,
        addQuantity,
        addPrices

    }}>
        {children}
    </CartContext.Provider>
    )
}

export default CartContextProvider
