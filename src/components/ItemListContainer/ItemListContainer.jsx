import React from 'react';
import ItemList from './ItemList';
import {firestore} from './../../firebase/firebase';
import { useEffect,useState } from 'react';
import { useParams } from 'react-router-dom';
import Spinner from 'react-bootstrap/Spinner';

const ItemListContainer = () => {

  const [productos,setProductos] = useState([])
  const parametros = useParams()

  useEffect(()=>
    {
        const db = firestore
        const coleccion = db.collection("productos")
        let consulta
        if (!parametros.id) consulta = coleccion.get()
        if (parametros.id === "1") consulta = coleccion.where("categoryId", "==", "1").get()
        if (parametros.id === "2") consulta = coleccion.where("categoryId", "==", "2").get()

        consulta
            .then(res => {
                const documento = res.docs
                let auxiliarProductos = []

                documento.forEach(producto => {
                    const consultaFinal = {
                        id: producto.id,
                        ...producto.data()
                    }
                    auxiliarProductos.push(consultaFinal)
                })

                setProductos(auxiliarProductos)
                document.getElementById("spinner").style.display = "none"
            })
            .catch(err => console.log(err))
    }, [parametros])

  return(
        <>
        <div className="text-center">
            <Spinner id="spinner" animation="grow"/>
        </div>
        <div className="container">
            <ItemList productos={productos} />     
        </div>
        </>
    )
}

  export default ItemListContainer;