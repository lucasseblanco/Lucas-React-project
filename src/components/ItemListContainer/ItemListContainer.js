import ItemCount from '../Counter/ItemCount'
import { useEffect, useState } from "react"
import { Spinner } from "react-bootstrap"
import { pedirDatos } from "../../mock/PedirDatos"
import ItemList from "../ItemList/ItemList"
import { useParams } from 'react-router-dom'


const ItemListContainer = (props) => {
    

    const [items, setItems] = useState([])
    const [loading, setLoading] = useState(true)

    const { categoryId } = useParams()

    useEffect(() => {
        setLoading(true)

        pedirDatos()
            .then((resp) => {
                if (!categoryId) {
                    setItems( resp )
                } else {
                    setItems( resp.filter((item) => item.categoria === categoryId) )
                }
            })
            .catch((error) => {
                console.log('ERROR', error)
            })
            .finally(() => {
                setLoading(false)
            })
    }, [categoryId])

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