import { useEffect, useState } from "react"
import { Container, Spinner } from "react-bootstrap"
import productos from "../mock/data"
import ItemDetail from "../ItemDetail/ItemDetail"
import Item from "../Item/Item"


const primerProducto = (productos.find((prod1 => prod1.id === 1)));

console.log(primerProducto)





const getItem =  () => new Promise((resolve, reject) => {
        setTimeout(() => {
            resolve([primerProducto]);
        }, 2000);
    })


const ItemDetailContainer = (props) => {

    const [items, setItems] = useState([])
    const [loading, setLoading] = useState(true)

    useEffect(() => {
        setLoading(true)

        getItem()
            .then((resp) => {
                setItems( resp )
            })
            .catch((error) => {
                console.log('ERROR', error)
            })
            .finally(() => {
                setLoading(false)
            })
    }, [])

    return (
        <section className="container my-5">

            
                  
            {
                loading
                ?   <Spinner animation="grow" role="status">
                        <span className="visually-hidden">Loading...</span>
                    </Spinner>

                :  <ItemDetail items={items}/> 
                

                
            }
            
            
        </section>
    )
}

export default ItemDetailContainer