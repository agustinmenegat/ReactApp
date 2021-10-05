import {useCartContext} from '../../context/CartContext'
import {Link} from "react-router-dom"


const Cart = () => {

  const {cart, clearCart, removeItem} = useCartContext();

  const listaDeTotales = [];

  if(cart.length === 0){
    return(
      <>
      <div className="text-center m-5">
        <h2 className="m-5">😭 Carrito Vacío 😭</h2>
        <Link to={`/`}><button className="btn btn-primary fs-4 m-5">Ver Productos</button></Link>
      </div>
      </>
    )
  }else{
    return(
      <>
        <div className="container">
            <h2 className="text-center">Carrito de Compras</h2>
            <hr/>
        </div>
        <div className="d-flex justify-content-around text-center ms-0 me-0">
          <div> 
            <ul className="d-flex align-items-center justify-content-center p-0">
              {cart.map((productDetail) => {
                const total = productDetail.price * productDetail.quantity
                listaDeTotales.push(total)
                
                return(
                <li className="text-center list-unstyled m-2">
                  <img src={`/img/${productDetail.id}.jpg`} className="fotoCart" alt="producPhoto"/> <br />
                  Producto: <b>{productDetail.name}</b> <br />
                  Precio por unidad: <b>U$S {productDetail.price}</b> <br />
                  Unidades: <b>{productDetail.quantity}</b> <br />
                  Total: <b>U$S {productDetail.price * productDetail.quantity}</b> <br />
                  <button type="button" className="btn btn-danger m-2" onClick={()=>removeItem(productDetail.id)}>X</button>
                </li>
              )
              }
              )
              }
            </ul>
            <hr />
            <h2>Total a pagar: U$S {listaDeTotales.reduce((previous, next) => previous + next)}</h2>
            <button className="btn btn-primary m-4">Terminar Compra</button>
            <button className="btn btn-dark" onClick={clearCart}>Vaciar el carro</button>
          </div>
        </div>
        </>
    )
  }



}

export default Cart;