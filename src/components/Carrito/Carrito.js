import { useContext } from "react";
import CartContext from "../Context/CartContext";
import { useNavigate } from "react-router-dom";



const Carrito = ({item}) => {

  const {cart, totalCarrito, emptyCart} = useContext(CartContext)

  const navigate = useNavigate()

  const handleVolver = () => {
    navigate(-1)
}

  return(
    <div className="container my-5"> Carro de compras
    
    {
      cart.map((item) => {
        return (
        <div key={item.id} className="my-2">
          <h4>{item.nombre}</h4>
          <img src={`../../${item.img}`} alt={item.nombre}/>
          <p>Cantidad: {item.cantidad}</p>
          <h5>precio por unidad: {item.precio}</h5>
          <h6>precio total: {item.precio * item.cantidad}</h6>
          <hr />
        </div>
        );
      })
    }


    <h3>TOTAL: {totalCarrito()}</h3>
    <button className="btn btn-success" > Comprar </button>
    <hr />
    <button onClick={emptyCart} className="btn btn-danger" >Vaciar Carro</button>
    <hr />
    <button onClick={handleVolver} className="btn btn-primary my-2" >Volver</button>
    </div>
    
  )
}
export default Carrito