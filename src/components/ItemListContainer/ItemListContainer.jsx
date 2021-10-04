import React from 'react';
import ItemList from './ItemList';
import getProductsByCategory from "../../functions/getProductsByCategory";


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