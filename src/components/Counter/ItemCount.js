import { useState } from "react"
import { Link } from "react-router-dom";

const ItemCount = ({max, setCounter, counter, onAdd }) => {


    const handleSumar = () => {
       counter < max && setCounter(counter + 1)
       if (counter === max) {
           alert('Seleccionaste ' + max + ' items. No hay mas stock')
       }
    }

    const handleRestar = () => {
        counter > 1 && setCounter(counter - 1)
    }


    const btnRestarConfig = {
      onClick: handleRestar,
      className: ` btn mx-1 ${counter === 1 ? "btn btn-danger" : "btn btn-outline-primary" } ${counter === 1 ? "min-value" : ''} `,
      disabled: counter ===1
    }

    if (max === 0){
      return (
        <div className="my-2" >
          sin stock
        </div>
      )
    }


  return (
    <div className="my-3" >
    {<button onClick={handleRestar} className={counter === 1 ? "btn btn-secondary" : "btn btn-outline-dark" }
    disabled={counter ===1} >-</button>}
    <span className="mx-2" > {counter} </span>
    <button onClick={handleSumar} className= {counter === max ? "btn btn-secondary" : "btn btn-outline-success"  } 
    disabled= { counter === max }>+</button>
    <hr />
    <p>Unidades disponibles: {max}</p>
    <hr />
    <Link to={``} >
    <button onClick={onAdd} value={false} className="btn btn-success" id="button" >Agregar al carro</button>
    </Link>
    
    </div>
  )
}
export default ItemCount

