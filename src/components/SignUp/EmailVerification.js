import React,{useState} from 'react'
import { useNavigate } from 'react-router-dom';
import Button from '../UI/Button';
import Card from '../UI/Card';
import Input from '../UI/Input/Input';
import Back from './Back';
import styles from './EmailVerification.module.css';
import { useUserAuth } from '../../store/auth-context';

const EmailVerification = (props) => {

    const countryCode = "+91";

    const [error, setError] = useState("");
    const [number, setNumber] = useState(countryCode);
    const [flag, setFlag] = useState(false);
    const navigate = useNavigate();

    const numberChangeHandler = (e) => {
        setNumber(e.target.value);
    }

    const getOtp =(event) => {
        event.preventDefault();
        if(number.length >= 12){
            setFlag(true);
          
        }
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
            <h2>Hi John! Please enter your email address</h2>
            <p>Used for login and recovery of your records</p>
        </div>
        <form onSubmit={getOtp}>
  
        {/* <div className={styles.or}>
            <h1>Or</h1>
        </div> */}
        <Input 
        id = "number" 
        label= "Phone Number" 
        type="tel"
        placeholder = "9693098513" 
        value ={number}
        onChange={numberChangeHandler}
        
        // isValid={emailIsValid} 
        // onChange={phoneChangeHandler}
        // onBlur={validateEmailHandler}/>
        
        />
        <div id="recaptcha-container"></div>
         <div className={styles.button}>
        <Button >Continue</Button>
        </div>
        </form>

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
        // ref = {otpInputRef}
        id = "otp" 
        label= "OTP" 
        type="number" 
        // isValid={emailIsValid} 
        value =""
        // onChange={emailChangeHandler}
        // onBlur={validateEmailHandler}/>
        />
        
        
        <div className={styles.button}>
        <Button>Request OTP</Button>
        </div>

        </form>
       
    </Card>


       
        
    </div>
  );
};

export default EmailVerification;