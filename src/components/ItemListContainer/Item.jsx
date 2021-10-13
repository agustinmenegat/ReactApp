import { Link } from "react-router-dom";

const Item = ({description,name,unitPrice,id,pictureUrl}) => {
    return (
        <>
            <div className="card m-2">
                <Link to={`/product/${id}`}><img src={pictureUrl} className="card-img-top" alt="product"/></Link>
                <div className="card-body text-uppercase">
                    <Link to={`/product/${id}`} className="ah5"><h5 className="card-title">{name}</h5></Link>
                    <p className="card-text">{description} <br /> U$S {unitPrice}</p>
                    <Link to={`/product/${id}`}><button className="btn btn-primary">Ver Detalle</button></Link>
                </div>
            </div> 
        </>
    )
}



export default Item;