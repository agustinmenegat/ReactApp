import { useContext } from "react";
import Context from "../../Context/Context";
/* import {products} from "./../../data/data" */

const Cart = () => {

  const {cart} = useContext(Context)
 /*  const {list} = useContext(Context) */

  function handleRemove(id){
    console.log(id);
  }
 
  const listaDeTotales = [];

  return(
    <>
      <div className="container">
          <h2 className="text-center m-2">Carrito de Compras</h2>
          <hr/>
      </div>
      <div className="d-flex justify-content-around text-center ms-0 me-0">
        <div> 
          <ul className="m-2">
            {cart.map((productDetail) => {

              const total = productDetail.price * productDetail.qty
              listaDeTotales.push(total)

              return(
              <li className="text-center list-unstyled m-2">
                <img src={`/img/${productDetail.id}.jpg`} className="fotoCart" alt="producPhoto"/> <br />
                Producto: <b>{productDetail.name}</b> <br />
                Precio por unidad: <b>U$S {productDetail.price}</b> <br />
                Unidades: <b>{productDetail.qty}</b> <br />
                Total: <b>U$S {productDetail.price * productDetail.qty}</b> <br />
                <button type="button" className="btn btn-danger m-2" onClick={()=>handleRemove(productDetail.id)}>X</button>
              </li>
              )
            }
            )
            }
          </ul>
          <hr />
          <h2>Total a pagar: U$S {listaDeTotales.reduce((previous, next) => previous + next)}</h2>
          <button className="btn btn-primary m-4">Finalizar Compra</button>
          
          
        </div>
      </div>
      </>
  )

}

export default Cart;