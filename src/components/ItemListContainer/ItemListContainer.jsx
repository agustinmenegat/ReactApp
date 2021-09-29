import React from 'react';
import ItemList from './ItemList';
import getProductsByCategory from "../../functions/getProductsByCategory";
/* import { useEffect } from "react" */

const ItemListContainer = ({category}) => {

    const products = getProductsByCategory(category)

    return(
        <>
        <div className="container">
            <ItemList products={products} />     
        </div>
        </>
    )
}


export default ItemListContainer;