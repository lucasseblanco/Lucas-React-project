import ItemCount from '../Counter/ItemCount'


const ItemListContainer = (props) => {
  return (
    <section className="container my-5" >
        <h2>Producto</h2>
        <hr />

        <p>Bienvenida {props.greeting}</p>
        <ItemCount/>

    </section>
  )
}
export default ItemListContainer
