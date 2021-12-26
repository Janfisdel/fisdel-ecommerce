import {createContext, useState, useContext} from 'react'

const CartContext = createContext([])

export const useCartContext = ()=>useContext(CartContext)

function CartContextProvider({children}) {
    const [cartList, setCartList] = useState([])
      
    function agregarAlCarrito (item){
       //si el producto que agrego ya existe en el carrito, "indice" devuelve su posición, si no existe devuelve -1
        const indice = cartList.findIndex(i=> i.id === item.id) 

        if(indice >-1){
            //si el producto existe se elimina del carrito y se vuelve a agregar sumando la cantidad anterior y la nueva
            const cantPrevia = cartList[indice].cantidad
            cartList.splice(indice,1)
            setCartList([...cartList, {...item, cantidad:item.cantidad + cantPrevia}])
            
        }else {
            //si el producto no existe solo se agrega al carrito
            setCartList([...cartList, item])
           
        }
       
    } 

    function borrarCarrito(){
        setCartList([])
    }

    function borrarItem(id){
       //Creo nuevo array con aquellos productos que no coincida el id con el del producto a eliminar
         const cartSinItem = cartList.filter(prodEliminar=>prodEliminar.id !== id) 
         setCartList(cartSinItem)
                
    }

    function sumarCantidades(){
        const cantidadTotal = cartList.map(prod =>prod.cantidad).reduce((a,b)=>a+b)
        return(
            cantidadTotal
        )

    }
    function sumarPrecios(){
        const precioTotal = cartList.map(prod=>prod.cantidad*prod.precio).reduce((a,b)=>a+b)
        
        return (
            precioTotal
        )
    }

    return (
        <CartContext.Provider value={{   
        cartList,
        agregarAlCarrito,
        borrarCarrito,
        borrarItem,
        sumarCantidades,
        sumarPrecios

    }}>
        {children}
    </CartContext.Provider>
    )
}

export default CartContextProvider
