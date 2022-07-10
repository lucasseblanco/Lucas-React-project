import { useContext } from "react"
import {BsCartPlus} from "react-icons/bs"
import { Link } from "react-router-dom"
import CartContext from "../Context/CartContext"

const CartWidget = () => {

  const {totalQuantity} = useContext(CartContext)

  return (
    <Link to="/Carrito" className="contador" >
        <BsCartPlus className="carro"/>
        <span>{totalQuantity()}</span>
    
        </Link>
        
  )
  
}
export default CartWidget