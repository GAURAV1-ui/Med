import React, { useState,useEffect } from "react";
import { NavLink } from "react-router-dom";
import { useNavigate,Link } from 'react-router-dom';
// import Button from '../UI/Button';
import "./Navbar.css";
import { useUserAuth } from "../../store/UserAuthContext";
import logo from '../../Images/logo.webp'

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [username, setUsername] = useState("");
  const {logOutHandler,userLoggedIn} = useUserAuth();
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

    const clickLogout = async () => {
      await logOutHandler();
      navigate('/login');
    };
    
    const clickLogin = () => {
      navigate("/login")
    }
    // const clickLogin = () => {
    //   if (currentUser) {
    //     signOut(auth);
    //     navigate("/login");
    //   } else {
    //     navigate("/login");
    //   }
    // };
  
 
 
  return (
    <div className="Navbar">   
      <Link to = "/"><img className="nav-logo" src ={logo}/></Link>
      <div className={`nav-items ${isOpen && "open"}`}>
        <p>{username}</p>
        <NavLink to="/" activeClassName = "">Portal</NavLink>
        {userLoggedIn && <NavLink to="/records" activeClassName = "">Record</NavLink>}
        {userLoggedIn && <NavLink to='/newrecord' activeClassName = ""> Add</NavLink>}
        {userLoggedIn && <button onClick={clickLogout}>
           Logout
        </button>}
        {!userLoggedIn && <button onClick={clickLogin}>
           Login
        </button>}
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