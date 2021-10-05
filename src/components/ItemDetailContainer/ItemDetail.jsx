import ItemCount from "../ItemCount/ItemCount"
import { useCartContext } from './../../context/CartContext';

const ItemDetail = ({productDetail, id}) => {

    const {addToCart} = useCartContext();
    const onAdd = (quantity) => addToCart(productDetail, quantity)

    return (
        <>
        <div data-aos="fade-up" data-aos-duration="3000" className="container d-flex justify-content-center mb-5">
            <div className="text-center">
                <img src={`/img/${id}.jpg`} className="card-img-top" alt="producPhoto"/>
                <div className="card-body">
                    <h5 className="card-title visually-hidden">{productDetail.id}</h5>
                    <p className="card-text text-uppercase fs-5"><b>{productDetail.name}</b></p>
                    <p className="card-text">{productDetail.description}</p>
                    <p className="card-text">U$S {productDetail.price}</p>
                    <ItemCount initial={1} stock={productDetail.stock} paramOnAdd={onAdd}/>
                </div>
            </div>
        </div>
        </>
    )
}

export default ItemDetail