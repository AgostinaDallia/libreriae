import logoEstimulo from "../../assets/logoEstimulo.png"
import CardWidget from "./CardWidget"
import "./NavBar.css"
import { Link } from "react-router-dom"


const NavBar = () => {
    
  return (
    <nav className="navbar">
      <Link to="/" className="brand">
        <img className="logo" src={logoEstimulo} alt="logo estimulo" />
      </Link>
      <ul className="categorias">
        <Link to="/category/Mochilas" className="categoria">Mochilas</Link>
        <Link to="/category/Cartucheras" className="categoria">Cartucheras</Link>
        <Link to="/category/Colores" className="categoria">Colores</Link>
      </ul>
      <CardWidget />
    </nav>
  );
}

export default NavBar