import CartWidget from '../CartWidget/CartWidget';
import { Link } from 'react-router-dom';

export const NavBar = () => {

    return ( 
        <header className="header">
            <div className="header__container">
            <Link to={'/'}><h1>Tablas</h1></Link>
        
            <nav className="header__navbar">
                <Link to={"/categorias/Longboard"} className="header__navlink">Longboards</Link>
                <Link to={"/categorias/Shortboard"} className="header__navlink">Shortboards</Link>
                <Link to={"/categorias/Accesorios"} className="header__navlink">Accesorios</Link>
                <CartWidget/>
            </nav>
        </div>
        </header>
    )
}

export default NavBar 