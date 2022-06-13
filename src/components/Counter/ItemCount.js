import { useState } from "react"

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


  return (
    <div className="my-3" >
    <button onClick={handleRestar} className="btn btn-outline-primary" >-</button>
    <span className="mx-2" > {counter} </span>
    <button onClick={handleSumar} className="btn btn-primary" >+</button>
    <hr />
    <p>Unidades disponibles: {max}</p>
    <hr />
    <button onClick={onAdd} className="btn btn-success" >Agregar al carro</button>
    </div>
  )
}
export default ItemCount