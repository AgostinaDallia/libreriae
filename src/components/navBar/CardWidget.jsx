import { IoCartOutline } from "react-icons/io5";

import "./cardwidget.css"

const CardWidget = () => {
  return (
    <div className="cartwidget">
        <IoCartOutline color= "blue" size="30px" />
      <p className="number">1</p>
    </div>
    
  )
}

export default CardWidget