const Cart = ({onAdd}) => {
    return(
    <>
    <div className="container">
        <h2 className="text-center m-2">Carrito de Compras</h2>
        <hr/>
    </div>
    <div>
      {onAdd}
    </div>
    </>
    )

}

export default Cart;