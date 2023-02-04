import React, { useState } from "react";
import { NavLink } from "react-router-dom";
// import Button from '../UI/Button';
import "./Navbar.css";
const Navbar = (props) => {
  const [isOpen, setIsOpen] = useState(false);
 
  return (
    <div className="Navbar">
      <span className="nav-logo">MedInclude</span>
      
      <div className={`nav-items ${isOpen && "open"}`}>
        <NavLink to="/" activeClassName = "">Portal</NavLink>
        <NavLink to="/records" activeClassName = "">Record</NavLink>
        <NavLink to='/newrecord' activeClassName = ""> Add</NavLink>
        {/* <Button onClick = {props.onShowLogin}>Login</Button> */}
      </div>
      <div
        className={`nav-toggle ${isOpen && "open"}`}
        onClick={() => setIsOpen(!isOpen)}
      >
        <div className="bar"></div>
      </div>
    </div>
  );
};

export default Navbar;