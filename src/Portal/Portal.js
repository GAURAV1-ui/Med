import React from 'react'
import { Link } from "react-router-dom";
// import TextContainer1 from '../components/TextContainer/TextContainer1';
import styles from './Portal.module.css';
// import Button from '../components/UI/Button';
import Navbar from '../components/Menu/Navbar';
import med from '../Images/2.jpg';
import About from './About';

import { useUserAuth } from "../store/UserAuthContext";
import Contact from './Contact';


const Portal = () => {
  const {userLoggedIn} = useUserAuth();
  // const navigate = useNavigate();
  // const {currentUser} = useUserAuth();

  // const handleClickLogin =() => {
  //   navigate("/signup");
  // }
  // const handleClickStarted =() => {
  //   navigate("/");
  // }
  return (
    // <div>
    // <Navbar />
    // <p>{props.data}</p>
    // <div className={styles.hero}>
    //   <div className={styles.hero_image}>
    //     <div class={styles.hero_text}>
    //       <h1>Simple. Understandable. Accessible</h1>
          
    //       <br/>
    //       <div className={styles.button}>
    //         <div className={styles.button1}>
    //       <Button onClick = {handleClickStarted}>Get Started</Button>
    //       </div>
    //      <div className={styles.button2} onClick ={handleClickLogin}>
    //       {!currentUser &&<Button >Sign Up</Button>}
    //       </div>
    //       </div>
    //   </div>   
    // </div>
    // <div className={styles.records}>
    // <div className={styles.portal}>
    //     <h1>Record</h1>
    // </div>
    // <div className={styles.textContainer}>
    //     <TextContainer1/>
    // </div>
    // </div>    
    // </div>
    // </div>
    <div>
      <Navbar/>
      <div className={styles.heading}>
      <h1>Your health in your hands</h1>
      </div>
      <div className={styles.home_background}>
        <div className={styles.home_container}>
          <div className={styles.float_container}>
            <div className={`${styles.float_child} ${styles.left}`}>
              <h1>
                Medical Information:
              </h1>
              <br/>
              <ul>
                <li>Simple</li>
                <li>Accessible</li>
                <li>Understandable</li>
              </ul>
              <br/>
              <p>Simplify medical information in three minutes. Read it in your preferred language and access it anytime, anywhere.</p>
              {!userLoggedIn && <div className={`${styles.home_form_group} ${styles.buttons}`}>
                <button
                  className={styles.home_form_button}
                  onClick={() => {
                    window.location.href = "/signup";
                  }}
                >
                  Sign up
                </button>
                
              </div>
              }
            </div>
            <div className={`${styles.float_child} ${styles.right}`}>
              <img className={styles.home_img} src={med} alt="" />
            </div>
          </div>
        </div>
      </div>
      <About id="about"/>
      <Contact id = "contact"/>
      <div className={styles.footer}>
        <Link to="/">Security and Trust</Link>
        <Link to="/">Terms of Use</Link>
        <Link to="/">Privacy Policy</Link>
      </div>
    </div>
  )
}

export default Portal;