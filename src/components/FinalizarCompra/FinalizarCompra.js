import { useState } from "react"
import { useCartContext } from "../Context/CartContext"
import { Navigate } from 'react-router-dom'
import { collection, getDocs, addDoc, writeBatch, query, where, documentId } from "firebase/firestore"
import { db } from "../../firebase/config"
import { Formik } from "formik"
import * as Yup from 'yup'

const schema = Yup.object().shape({
    nombre: Yup.string()
                .required('Este campo es obligatorio')
                .min(4, 'El nombre es demasiado corto')
                .max(30, 'Máximo 30 caracteres'),
    email: Yup.string()
                .required('Este campo es obligatorio')
                .email('Formato de email inválido'),
    direccion: Yup.string()
                .required('Este campo es obligatorio')
                .min(4, 'La dirección es demasiado corta')
                .max(30, 'Máximo 30 caracteres'),
})

const Checkout = () => {

    const { cart, totalCarrito, emptyCart } = useCartContext()

    const [orderId, setOrderId] = useState(null)

    const generarOrden = async (values) => {

        const orden = {
            buyer: values,
            items: cart.map(({id, cantidad, nombre, precio}) => ({id, cantidad, nombre, precio})),
            total: totalCarrito()
        }

        const batch = writeBatch(db)
        const ordersRef = collection(db, "orders")
        const productosRef = collection(db, "productos")
        const q = query(productosRef, where(documentId(), 'in', cart.map(item => item.id)))




        const outOfStock = []
        const productos = await getDocs(q)




        productos.docs.forEach((doc) => {
            const itemToUpdate = cart.find(prod => prod.id === doc.id)

            if ((doc.data().stock - itemToUpdate.cantidad) >= 0) {
                batch.update(doc.ref, {
                    stock: doc.data().stock - itemToUpdate.cantidad
                })
            } else {
                outOfStock.push(itemToUpdate)
            }
        })

        if (outOfStock.length === 0) {
            addDoc(ordersRef, orden)
                .then((doc) => {
                    batch.commit()
                    setOrderId(doc.id)
                    emptyCart()
                })
        } else {
            console.log(outOfStock)
            alert("Hay items sin stock")
        }
    }




    if (orderId) {
        return (
            <div className="container my-5">
                <h2 className="compraTitulo" >Gracias por su compra!</h2>
                <hr/>
                <h3 className="numeroDeOrden" >Su número de orden es: {orderId}</h3>
            </div>
        )
    }

    if (cart.length === 0) {
        return <Navigate to="/"/>
    }

    return (
        <div className="container my-5">
            <h2 className="compraTitulo">Datos para la compra:</h2>
            <hr/>
            
            <Formik
                initialValues={ {
                    nombre: '',
                    email: '',
                    direccion: ''
                } }
                onSubmit={generarOrden}
                validationSchema={schema}
            >
                {(formik) => (
                    <form onSubmit={formik.handleSubmit}>
                        <input
                            value={formik.values.nombre}
                            name="nombre"
                            onChange={formik.handleChange}
                            type={"text"}
                            placeholder="Nombre Completo"
                            className="form-control my-3"
                        />
                        {formik.errors.nombre && <p className="alert alert-danger">{formik.errors.nombre}</p>}

                        <input
                            value={formik.values.email}
                            name="email"
                            onChange={formik.handleChange}
                            type={"text"}
                            placeholder="mail@ejemplo.com"
                            className="form-control my-3"
                        />
                        {formik.errors.email && <p className="alert alert-danger">{formik.errors.email}</p>}

                        <input
                            value={formik.values.direccion}
                            name="direccion"
                            onChange={formik.handleChange}
                            type={"text"}
                            placeholder="Direccion 123"
                            className="form-control my-3"
                        />
                        {formik.errors.direccion && <p className="alert alert-danger">{formik.errors.direccion}</p>}
                        <button type="submit" className="btn btn-outline-success">Terminar compra</button>
                    </form>
                )}
            </Formik>

            
            <button onClick={emptyCart} className="btn btn-outline-secondary my-2">Cancelar mi compra</button>
        </div>
    )
}

export default Checkout