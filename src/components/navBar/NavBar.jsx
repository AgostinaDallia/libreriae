import CardWidget from "./CardWidget"
import "./NavBar.css"
const NavBar = () => {
    
  return ( 
    <div className="nav-bar" style={{ display: "flex", alignItems: "center" }}>
      <div>
        <img className="logo" style={{ width: "200px" }} src="https://d22fxaf9t8d39k.cloudfront.net/a2d1d3f4e82b91e15243fbcfb101b5046e7dd82ab50af34f0dc94eb5b8f063af168567.png" alt="" />    
      </div>
      <ul className="nav justify-content-center" style={{ flex: "1", textAlign: "center" }}>
        <li className="nav-item">
          <a className="nav-link active" aria-current="page" href="#">Mochilas</a>
        </li>
        <li className="nav-item">
          <a className="nav-link" href="#">Cartucheras</a>
        </li>
        <li className="nav-item">
          <a className="nav-link" href="#">Colores</a>
        </li>
      </ul>
      <div>
        <CardWidget />
      </div>
      <p>3</p>
    </div>
  );
}

export default NavBar