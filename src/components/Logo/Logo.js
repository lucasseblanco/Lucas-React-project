import { Link } from "react-router-dom"

export const Logo = () => {
  return (
    <div>
        <Link to={'/'} className='Title'>  
        <img alt='logo' src="../../Images/Logo.png" className='Logo' width="auto" height="40px" ></img>
        <h1 className='Shop'>SD Shop</h1>
        </Link>
    </div>
  )
}
