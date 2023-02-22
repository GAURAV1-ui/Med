import React from 'react'
import { useNavigate } from "react-router-dom";
import TextContainer1 from '../components/TextContainer/TextContainer1';
import styles from './Portal.module.css';
import Button from '../components/UI/Button';
import Navbar from '../components/Menu/Navbar';

import { useUserAuth } from "../store/UserAuthContext";

const Portal = (props) => {
  const navigate = useNavigate();
  const {currentUser} = useUserAuth();

  const handleClickLogin =() => {
    navigate("/signup");
  }
  const handleClickStarted =() => {
    navigate("/");
  }
  return (
    <div>
    <Navbar />
    <p>{props.data}</p>
    <div className={styles.hero}>
      <div className={styles.hero_image}>
        <div class={styles.hero_text}>
          <h1>Simple. Understandable. Accessible</h1>
          
          <br/>
          <div className={styles.button}>
            <div className={styles.button1}>
          <Button onClick = {handleClickStarted}>Get Started</Button>
          </div>
         <div className={styles.button2} onClick ={handleClickLogin}>
          {!currentUser &&<Button >Sign Up</Button>}
          </div>
          </div>
      </div>   
    </div>
    <div className={styles.records}>
    <div className={styles.portal}>
        <h1>Record</h1>
    </div>
    <div className={styles.textContainer}>
        <TextContainer1/>
    </div>
    </div>    
    </div>
    </div>
  )
}

export default Portal;