import { Link } from "react-router-dom"

const CartWidget = ({cart}) => {
    return (
        <>
        <div className="cartContainer">
            <Link to="/Cart"><span className="material-icons-outlined">shopping_cart</span></Link>
            <span>{cart}</span>
        </div>
        </>
    )
}

export default CartWidget;