import './App.css';
import Home from './views/Home/Home';
import Nosotros from './views/Nosotros/Nosotros';
import Productos from './views/Productos/Productos';
import Contacto from './views/Contacto/Contacto';
import Carrito from './views/Carrito/Carrito';
import Menu from './components/Menu/Menu';
import Header from './components/Header/Header';
import Footer from './components/Footer/Footer';
import { CartProvider } from './components/CartContext/CartContext';
import {BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import Products from './components/Products';

function App() {
  return (   
    
    <Router>
      <CartProvider>
        <div className="App">
          <Header />
          <Menu />
          
            <Switch>
              <Route path="/" exact component={Home} />
              <Route path="/nosotros" component={Nosotros} />
              <Route path="/productos" component={Productos} />
              <Route path="/contacto" component={Contacto} />
              <Route path="/detail/:id" component={Products} />
              <Route path="/cart" component={Carrito} />
            </Switch>

        </div>   
        <Footer />

      </CartProvider>
    </Router> 

   

  );
}

export default App;