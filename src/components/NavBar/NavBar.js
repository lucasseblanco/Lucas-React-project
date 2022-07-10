import CartWidget from '../CartWidget/CartWidget';
import { Link } from 'react-router-dom';
import { Logo }  from '../Logo/Logo'

export const NavBar = () => {

    return ( 
        <header className="header">
            <div className="header__container">
            <Logo/>
            <nav className="header__navbar">
                <Link to={"/categorias/Longboard"} className="header__navlink">Longboards</Link>
                <Link to={"/categorias/Shortboard"} className="header__navlink">Shortboards</Link>
                <Link to={"/categorias/Accesorios"} className="header__navlink">Accesorios</Link>
                
            </nav>
            <CartWidget/>
        </div>
        </header>
    )
}

export default NavBar 