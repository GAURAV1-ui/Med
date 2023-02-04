import React,{useRef} from 'react'
import { useNavigate } from 'react-router-dom';
import Button from '../UI/Button';
import Card from '../UI/Card';
import Input from '../UI/Input/Input';
import Back from './Back';
import styles from './EmailVerification.module.css';

const EmailVerification = (props) => {

    const emailInputRef = useRef();
    const phoneInputRef = useRef();

    const navigate = useNavigate();
    const handleClickEmail =() => {
        navigate("/otp");
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
        <form >
        <Input 
        ref = {emailInputRef}
        id = "email" 
        label= "Email" 
        type="email" 
        // isValid={emailIsValid} 
        value =""
        placeholder = "iamgaur@gmail.com"
        // onChange={emailChangeHandler}
        // onBlur={validateEmailHandler}/>
        />
        <div className={styles.or}>
            <h1>Or</h1>
        </div>
        <Input 
        ref = {phoneInputRef}
        id = "number" 
        label= "Phone Number" 
        type="tel"
        placeholder = "+91 9693098513" 
        // isValid={emailIsValid} 
        value =""
        // onChange={emailChangeHandler}
        // onBlur={validateEmailHandler}/>
        />
        </form>
        <div className={styles.button}>
        <Button onClick = {handleClickEmail}>Continue</Button>
        </div>
    </Card>
    </div>
  );
};

export default EmailVerification;