import ItemCount from "../ItemCount/ItemCount"
import { useCartContext } from './../../context/CartContext';

const ItemDetail = (producto) => {

    const {addToCart} = useCartContext();
    const onAdd = (quantity) => addToCart(producto, quantity)

    return (
        <>
        <div producto-aos="fade-up" producto-aos-duration="3000" className="container d-flex justify-content-center mb-5">
            <div className="text-center">
                <img src={producto.pictureUrl} className="card-img-top" alt="foto de item"/>
                <div className="card-body">
                    <h5 className="card-title visually-hidden">{producto.id}</h5>
                    <p className="card-text text-uppercase fs-5"><b>{producto.name}</b></p>
                    <p className="card-text">{producto.description}</p>
                    <p className="card-text">U$S {producto.unitPrice}</p>
                    <ItemCount initial={1} stock={producto.stock} paramOnAdd={onAdd}/>
                </div>
            </div>
        </div>
        </>
    )
}

export default ItemDetail