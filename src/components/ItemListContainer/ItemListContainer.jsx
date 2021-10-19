import React from 'react';
import ItemList from './ItemList';
import {firestore} from './../../firebase/firebase';
import { useEffect,useState } from 'react';
import { useParams } from 'react-router-dom';

const ItemListContainer = () => {

  const [productos,setProductos] = useState([])
  const {id} = useParams()

  useEffect(()=>
    {
        const db = firestore
        const coleccion = db.collection("productos")
        let consulta
        if (!id) consulta = coleccion.get()
        if (id === "1") consulta = coleccion.where("categoryId", "==", "1").get()
        if (id === "2") consulta = coleccion.where("categoryId", "==", "2").get()

        consulta
            .then(res => {
                const documento = res.docs
                let misProductos = []

                documento.forEach(producto => {
                    const consultaFinal = {
                        id: producto.id,
                        ...producto.data()
                    }
                    misProductos.push(consultaFinal)
                })
                setProductos(misProductos)
            })
            .catch(err => console.log(err))
    }, [id])

    
    if(productos.length === 0){
        return (
            <div className="text-center m-5">
                <div className="spinner-grow" role="status">
                    <span class="visually-hidden">Loading...</span>
                </div>
            </div>
        )       
        }else{
            return(
            <div className="container">
                <ItemList productos={productos} />
            </div>
            )
        }    
}

  export default ItemListContainer;