import { useEffect, useState } from "react";
import arrayProductos from "./json/productos.json";
import ItemDetail from "./ItemDetail";
import { useParams } from "react-router-dom";


const ItemDetailContainer = () => {
    const [item, setItems] = useState([]);
    const {id} = useParams() ;

    useEffect (() => {
        const promesa = new Promise(resolve => {
            setTimeout(() => {
                let producto = arrayProductos.find(item => item.id === parseInt(id));
                
                resolve(producto);
            }, 2000);
        })
        promesa.then(data => {
            setItems(data);
            console.log(data);
        })

    },[id]);

    return(
       < ItemDetail item = {item} />
    )
}

export default ItemDetailContainer;