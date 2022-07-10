import { Link } from "react-router-dom"

export const LogoF = () => {
  return (
    <div>
        <Link to={'/'} className='Title'>  
        <img alt='logo' src="../../Images/Redes.png" className='LogoF' width="auto" height="40px" ></img>
        <h1 className='Shop'>SD Shop
        <br />Todos los derechos reservados</h1>
        </Link>
    </div>
  )
}