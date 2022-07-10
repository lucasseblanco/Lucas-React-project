import { useContext } from "react";
import  CartContext from "../Context/CartContext";
import { useNavigate, Link } from "react-router-dom";
import { BsTrash2Fill } from "react-icons/bs"



const Carrito = ({item}) => {

  const {cart, totalCarrito, emptyCart, removeItem, } = useContext(CartContext)

  const navigate = useNavigate()

  const handleVolver = () => {
    navigate(-1)
}





  return(
    <div className="container my-5"> 


    {
      cart.length === 0
      ?
      <>
      <h2 className="CarroVacio"> Carro vacio</h2>
      <hr />
      <Link to="./Carrito" className="CarroBoton"> Ir a comprar </Link>

       </>

       : <>
      
      {
        
        cart.map((item) => {
          return (
          <div key={item.id} className="my-2">
            <h4 className="itemDetail" >{item.nombre}</h4>
            <img src={`../../${item.img}`} alt={item.nombre}/>
            <p>Cantidad: {item.cantidad}</p>
            <h5 className="carritoFont1" >precio por unidad: {item.precio}</h5>
            <button onClick={() => removeItem(item.id)} className="btn btn-outline-dark" ><BsTrash2Fill/></button>
            <h6 className="carritoFont2"> Precio total: $ {item.precio * item.cantidad}</h6>
            <hr />
          </div>
          );
        })
      }
  
  
      <h4 className="totalCarrito" >TOTAL:$ {totalCarrito()}</h4>
      <button onClick={emptyCart} className="btn btn-outline-dark" >Vaciar Carro</button>
      <Link to="/FinalizarCompra" className="btn btn-outline-success mx-4"> Ir a pagar </Link>
      <hr />
      <br />
      <button onClick={handleVolver} className="btn btn-outline-success">Volver</button>
      </>
  
    }

    </div>

  )
}



export default Carrito