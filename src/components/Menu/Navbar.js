import React, { useState } from "react";
import { NavLink } from "react-router-dom";
import { useNavigate } from 'react-router-dom';
// import Button from '../UI/Button';
import "./Navbar.css";

import { useUserAuth } from "../../store/UserAuthContext";

const Navbar = (props) => {
  const [isOpen, setIsOpen] = useState(false);
  const {logIn,logOut,isLoggedIn} = useUserAuth();
  const navigate = useNavigate();
  const userLogout = async() =>{
    
    try {
      await logOut()
      navigate("/login")
    } catch {
      // setError("Failed to log out")
      alert("error");
    }
  }
  
 
 
  return (
    <div className="Navbar">
      <span className="nav-logo">MedInclude</span>
      
      <div className={`nav-items ${isOpen && "open"}`}>
        <NavLink to="/" activeClassName = "">Portal</NavLink>
        {isLoggedIn&&<NavLink to="/records" activeClassName = "">Record</NavLink>}
        {isLoggedIn&&<NavLink to='/newrecord' activeClassName = ""> Add</NavLink>}
        {/* <Button onClick = {props.onShowLogin}>Login</Button> */}
        {isLoggedIn&&<button onClick={userLogout}>logout</button>}
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