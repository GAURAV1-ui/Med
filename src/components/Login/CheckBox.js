import React from 'react'
import styles from './CheckBox.module.css'
const CheckBox = () => {
  return (
    <div> 
    <div className={styles.loginCheckBox}>
        <div className={styles.checkbox1}>
        <input type="checkbox" id="checkbox1" name="checkbox1" value="checkbox1" required/>
        <label for="checkbox1"></label>
        <span className={styles.text}>I agree with Terms of Service & Privacy Policy</span>
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