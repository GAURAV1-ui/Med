import React,{useState} from 'react'
import { useNavigate } from 'react-router-dom';
import Button from '../UI/Button';
import Card from '../UI/Card';
import Input from '../UI/Input/Input';
import Back from './Back';
import styles from './PhoneVerification.module.css';
import {auth} from '../../firebase'
import { RecaptchaVerifier,signInWithPhoneNumber } from 'firebase/auth';
import { toast,ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const EmailVerification = (props) => {

    const countryCode = "+91";

    const [error, setError] = useState("");
    const [number, setNumber] = useState(countryCode);
    const [otp, setOtp] = useState('');
    const [flag, setFlag] = useState(false);

    const navigate = useNavigate();

    const numberChangeHandler = (e) => {
        setNumber(e.target.value);
    }
    const otpChangeHandler = (e) => {
        setOtp(e.target.value);
    }

    const generateRecaptcha = () => {
        window.recaptchaVerifier = new RecaptchaVerifier('recaptcha-container', {
             'size': 'invisible',
             'callback': (response) => {

             }
        }, auth);
    }


    const getOtp =(event) => {
        event.preventDefault();
        if(number.length<12){
            toast.error("Enter valid number");
        }
        if(number.length >= 12){
            
           generateRecaptcha();
           let appVerifier = window.recaptchaVerifier;
           
           signInWithPhoneNumber(auth,number,appVerifier)
           .then(confirmationResult => {
            window.confirmationResult = confirmationResult;
            setFlag(true);
           }).catch((error) => {
            console.log(error);
            setFlag(false);
           })          
        }
       
    }

    const verifyOtp = (event) => {
        event.preventDefault();
    if(otp.length<6){
        toast.error("Enter valid otp");
    }
    if(otp.length === 6){
    const code = otp;
    window.confirmationResult.confirm(code).then((result) => {
  // User signed in successfully.
    const user = result.user;
    console.log(user.phoneNumber);
    toast.success("succes");
    navigate("/password", {state:user.phoneNumber });
}).catch((error) => {
    console.log(error.msg);
    toast.error("Invalid otp");  // User couldn't sign in (bad verification code?)
  // ...
});
}
    }


  return (
    <div>
        <Back/>
    <Card>
        {!flag &&
        <div>
        <div>
            
            <div className= {styles.polygon}></div>
            <hr className= {styles.line}/>
        </div>

        <div className={styles.heading}>
            <h2>Hi John! Please enter your Phone number</h2>
            <p>Used for login and recovery of your records</p>
        </div>
        <form >
  
    
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
        <ToastContainer/>
        <div id="recaptcha-container"></div>
         <div className={styles.button}>
        <Button type = "submit" onClick={getOtp}>Request OTP</Button>
        </div>
        </form>
        </div>
        }
        {flag &&
        <div>
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
        id = "otp" 
        label= "OTP" 
        type="number" 
        // isValid={emailIsValid} 
        value ={otp}
        onChange={otpChangeHandler}
        // onBlur={validateEmailHandler}/>
        />
        <ToastContainer/>
        <div className={styles.button}>
        <Button type="submit" onClick ={verifyOtp}>Confirm OTP</Button>
        </div>
        </form>
        
        </div>
}
    </Card>    
    </div>
  );
};

export default EmailVerification;