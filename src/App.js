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
    ]
  }
  render(){
    return(
      <div>
        <NavBar />
        <Layout>
          <Title />
          <Productos //2
            agregarAlCarro= {() => console.log('No hace nada')}
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