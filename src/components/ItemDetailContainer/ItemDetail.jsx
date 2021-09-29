import ItemCount from "../ItemCount/ItemCount"

const ItemDetail = ({productDetail, id}) => {
    return (
        <>
        <div className="container d-flex justify-content-center mb-5">
            <div className="text-center">
                <img src={`/img/${id}.jpg`} className="card-img-top" alt="producPhoto"/>
                <div className="card-body">
                    <h5 className="card-title visually-hidden">{productDetail.id}</h5>
                    <p className="card-text text-uppercase fs-5"><b>{productDetail.title}</b></p>
                    <p className="card-text">{productDetail.description}</p>
                    <p className="card-text">U$S {productDetail.price}</p>
                    <ItemCount initial={0} stock={productDetail.stock} onAdd/>
                </div>
            </div>
        </div>
        </>
    )
}

export default ItemDetail