import { Link } from "react-router-dom";
import { FaPhoneAlt, FaBookReader } from "react-icons/fa";
import { AiFillHome } from "react-icons/ai";
import { IoPersonSharp } from "react-icons/io5";
import logoImg from "../assets/Kids-Zone-logo.svg";
// import SideMenuBar from './SideMenuBar'

const NavBar = () => {
  return (
    <nav>
      <div>
        <div className="logo-div">
          <img
            src={logoImg}
            alt=""
          />
        </div>
        <ul>
          <li>
            <Link to="/">
              <AiFillHome className="icon" /> Home
            </Link>
          </li>
          <li>
            <Link to="/learn">
              <FaBookReader className="icon" /> Learn
            </Link>
          </li>
          <li>
            <Link to="/about">
              <IoPersonSharp className="icon" /> About
            </Link>
          </li>
          <li>
            <Link to="/contact">
              <FaPhoneAlt className="icon" /> Contact
            </Link>
          </li>
        </ul>
        {/* <SideMenuBar/> */}
      </div>
    </nav>
  );
};

export default NavBar;
