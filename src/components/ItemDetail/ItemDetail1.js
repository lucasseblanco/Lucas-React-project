import { useNavigate } from "react-router-dom"
import '../../App.css';
import ItemCount from "../Counter/ItemCount"



const ItemDetail1 = ({item}) => {

   const navigate = useNavigate()

   const handleVolver = () => {
      navigate(-1)
  }

  return (
    <div>
      <h2>{item.nombre}</h2>
      <img src={item.img} alt={item.nombre}/>
      <h2>{item.categoria}</h2>
      <h2>{item.precio}</h2>
      <ItemCount/>
      <button onClick={handleVolver} className="btn btn-primary my-2" >Volver</button>

    </div>
  )
}
export default ItemDetail1