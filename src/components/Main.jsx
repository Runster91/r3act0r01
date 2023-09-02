import Producto from './Producto';
import imagenBitoin from '../assets/bitcoin.jpg';
import imagenethereum from '../assets/ethereum.jpg';
import pikachu from '../assets/pocurrency.jpg';
import Eventos from './Eventos';





 const Miapp = ()=>{
    

    return (
        
        
        <>
                       
                <h2>Productos</h2>
                <div className="contenedor">
                    <Producto nombre="bitcoin" descripcion="la moneda mas importante" imagen={imagenBitoin} />
                    <Producto nombre="ethereum" descripcion="la segunda moneda mas importante" imagen={imagenethereum} />
                    <Producto nombre="picurrency" descripcion="la tercera moneda mas importante" imagen={pikachu} />
                </div>

                <Eventos /> 
           
        </>

        
    );
};

export default Miapp