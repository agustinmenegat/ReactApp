import { useParams } from "react-router"
import React from 'react'
import getProductById from "../../functions/getProductById";
import ItemDetail from "./ItemDetail"


const ItemDetailContainer = () => {

    const { id } = useParams();
    
    const productDetail = getProductById(id) 


    return(
        <>
         <ItemDetail productDetail={productDetail} id={id}/>
        </>
    )
}

export default ItemDetailContainer




























/* import { useEffect,useState } from "react";
import ItemDetail from "../ItemDetailContainer/ItemDetail"



const ItemDetailContainer = () => {

    const [items,setItems] = useState([])

    useEffect( ()=> {

        const getItem = new Promise((resolve) => {
            setTimeout(()=>{
                resolve(itemInicial)
            },2000)
        })
        getItem
            .then((res)=>{
                setItems(res)
            })
        
    })    

    if(items.length > 0){
        return (
            <>
            <div className="d-flex justify-content-center container mt-3 mb-3">
                {items.map((item,i)=>{
                    return <ItemDetail item={item}/>
                })}
            </div>
            </>
        );
    }else {
        return (
            <>
            <div className="d-flex justify-content-center m-5">
                <div className="spinner-grow" role="status">
                    <span className="visually-hidden">Loading...</span>
                </div>
            </div>    
            </>
        )
    }
  
}
    export default ItemDetailContainer */