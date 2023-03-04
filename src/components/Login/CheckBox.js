import React from 'react'
import styles from './CheckBox.module.css'
import { useNavigate, Link } from 'react-router-dom';
const CheckBox = () => {

  const navigate = useNavigate();
  // const onPrivacyHandler = () =>{
  //   navigate("/privacy")
  // }

  return (
    <div> 
    <div className={styles.loginCheckBox}>
        <div className={styles.checkbox1}>
        <input type="checkbox" id="checkbox1" name="checkbox1" value="checkbox1" required/>
        <label for="checkbox1"></label>
        <span className={styles.button}><Link to = "/privacypolicy" style={{textDecoration: "none", color:"#106e5b"}}>I agree with Terms of Service & Privacy Policy</Link></span>
        </div>
        <div className={styles.checkbox1}>
        <input type="checkbox" id="checkbox2" name="checkbox2" value="checkbox2"/>
        <label for="checkbox2"></label>
        <span className={styles.text}>Subscibe to our Newletter</span>
        </div>
        
    </div>
    </div>
  )
}

export default CheckBox