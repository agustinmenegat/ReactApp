import React from "react";  
import ItemListContainer from "../ItemListContainer/ItemListContainer";

const Raquetas = () => {
    return(
        <>
        <div className="container">
            <h2 className="text-center">Raquetas</h2>
            <hr />
            <ItemListContainer category="Raquetas"/>
        </div>
        </>
    )
}

export default Raquetas;