import Item from "../Item/Item"



const ItemList = ( {items} ) => {

    return (
        <div>
            <h3 className="nuestrosProductos" >Nuestros productos</h3>
            <hr/>

            {
                items.map((item) => <Item key={item.id} item={item}/>)
            }
        </div>
    )
}

export default ItemList