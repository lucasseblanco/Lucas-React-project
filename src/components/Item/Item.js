import '../../App.css';
import { Link } from "react-router-dom";



const Item = ({item}) => {


    return (
        <div>
            <h4 className="itemColor" >{item.nombre}</h4>
            <img alt="prods" src={`../${item.img}`}/>
            <p className="itemColor"  >{item.desc}</p>
            <h4 className="itemColor"  > Precio: ${item.precio}</h4>
            <h6 className="itemColor"  >{item.descripcion}</h6>
            <Link to={`/Item/${item.id}`} >
                <button className="itemSeleccionar"> Seleccionar </button>
            </Link>
            <hr />
        </div>
    )
}

export default Item