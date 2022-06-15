import { Children, createContext } from "react"
import { useState } from "react"


 export const CartContext = createContext()

export const CartProvider = ({children}) =>{
    const [cart,setCart] = useState([])
  

  const addItem = (item) => {
    /*const newCart = cart.slice()
    newCart.push(item)
    setCart(newCart)*/
    setCart([...cart, item])
  }

  const isInCart = (id) => {
    return cart.some((prod)=> prod.id === id) /*Some es como find pero con true o false*/
  }


  const totalCarrito = () => {
    return cart.reduce(( acc,prod ) => acc += (prod.precio * prod.cantidad), 0 )
    
  }

  const totalQuantity = () => {
    return cart.reduce(( acc,prod ) => acc += (prod.cantidad), 0 )
  }
    
  const emptyCart = () => {
    setCart ([])
  }

    return (
    <CartContext.Provider value={{cart, 
        addItem,
        isInCart,
        totalCarrito,
        totalQuantity,
        emptyCart}} 
    >
        {children} 

</CartContext.Provider>
)
}

export default CartContext


