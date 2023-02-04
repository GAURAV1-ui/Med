import React from 'react'
import styles from './CheckBox.module.css'
const CheckBox = () => {
  return (
    <div> 
    <div className={styles.loginCheckBox}>
        <div className={styles.checkbox}>
        <input type="checkbox" id="checkbox" name="checkbox" value="checkbox1"/>
        <label for="checkbox"></label>
        <span className={styles.text}>I agree with Terms of Service & Privacy Policy</span>
        </div>
        <div className={styles.checkbox}>
        <input type="checkbox" id="checkbox" name="checkbox" value="checkbox2"/>
        <label for="checkbox"></label>
        <span className={styles.text}>Subscibe to our Newletter</span>
        </div>
        
    </div>
    </div>
  )
}

export default CheckBox