import React, { useState,useEffect } from "react";
import { NavLink } from "react-router-dom";
import { useNavigate } from 'react-router-dom';
// import Button from '../UI/Button';
import "./Navbar.css";
import { auth, db } from "../../firebase";
import { ref, onValue } from "firebase/database";
import { signOut } from "firebase/auth";
import { useUserAuth } from "../../store/UserAuthContext";
import logo from '../../Images/logo.png'

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [username, setUsername] = useState("");
  const {currentUser} = useUserAuth();
  const navigate = useNavigate();
 
    
    // const clickLogin = () => {
    //   if (currentUser) {
    //     logOut(auth);
    //   } else {
    //     navigate("/login");
    //   }
    // };
    // useEffect(() => {
    //   if (currentUser) {
    //     const starCountRef = ref(db, "users/" + currentUser.uid);
    //     onValue(starCountRef, (snapshot) => {
    //       if (snapshot.exists()) {
    //         var data = snapshot.val();
    //         setUsername(data.firstName + " " + data.lastName);
    //       }
    //     });
    //   }
    // }, [currentUser]);
  
    const clickLogin = () => {
      if (currentUser) {
        signOut(auth);
        navigate("/login");
      } else {
        navigate("/login");
      }
    };
  
 
 
  return (
    <div className="Navbar">   
      <img className="nav-logo" src ={logo}/>
      <div className={`nav-items ${isOpen && "open"}`}>
        <p>{username}</p>
        <NavLink to="/" activeClassName = "">Portal</NavLink>
        {currentUser&&<NavLink to="/records" activeClassName = "">Record</NavLink>}
        {currentUser&&<NavLink to='/newrecord' activeClassName = ""> Add</NavLink>}
        <button onClick={clickLogin}>
          {currentUser ? "Log Out" : "Login"}
        </button>
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