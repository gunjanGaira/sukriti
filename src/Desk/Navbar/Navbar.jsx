import React from "react";
import logo from "../Navbar/group-3.svg";
import { Link } from "react-router-dom";
import "./Navbar.css";
import Button from 'react-bootstrap/Button';
import ButtonGroup from 'react-bootstrap/ButtonGroup';
import Dropdown from 'react-bootstrap/Dropdown';

const Navbar = () => {
  const [dropdown, setDropdown] = React.useState(false);
  const fileOpen = () => {
    setDropdown(true);
  };
  const fileClose = () => {
    setDropdown(false);
  };

  return (
    <>
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
            <Link to="/contact" className="container-of-nav-text">
              CONTACT US
            </Link>
          </div>
        </div>

        {/* <button type="button" onClick={fileOpen} className="dropDown">press </button>
      <dropdown className="dropDown" onClose={fileClose}  dropdown={dropdown}>
      <div className="navi-bar">
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
          <Link to="/contact" className="container-of-nav-text">
            CONTACT US
          </Link>
        </div>
    </dropdown> */}
        {/* <Dropdown as={ButtonGroup} className="dropDown">
      <Button variant="success">Split Button</Button>

      <Dropdown.Toggle split variant="success" id="dropdown-split-basic" />

      <Dropdown.Menu>
        <Dropdown.Item href="#/action-1">Action</Dropdown.Item>
        <Dropdown.Item href="#/action-2">Another action</Dropdown.Item>
        <Dropdown.Item href="#/action-3">Something else</Dropdown.Item>
      </Dropdown.Menu>
    </Dropdown> */}
      
      </div>
    </>
  );
};

export default Navbar;
