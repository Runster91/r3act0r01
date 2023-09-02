

const Producto = (props)=>{

    return (
        <div className="card">
            <h3>{props.nombre}</h3>
            <p>{props.descripcion}</p>
            <img src={props.imagen} alt="moneda bitcoin" />

        </div>

    )
}

export default Producto
