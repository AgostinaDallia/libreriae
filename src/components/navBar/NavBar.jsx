import CardWidget from "./CardWidget"
import "./NavBar.css"
const NavBar = () => {
    
  return (
    <div  className="nav-bar">
        <div>
            <img style={{width: "100px"}} src="https://m.media-amazon.com/images/S/stores-image-uploads-fe-prod/1/AmazonStores/A19VAU5U5O7RUS/d968ef9ec303c23dd55bda9586dbed59.w2521.h2062.png" alt="" />
        </div>
        <ul>
            <li>Mascaras</li>
            <li>Corrector</li>
            <li>Labial</li>
        </ul>
        <CardWidget/>
    </div>
  )
}

export default NavBar