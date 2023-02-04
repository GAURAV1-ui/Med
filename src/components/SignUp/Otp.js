import React,{useRef} from 'react'
import { useNavigate } from 'react-router-dom';
import Button from '../UI/Button';
import Card from '../UI/Card';
import Input from '../UI/Input/Input';
import Back from './Back';
import styles from './Otp.module.css';

const Otp = (props) => {

    const otpInputRef = useRef();

    const navigate = useNavigate();
    const handleClickOtp =() => {
        navigate("/password");
      } 

  return (
    <div>
        <Back/>
    <Card>
        <div>
            <div className= {styles.polygon}></div>
            <hr className= {styles.line}/>
        </div>
        <div className={styles.heading}>
            <h2>Hi John! Please enter your OTP</h2>
            <p>Used for login and recovery of your records</p>
        </div>
        <form >
        <Input 
        ref = {otpInputRef}
        id = "otp" 
        label= "OTP" 
        type="number" 
        // isValid={emailIsValid} 
        value =""
        // onChange={emailChangeHandler}
        // onBlur={validateEmailHandler}/>
        />
        </form>
        <div className={styles.button}>
        <Button onClick = {handleClickOtp}>Continue</Button>
        </div>
    </Card>
    </div>
  );
};

export default Otp;