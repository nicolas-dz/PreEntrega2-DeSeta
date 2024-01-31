import ItemCount from "./ItemCount";

const ItemDetail = ({item}) => {
    return (
        <div className="container">
            <div className="row">
                <div className="col-md-4">
                    <img src={item.imagen} alt={item.titulo} className="img-fluid"/>
                </div>
                <div className="col-md-4">
                    <h1>{item.titulo}</h1>
                    <p>{item.descripcion}</p>
                    <p><b>{item.precio}</b></p>  
                    <ItemCount />                  
                </div>
            </div>
        </div>
       
    )
}

export default ItemDetail ;
