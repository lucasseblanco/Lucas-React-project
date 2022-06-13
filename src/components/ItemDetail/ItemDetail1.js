import { useNavigate } from "react-router-dom"
import '../../App.css';
import ItemCount from "../Counter/ItemCount"
import { useState } from "react";



const ItemDetail1 = ({item}) => {

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
   }

  return (
    <div>
      <h2>{item.nombre}</h2>
      <img src={`../../${item.img}`} alt={item.nombre}/>
      <h2>{item.categoria}</h2>
      <h2>{item.precio}</h2>
      <ItemCount
        max={item.stock}  
        counter={cantidad}
        setCounter={setCantidad}
        onAdd={handleAgregar}
      />

      <button onClick={handleVolver} className="btn btn-primary my-2" >Volver</button>

    </div>
  )
}
export default ItemDetail1