import React, {useState} from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import './App.css';
// import Navbar from './components/Menu/Navbar';
import Portal from './Portal/Portal';
import Records from "./Records/Records";
import Login from "./components/Login/Login";
import SignUp from "./components/SignUp/SignUp";
import PhoneVerification from "./components/SignUp/PhoneVerification";
import Password from "./components/SignUp/Password";
import NewRecord from "./NewRecord/NewRecord";
import { UserAuthContextProvider } from "./store/UserAuthContext"




function App() {
  const [translateData, setTranslateData] = useState("");
  const onClick = (data) => {
    setTranslateData(data.data);
    console.log(data.data);
    console.log(translateData);
  }
  return (
    <main>    
      <Router>
      <UserAuthContextProvider>
        <Routes>
           <Route exact path="/" element={<Portal data = {translateData}/>}/>
          <Route exact path="/records" element={<Records data = {translateData}/>}/> 
          <Route exact path = "/newrecord" element = {<NewRecord onTranslate = {onClick}/>}/>
          <Route exact path= "/login" element ={<Login/>}/>
          <Route exact path ="/signup" element = {<SignUp/>}/>
          <Route exact path ="/phoneverification" element = {<PhoneVerification/>}/>
          <Route exact path ="/password" element = {<Password/>}/>
        </Routes>  
        </UserAuthContextProvider>        
      </Router>
    </main>
  );
}

export default App;
