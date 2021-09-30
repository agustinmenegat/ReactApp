import {useState} from "react"

const ItemCount = ({stock, initial, productDetail}) => {

    const [counter,setCounter] = useState(initial);

    const handleSumar = () => {
        if (counter === stock){
            return;
        }
        setCounter(counter + 1);
    }
    const handleRestar = () => {
        if (counter === 0){
            return;
        }
        setCounter(counter - 1);
    }
    const onAdd = (productDetail) => {
        console.log(productDetail);
    }

    return (
        <>
        <div>
            <div className="d-flex justify-content-center m-2">
                <button className="btnMenos" onClick={handleRestar}>-</button> 
                <p className="m-2">{counter}</p> 
                <button className="btnMas" onClick={handleSumar}>+</button> <br />
            </div>    
            <button className="btn btn-primary" onClick={()=>onAdd(productDetail)}>Agregar al carrito</button>
        </div>
        </>
    )
}

export default ItemCount;