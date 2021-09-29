import {useState} from "react"

const ItemCount = ({stock, initial, onAdd}) => {

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

    return (
        <>
        <div>
            <div className="d-flex justify-content-center m-2">
                <button className="btnMenos" onClick={handleRestar}>-</button> 
                <p className="m-2">{counter}</p> 
                <button className="btnMas" onClick={handleSumar}>+</button> <br />
            </div>    
            <button className="btn btn-primary" onClick={()=>console.log("Added to cart")}>Agregar al carrito</button>
        </div>
        </>
    )
}

export default ItemCount;