import React, { useState } from 'react';
import { NavLink } from 'react-router-dom';
import {
  FaHome,
  FaUserFriends,
  FaInfo,
  FaShareAlt, 
  FaUser
} from "react-icons/fa";

// import css
import '../../Styles/LandingPages/sidebar.css';
  

const Sidebar = ({ children }) => {
  const [isOpen, setIsOpen] = useState(false);
  const toggle = () => {
    setIsOpen(!isOpen);
  };

  const menuItem = [
    {
      id: "icon-1",
      path: "/",
      name: "Homepage",
      icon: <FaHome color="black" />,
    },
    {
      id: "icon-4",
      path: "/profilePage",
      name: "Profile Page",
      icon: <FaUser color="black" />,
    },
    {
      id: "icon-2",
      path: "/community",
      name: "Community",
      icon: <FaUserFriends color="black" />,
    },
    {
      id: "icon-3",
      path: "/about-us",
      name: "About Us",
      icon: <FaInfo color="black" />,
    },
    {
      id: "icon-5",
      path: "/share",
      name: "Share",
      icon: <FaShareAlt color="black" />,
    },
  ];

  return (
    <div>
      <div style={{ width: isOpen ? "150px" : "100px" }} className="sidebar">
        <div className="top_section" style={{ marginLeft: isOpen ? "2.5rem" : "0.7rem" }} >
          <div style={{ marginLeft: isOpen ? "10px" : "10px" }} className="bars">
            <img
              src="./images/logo.png"
              style={{ height: "55px", width: "auto" }}
              onClick={toggle}
              alt="toggle"
            />
          </div>
        </div>
        {menuItem.map((item, index) => (
          <NavLink to={item.path} key={index} className="link d-flex flex-column" activeClassName="active">
            <div className="icon" id={item.id} onClick={toggle}>{item.icon}</div>
            <div style={{ display: isOpen ? "block" : "none" }} className="link_text">{item.name}</div>
          </NavLink>
        ))}
      </div>
      <main>{children}</main>
    </div>
  );
};

export default Sidebar;