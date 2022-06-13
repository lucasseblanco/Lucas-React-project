import ItemCount from '../Counter/ItemCount'
import { useEffect, useState } from "react"
import { Spinner } from "react-bootstrap"
import { pedirDatos } from "../../mock/PedirDatos"
import ItemList from "../ItemList/ItemList"
import { useParams } from 'react-router-dom'

const id1 = 'aversifunca'

const ItemListContainer = (props) => {


    
    

    const [items, setItems] = useState([])
    const [loading, setLoading] = useState(true)

    const {categoryID} = useParams()
    console.log(categoryID)

    useEffect(() => {
        setLoading(true)

        pedirDatos()
            .then((resp) => {
                if (!categoryID) {
                    setItems( resp )
                } else {
                    setItems( resp.filter((item) => item.categoria === categoryID) )
                }
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

            <p>{props.greeting}</p>
            
            {
                loading
                ?   <Spinner animation="grow" role="status">
                        <span className="visually-hidden">Loading...</span>
                    </Spinner>

                :  <ItemList items={items}/>

                
            }
            
            
        </section>
    )
}

export default ItemListContainer