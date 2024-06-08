import logoEstimulo from "../../assets/logoEstimulo.png"
import CardWidget from "./CardWidget"
import "./NavBar.css"
import { Link } from "react-router-dom"


const NavBar = () => {
    
  return (
    <nav className="navbar">
      <Link to="/" className="brand link-navbar">
        <img className="logo" src={logoEstimulo} alt="logo estimulo" />
      </Link>
      <ul className="categorias">
        <Link to="/category/Mochilas" className="categoria link-navbar">Mochilas</Link>
        <Link to="/category/Cartucheras" className="categoria link-navbar">Cartucheras</Link>
        <Link to="/category/Colores" className="categoria link-navbar">Colores</Link>
      </ul>
      <CardWidget />
    </nav>
  );
}

export default NavBar