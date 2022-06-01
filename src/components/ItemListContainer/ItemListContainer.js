import ItemCount from '../Counter/ItemCount'
import { useEffect, useState } from "react"
import { Spinner } from "react-bootstrap"
import { pedirDatos } from "../mock/PedirDatos"
import ItemList from "../ItemList/ItemList"



const ItemListContainer = (props) => {

    const [items, setItems] = useState([])
    const [loading, setLoading] = useState(true)

    useEffect(() => {
        setLoading(true)

        pedirDatos()
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

            <p>Bienvenidos! {props.greeting}</p>
            
            {
                loading
                ?   <Spinner animation="grow" role="status">
                        <span className="visually-hidden">Loading...</span>
                    </Spinner>

                :  <ItemList items={items}/>

                
            }
            <ItemCount/>
            
        </section>
    )
}

export default ItemListContainer