import { useEffect, useState } from "react"
import { Spinner } from "react-bootstrap"
import ItemList from "../ItemList/ItemList"
import { useParams } from 'react-router-dom'
import { collection, getDocs, query, where } from "firebase/firestore"
import { db } from "../../firebase/config"



const ItemListContainer = (props) => {


    
    

    const [items, setItems] = useState([])
    const [loading, setLoading] = useState(true)

    const {categoryID} = useParams()

    useEffect(() => {
        setLoading(true)
        
        // 1.- armar la referencia
        const productosRef = collection(db, "productos")
        const q = categoryID ? query(productosRef, where("categoria", "==", categoryID)) : productosRef
        // 2.- (async) llamar a Firebase con la referencia anterior
        getDocs(q)
            .then((resp) => {
                const newItems = resp.docs.map((doc) => {
                    return {
                        id: doc.id,
                        ...doc.data()
                    }
                }  )
                setItems(newItems)    
            } )
            
            .finally(() => {
                setLoading(false)
            })


    }, [categoryID])

    return (
        <section className="container my-5">

            
            {
                loading
                ?   <Spinner animation="grow" role="status">
                        <span className="visually-hidden">Loading...</span>
                    </Spinner>

                :  <ItemList items={items}  />

                
            }
            
            
        </section>
    )
}

export default ItemListContainer