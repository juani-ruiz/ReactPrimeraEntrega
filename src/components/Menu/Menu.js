import React, {useContext} from 'react';
import { CartContext } from '../CartContext/CartContext';
import './Menu.css';
import {Link} from 'react-router-dom';
import { Icon } from 'semantic-ui-react'


function Menu() {

    const [cart, setCart] = useContext(CartContext);

    return (
        <nav className="Menu">
            <ul>
                <Link to="/" className="Link">Home</Link>
                <Link to="/Nosotros" className="Link">Nosotros</Link>
                <Link to="/Productos" className="Link">Productos</Link>
                <Link to="/contacto" className="Link">Contacto</Link>
                <Link to="/cart" className="Items"><Icon name='cart' />{cart.length}</Link>
            </ul>
          </nav>  
    )
       
}

export default Menu
