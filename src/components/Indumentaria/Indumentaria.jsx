import React from "react";
import ItemListContainer from "../ItemListContainer/ItemListContainer";

const Indumentaria = () => {
    return(
        <>
        <div className="container text-center">
            <h2>Indumentaria</h2>
            <hr />
            <ItemListContainer category="Indumentaria"/>
        </div>
        </>
    )
}

export default Indumentaria;