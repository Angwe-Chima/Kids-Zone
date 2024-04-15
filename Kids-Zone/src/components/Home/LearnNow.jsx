import { Link } from "react-router-dom";
import { FaBookReader } from "react-icons/fa";

function LearnNow() {
  return (
    <div className="learnNow">
      <Link to="/learn">
      <button className="Btn">Explore Activities<FaBookReader/></button>
      </Link>
    </div>
  )
}

export default LearnNow