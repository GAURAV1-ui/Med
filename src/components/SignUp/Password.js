import React,{useRef} from 'react'
import { useNavigate } from 'react-router-dom';
import Button from '../UI/Button';
import Card from '../UI/Card';
import Input from '../UI/Input/Input';
import Back from './Back';
import styles from './Password.module.css';

const Password = (props) => {

    const passwordInputRef = useRef();

    const navigate = useNavigate();

    const handleClickPassword =() => {
      navigate("/");
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
            <h2>Create a password for your account</h2>
        </div>
        <form >
        <Input 
        ref = {passwordInputRef}
        id = "password" 
        label= "Password" 
        type="password" 
        // isValid={emailIsValid} 
        value =""
        // onChange={emailChangeHandler}
        // onBlur={validateEmailHandler}/>
        />
        </form>
        <div className={styles.instruction}>
        <p>Your password must contains:</p>
        <div className={styles.instruction_details}>
        <p>Minimum of 8 characters</p>
        <p>At least one number</p>
        <p>At least one uppercase letter</p>
        <p>At least one lowercase letter</p>
        </div>
        </div>
        <div className={styles.button}>
        <Button onClick = {handleClickPassword}>Continue</Button>
        </div>
    </Card>
    </div>
  );
};

export default Password;