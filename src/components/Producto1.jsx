import imagenBitoin from '../assets/bitcoin.jpg'

const Producto1 = ()=>{

    return (
        <div className="card">
            <h3>Bitcoin</h3>
            <p>La criptomoneda mas importante del mercado</p>
            <img src={imagenBitoin} alt="moneda bitcoin" />

        </div>

    )
}

export default Producto1
