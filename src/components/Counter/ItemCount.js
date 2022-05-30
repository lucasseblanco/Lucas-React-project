import { useState, useEffect } from "react"
const ItemCount = () => {
    
    const [contador, setContador] = useState(0)
    const [stock, setStock] = useState (10)


    


    const sumar = () => {
        if (stock>0) {
        setContador(contador+1)
        setStock(stock-1)
        console.log(stock);
        }
        else{
            alert('Sin stock')
        }
        
      }
    
      const restar = () => {
        if (stock >= 10) {
            alert ('pedido en 0');
        }
       else{
           setContador(contador-1)
           setStock(stock+1)
           console.log(stock);
       }
        
      }
    

  return (

    
    <div className="container my-5" >
        <h2>contador</h2>
        <hr />
        <button className="btn btn-primary" onClick={sumar}>+</button>
        <button className="btn btn-primary" onClick={restar}>-</button>
        <p onClick={sumar} >{contador}</p>
        <button className="btn btn-primary">Confirmar</button>
        
    </div>
  )
}
export default ItemCount