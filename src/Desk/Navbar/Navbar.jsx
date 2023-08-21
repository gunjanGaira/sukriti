import React from 'react'
import logo from "../Navbar/group-3.svg"
import {Link} from  "react-router-dom"
import './Navbar.css'


const Navbar = () => {
  return (
    <>
    <div className='container-of-navigation-and-logo' >
         <div className='container-of-logo'>
             <img src= {logo} /> 
           </div>
          
      <div className='container-of-navigation-bar'>

         
          <Link to="/" className='container-of-nav-text'>HOME</Link>
          <Link to="/about" className='container-of-nav-text'>ABOUT</Link>
          <Link to="/ecomitra" className='container-of-nav-text'>ECOMITRA</Link>
          <Link to="/rewater" className='container-of-nav-text'>REWATER</Link>
          <Link to="/careers" className='container-of-nav-text'>CAREERS</Link>
          <Link to="/contact" className='container-of-nav-text'>CONTACT US</Link>
      </div>
      </div>
    </>
  )
}

export default Navbar