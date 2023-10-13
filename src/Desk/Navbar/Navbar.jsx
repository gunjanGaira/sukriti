import React from "react";
import logo from "../Navbar/group-3.svg";
import { Link } from "react-router-dom";
import "./Navbar.css";
import Dropdown from 'react-bootstrap/Dropdown';

const Navbar = () => {
  const [dropdown, setDropdown] = React.useState(false);
  const fileOpen = () => {
    setDropdown(true);
  };
  const fileClose = () => {
    setDropdown(false);
  };
  const scrollToBottom =() =>{
    window.scrollTo({
    top : document.documentElement.scrollHeight,
    behavior:"smooth",
  });
  };

  return (
    <>
    <Dropdown className="drop_down">
      <Dropdown.Toggle variant="success" id="dropdown-basic">
        Dropdown Button
      </Dropdown.Toggle>

      <Dropdown.Menu id ="drop_Down">
        <Dropdown.Item href="/">Home</Dropdown.Item>
        <Dropdown.Item href="/">About</Dropdown.Item>
        <Dropdown.Item href="/">Ecomitra</Dropdown.Item>
        <Dropdown.Item href="/">Rewater</Dropdown.Item>
        <Dropdown.Item href="/">Careers</Dropdown.Item>
        <Dropdown.Item href="/">Contact us</Dropdown.Item>
      </Dropdown.Menu>
    </Dropdown>
      <div>
        <div className="container-of-navigation-and-logo">
          <div className="container-of-logo">
            <img className="logo" src={logo} alt="" />
          </div>

          <div className="container-of-navigation-bar">
            <Link to="/" className="container-of-nav-text">
              HOME
            </Link>
            <Link to="/about" className="container-of-nav-text">
              ABOUT
            </Link>
            <Link to="/ecomitra" className="container-of-nav-text">
              ECOMITRA
            </Link>
            <Link to="/rewater" className="container-of-nav-text">
              REWATER
            </Link>
            <Link to="/careers" className="container-of-nav-text">
              CAREERS
            </Link>
            {/* <Link to="/contact" className="container-of-nav-text">
              CONTACT US
            </Link> */}
             <Link onClick={scrollToBottom} className="container-of-nav-text">CONTACT US </Link>
          </div>
        </div>

        

      
      </div>
    </>
  );
};

export default Navbar;
