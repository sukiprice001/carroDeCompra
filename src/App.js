import { Component } from 'react';
import Productos from './components/Productos.jsx';
import Layout from './components/Layout.jsx';
import Title from './components/Title.jsx';
import NavBar from './components/NavBar.jsx';



class App extends Component{
  //1
  state = {
    productos : [
      {name: 'Tomate', price: 1500, img: '/productos/tomate.jpg'},
      {name: 'Arbejas', price: 2500, img: '/productos/arbejas.jpg'},
      {name: 'Lechuga', price: 500, img: '/productos/Lechuga.jpg'}
    ],
    carro: [ ],
    esCarroVisible: false,
  }

  agregarAlCarro = (producto) => {
    const { carro } = this.state
    if (carro.find(x => x.name === producto.name)){
      const newCarro = carro.map(x=> x.name == producto.name
        ? ({
          ...x,
          cantidad: x.cantidad + 1
        })
        : x)
      return this.setState({carro: newCarro})
    }
  

    return this.setState({
      carro: this.state.carro.concat({
        ...producto, 
        cantidad: 1,
      })
    })
  }

  mostrarCarro = () => {
    if(!this.state.carro.length){
      return
    }
    this.setState({esCarroVisible: !this.state.esCarroVisible})
  } 

  render(){
    const { esCarroVisible } = this.state
    return(
      <div>
        <NavBar 
          carro= {this.state.carro} 
          esCarroVisible={esCarroVisible} 
          mostrarCarro ={this.mostrarCarro}
        />
        <Layout>
          <Title />
          <Productos //2
            agregarAlCarro= {this.agregarAlCarro}
            productos = {this.state.productos}
          />
        </Layout>
      </div>
    )
  }
}

export default App;


/**
 * 1.- Estado inicial de nuestro app
 * 2.- Creamos nuestro primer componente <Productos //> , contedra una función que agregare los prodcutos
 *     al carrito
 * 3.- Importamos todos nuestro componentes de una folder llamado componente
 *  */ 