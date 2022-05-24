


const ItemListContainer = (props) => {
  return (
    <section className="container my-5" >
        <h2>Producto</h2>
        <hr />

        <p>Bienvenida {props.greeting}</p>

        <button className="btn btn-primary" >ANADIR</button>
    </section>
  )
}
export default ItemListContainer