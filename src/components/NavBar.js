import CartWidget from './CartWidget/CartWidget';

export const NavBar = () => {

    return ( 
        <header className="header">
            <div className="header__container">
            <h1>Nombre Pagina</h1>
        
            <nav className="header__navbar">
                <a href="#" className="header__navlink">Inicio</a>
            
                <a href="#" className="header__navlink">Shop</a>
            
                <a href="#" className="header__navlink">Informacion</a>
                <CartWidget/>
            </nav>
        </div>
        </header>
    )
}

export default NavBar 