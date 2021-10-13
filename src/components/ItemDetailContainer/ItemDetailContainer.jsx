import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import ItemDetail from "./ItemDetail";
import { firestore } from "../../firebase/firebase"


const ItemDetailContainer = () => {

    const [producto, setProducto] = useState({})
    const parametros = useParams()

    useEffect(() => {
        const db = firestore
        const coleccion = db.collection("productos")
        const consulta = coleccion.doc(parametros.id).get()
        consulta
            .then(res => setProducto(res.data()))
            .catch(err => console.log(err))
    },[])
    console.log(producto);

    return (
        <ItemDetail producto={producto}/>
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