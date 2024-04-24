import { Link } from "react-router-dom";
import { FaPhoneAlt, FaBookReader } from "react-icons/fa";
import { AiFillHome } from "react-icons/ai";
import { IoPersonSharp } from "react-icons/io5";
import logoImg from "../assets/Kids-Zone-logo.svg";

const NavBar = () => {
  return (
    <nav>
      <div>
        {/* Logo */}
        <div className="logo-div">
          {/* Link to home page */}
          <Link to="/">
            <img
              src={logoImg}
              alt=""
            />
          </Link>
        </div>
        {/* Navigation links */}
        <ul>
          <li>
            {/* Link to home page */}
            <Link to="/">
              <AiFillHome className="icon" /> Home
            </Link>
          </li>
          <li>
            {/* Link to learn page */}
            <Link to="/learn">
              <FaBookReader className="icon" /> Learn
            </Link>
          </li>
          <li>
            {/* Link to about page */}
            <Link to="/about">
              <IoPersonSharp className="icon" /> About
            </Link>
          </li>
          <li>
            {/* Link to contact page */}
            <Link to="/contact">
              <FaPhoneAlt className="icon" /> Contact
            </Link>
          </li>
        </ul>
        {/* Side menu bar */}
        {/* <SideMenuBar/> */}
      </div>
    </nav>
  );
};

export default NavBar;
