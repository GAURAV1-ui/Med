import React from 'react'
import { useNavigate } from "react-router-dom";
import TextContainer from '../components/TextContainer/TextContainer';
import styles from './Portal.module.css';
import Button from '../components/UI/Button';
import Navbar from '../components/Menu/Navbar';
// import MainImage from '../Images/Project_69-08.jpg'

const Portal = () => {
  const navigate = useNavigate();

  const handleClickLogin =() => {
    navigate("/login");
  }
  return (
    <div>
    <Navbar />
    <div className={styles.hero}>
      <div className={styles.hero_image}>
        <div class={styles.hero_text}>
          <h1>Simple. Understandable. Accessible</h1>
          <br/>
          <div className={styles.button}>
            <div className={styles.button1}>
          <Button>Get Started</Button>
          </div>
          <div className={styles.button2} onClick ={handleClickLogin}>
          <Button >Log In</Button>
          </div>
          </div>
      </div>
      
    </div>
    <div className={styles.records}>
    <div className={styles.portal}>
        <h1>Record</h1>
    </div>
    <div className={styles.textContainer}>
        <TextContainer />
    </div>
    </div>    
    </div>
    </div>
  )
}

export default Portal;