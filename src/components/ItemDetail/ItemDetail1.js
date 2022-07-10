import { useNavigate } from "react-router-dom"
import '../../App.css';
import ItemCount from "../Counter/ItemCount";
import { useState, useContext } from "react";
import CartContext from "../Context/CartContext";
import { Link } from "react-router-dom";



const ItemDetail1 = ({item}) => {

  const {addItem, isInCart} = useContext(CartContext)

  const [cantidad, setCantidad] = useState(1)

   const navigate = useNavigate()

   const handleVolver = () => {
      navigate(-1)
  }

   const handleAgregar = () =>{
     const itemToCart = {
       ...item,
       cantidad
     }
     addItem(itemToCart)
     
   }

   

   

   
     return(
       <div>

<h4 className="ItemDetailName" >{item.nombre}</h4>
      <img src={`../../${item.img}`} alt={item.nombre}/>
      <h4 className="ItemDetailName" > Categoria: {item.categoria}</h4>
      <h4 className="ItemDetailName2" > Precio: $ {item.precio}</h4>
      <hr />
      {
        isInCart(item.id)
        ?
        <Link to="/Carrito" >
          <button className="irAlCarrito">Ir al carrito</button>
          <hr />
      </Link>
      
      :
      <ItemCount
      max={item.stock}  
      counter={cantidad}
      setCounter={setCantidad}
      onAdd={handleAgregar}
    />
    
      }
      
      <button onClick={handleVolver} className="botonVolver" >Volver</button>
       </div>
       
     )
   }
   

export default ItemDetail1