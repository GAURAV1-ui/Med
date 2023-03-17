import React,{useContext,useState,useEffect} from "react";
import styled from "styled-components";
import { useNavigate } from "react-router-dom";
import { TbAlignLeft} from "react-icons/tb";
// import { FaRegUser } from "react-icons/fa";
import Menu from "./Menu";
import { useUserAuth } from "../../store/UserAuthContext";
// import { baseUrl } from "../../API/api";
// import axios from "axios";
import logo from "../../Images/logo.webp";



const Navbar1 = ({ toggleDrawer }) => {
  // const [user, setUser] = useState(false);
  const {userLoggedIn} = useUserAuth();

  const navigate = useNavigate();


  const navigateHandler = () => {
    navigate("/login")
  }

  const navigateHomeHandler = () => {
    navigate("/")
  }
  // const clickDashboardHandler = () => {
  //   navigate("user-dashboard")
  // }
  

  
  return (
    <SNavbar>
      <NavContainer>
        <DrawerButton onClick={toggleDrawer} style ={{cursor:"pointer"}}>
          <TbAlignLeft />
        </DrawerButton>
        <Image src={logo} alt="" onClick={navigateHomeHandler}/>
        <RightNav>     
          <NavRoutes>
          <NavRoute
                  to="/"
                  key="Home"
                >
                  Home
                </NavRoute>
                <NavRoute
                  to="/under-construction"
                  key="Workshops"
                >
                  Workshops
                </NavRoute>
                <NavRoute
                  to="/about"
                  key="About Us"
                >
                  About Us
                </NavRoute>
                <NavRoute
                  to="/faq"
                  key="faq"
                >
                  FAQ
                </NavRoute>
                <NavRoute
                  to="/our-team"
                  key="our-team"
                >
                  Our Team
                </NavRoute>   
                <Menu/>
                {userLoggedIn && (
                <NavRoute
                  to="/dashboard"
                  key="dashboard"
                >
                  Dashboard
                </NavRoute>
                )}
          </NavRoutes>
          {/* {!authContext.isUserLoggedIn && (
              <Link to="/sign-in" className="signInButton">
                <LoginButton>Login</LoginButton>
              </Link>
            )}
            
            {authContext.isUserLoggedIn && (
              <Link to="/" className="signInButton" onClick={logOutHandler}>
                <LoginButton>Logout</LoginButton>
              </Link>
            )} */}
            {userLoggedIn && 
          <LoginButton onClick={navigateHandler}>Login</LoginButton>}


        </RightNav>
      </NavContainer>
    </SNavbar>
  );
}

export default Navbar1;

const DrawerButton = styled.button`
  all: unset;
  font-size: 3rem;
  display: grid;
  // color: #68fe04;
  z-index:1;
  @media (max-width: 780px) {
    font-size: 2rem;
  }
`;



const SNavbar = styled.nav`
      // background-color: black;
      z-index:1;
      
  @media (max-width: 780px){
      opacity:100%;
    }
`;
const NavContainer = styled.div`
  padding: 1rem;
  height: 80px;
  max-width: 1400px; 
  margin: 0 auto;
  display: flex;
  justify-content: space-between;
  align-items: center;
  color: white;
  z-index:1;

`;
const Image = styled.img`
    cursor:pointer;
    width:20%;
    z-index:1;
    @media (max-width: 600px) {
      width: 50%;
    }
`;

const Profile = styled.h2`
z-index:1;
cursor:pointer;
@media (max-width: 900px){
  display: none;
}
`
const RightNav = styled.div`
  display: flex;
  gap: 1rem;
`;
const LoginButton = styled.button`
  padding: 8px 25px;
  margin-left: 0.6rem;
  font-size: 20px;
  color:#68fe04;
  background-color: black;
  border: 1px solid #68fe04;
  border-radius: 2rem;
  transition: 0.3s ease;
  align-self: flex-start;
  z-index:1;
  cursor:pointer;
  &:hover {
    transition: 0.3s ease;
    color: black;
    background-color:#68fe04;
    // border: 1px solid transparent;
    // box-shadow: 0px 0px 10px black;

  }
  @media (max-width: 600px){
    font-size: 12px;
    padding: 5px 16px;
  }
`;
const NavRoutes = styled.div`
  @media (max-width: 900px) {
    display: none;
  }
  display: flex;
  gap: 1rem;
  font-size: 1rem;
   z-index:1;
  align-items: center;

`;
const NavRoute = styled.Link`
  text-decoration: none;
  color: white;
  padding: 0.5rem;
  transition: 0.5s ease;
  &:hover {
    transition: 0.3s ease-in;
    color: black;
    border-radius: 10px;
    background-color: #68fe04;
  }
`;

