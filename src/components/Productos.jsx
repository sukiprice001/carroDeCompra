import { Component } from "react";
import Producto from './Producto'


const styles ={
    productos: {
        display: 'flex',      // Para que no lo muestre de la forma tardicional
        flexDirection: 'row', // para que se vea de forma horizontal
        justifyContent: 'space-between',   // para que exista una separacion entre los elementos de forma equitativa.
    }
      
}

class Productos extends Component{
    render(){
        const{productos, agregarAlCarro} = this.props
        return(
            <div style={styles.productos}>
                {productos.map(producto =>
                    <Producto 
                        agregarAlCarro={agregarAlCarro}
                        key={producto.name}
                        producto={producto}                 
                    
                    
                    />)}
            </div>
        )
    }
}

export default Productos;