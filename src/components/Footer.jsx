import { Link } from "react-router-dom";
import { FaLocationDot } from "react-icons/fa6";
import { MdEmail } from "react-icons/md";
import { FaPhoneAlt, FaBookReader } from "react-icons/fa";
import { AiFillHome } from "react-icons/ai";
import { IoPersonSharp } from "react-icons/io5";
import logoImg from "../assets/Kids-Zone-logo.svg";
import BackToTopButton from "./BackToTopButton";

const Footer = () => {
  const year = new Date().getFullYear();

  return (
    <div className="footer">
      <div className="footSec1">
        <img src={logoImg} alt="" />
        <p>
          Inspiring Little Minds to Dream Big: Every Journey Begins with Fun!
        </p>
        <p>
          Copyright <span>&copy;</span> <time>{year}</time> Edukids. All rights reserved.
        </p>
      </div>
      <div className="footSec3">
        <h2>Useful Links</h2>
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
      </div>
      <div className="footSec2">
        <h2>Contact Infomation</h2>
        <p>
          <FaLocationDot className="icon" />
          Alfa Bus-Stop, Sangotedo, Lekki-Epe Expy, Lagos, Nigeria
        </p>
        <p>
          <MdEmail className="icon" /> thekidszonehr@gmail.com
        </p>
        <p>
          <FaPhoneAlt className="icon" /> +234 &nbsp; 915 &nbsp;846 &nbsp;8602
        </p>
      </div>
      <BackToTopButton />
    </div>
  );
};

export default Footer;
