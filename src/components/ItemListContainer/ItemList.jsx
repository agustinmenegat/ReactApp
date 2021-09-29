import Item from "./Item"

const ItemList = ({products}) => {
    return (
        <>
        <div className="d-flex justify-content-center flex-wrap mb-5">
            {products.map(product =><Item 
            key={product.id}
            id={product.id} 
            title={product.title} 
            price={product.price}/>)}
        </div>
        </>
    )
}


export default ItemList;