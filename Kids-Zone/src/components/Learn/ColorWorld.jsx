import { Link } from "react-router-dom";
import { IoMdArrowRoundBack } from "react-icons/io";
import colorData from "../Data/colorData"

function ColorWorld() {
  return (
    <div className="color-world activity">
      <div className="top">
        <Link to="/learn"><IoMdArrowRoundBack /></Link>
        <h1>Color World</h1>
      </div>
      <div className="colors">
        {
          colorData.map((color, idx)=>(
            <div style={{'--bg-color': color.color}} key={idx}>
              <h3>{color.text}</h3>
            </div>
          ))
        }
      </div>
    </div>
  )
}

export default ColorWorld;
