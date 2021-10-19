import ItemCount from "./ItemCount/ItemCount"
import { Link } from "react-router-dom";
import { useCartContext } from './../../context/CartContext';
import Button from 'react-bootstrap/Button';

const ItemDetail = ({producto}) => {

    const {addToCart} = useCartContext();

    const onAdd = (quantity) => {
        addToCart(producto, quantity)
    }


    return (
        <>
        <div producto-aos="fade-up" producto-aos-duration="3000" className="container d-flex justify-content-center mb-3">
            <div className="text-center">
                <img src={producto.pictureUrl} className="card-img-top" alt="foto de item"/>
                <div className="card-body">
                    <h5 className="card-title visually-hidden">{producto.id}</h5>
                    <p className="card-text text-uppercase fs-5"><b>{producto.name}</b></p>
                    <p className="card-text">{producto.description}</p>
                    <p className="card-text"><b>Precio: </b>U$S {producto.unitPrice}</p>
                    <ItemCount initial={1} stock={producto.stock} paramOnAdd={onAdd}/> 
                    <Link to="/"><Button variant="dark m-3">Volver al Inicio</Button></Link>
                </div>
            </div>
        </div>
        </>
    )
}

export default ItemDetail