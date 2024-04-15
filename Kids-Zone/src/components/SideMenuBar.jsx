import { FaPhoneAlt, FaBookReader } from "react-icons/fa";
import { AiFillHome } from "react-icons/ai";
import { IoPersonSharp } from "react-icons/io5";
import { TfiMenuAlt } from "react-icons/tfi";
import { useState } from "react";

const sideMenuArray = [
  {
    title: "Home",
    icon: <AiFillHome className="side-icon" />,
    link: "/",
  },
  {
    title: "Learn",
    icon: <FaBookReader className="side-icon" />,
    link: "/learn",
  },
  {
    title: "About",
    icon: <IoPersonSharp className="side-icon" />,
    link: "/about",
  },
  {
    title: "Contact",
    icon: <FaPhoneAlt className="side-icon" />,
    link: "/contact",
  },
  // ... other menu items
];

function SideMenuBar() {
  const [isOpen, setIsOpen] = useState(false);
  const [iswhite, setIsWhite] = useState(true);

  const toggleSidebar = () => {
    setIsOpen(!isOpen);
    setIsWhite(!isOpen);
  };

  return (
    <div className="side-bar">
      <MenuIcon handleClick={toggleSidebar} style={{ background: iswhite ? "transparent" : "white" }}/>
      <ul style={{ display: isOpen ? "flex" : "none" }}>
        {sideMenuArray.map((item, idx) => (
          <MenuItem key={idx} item={item} />
        ))}
      </ul>
    </div>
  );
}

function MenuIcon({ handleClick }) {
  return (
    <div className="menu-div">
      <TfiMenuAlt className="menu" onClick={handleClick} />
    </div>
  );
}

function MenuItem({ item }) {
  return (
    <li
      key={item.link}
      onClick={() => (window.location.pathname = item.link)}
      className={window.location.pathname === item.link ? "active" : ""}
    >
      {item.icon}
      {item.title}
    </li>
  );
}


export default SideMenuBar;
