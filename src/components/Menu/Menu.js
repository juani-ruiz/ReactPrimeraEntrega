import './Menu.css';
import {Link} from 'react-router-dom';

function Menu() {
    return (
        <nav className="Menu">
            <ul>
                <Link to="/" className="Link">Home</Link>
                <Link to="/Nosotros" className="Link">Nosotros</Link>
                <Link to="/Productos" className="Link">Productos</Link>
                <Link to="/contacto" className="Link">Contacto</Link>
            </ul>
          </nav>  
    )
       
}

export default Menu
