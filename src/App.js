import React, {useState} from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import './App.css';
import Navbar from './components/Menu/Navbar';
import Portal from './Portal/Portal';
import Records from "./Records/Records";
import Login from "./components/Login/Login";
import SignUp from "./components/SignUp/SignUp";
import EmailVerification from "./components/SignUp/EmailVerification";
import Otp from "./components/SignUp/Otp";
import Password from "./components/SignUp/Password";
import NewRecord from "./NewRecord/NewRecord";

function App() {
  // const [LoginIsShown, setLoginIsShown] = useState(false);

  return (
    <main>      
      <Router>

        <Routes>
          <Route exact path="/" element={<Portal/>}/>
          <Route exact path="/records" element={<Records/>}/>    
          <Route exact path = "/newrecord" element = {<NewRecord/>}/>

        
       
          <Route exact path= "/login" element ={<Login/>}/>
          <Route exact path ="/signup" element = {<SignUp/>}/>
            <Route exact path ="/emailverification" element = {<EmailVerification/>}/>
            <Route exact path ="/otp" element = {<Otp/>}/>
            <Route exact path ="/password" element = {<Password/>}/>
            </Routes>    
      </Router>
    </main>
  );
}

export default App;
