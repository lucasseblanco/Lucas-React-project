import '../../App.css';
import { Link } from "react-router-dom";



const Item = ({item}) => {


    return (
        <div>
            <h4>{item.nombre}</h4>
            <img alt="prods" src={`../${item.img}`}/>
            <p>{item.desc}</p>
            <h4>Precio: ${item.precio}</h4>
            <br />
            <h5>{item.descripcion}</h5>
            <Link to={`/Item/${item.id}`} >
                <button className="btn btn-primary my-2 "> Seleccionar </button>
            </Link>
            <hr />
        </div>
    )
}

export default Item