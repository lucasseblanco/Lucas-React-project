import { useEffect } from "react"
import Producto1 from "../mock/Images/Producto1.png" 
import '../../App.css';

const Item = ({item}) => {


    return (
        <div>
            <h2>{item.nombre}</h2>
            <img src={Producto1} className="imagenTest"/>
            <p>{item.desc}</p>
            <h4>Precio: ${item.precio}</h4>
            <hr/>
            <h5>{item.descripcion}</h5>
        </div>
    )
}

export default Item