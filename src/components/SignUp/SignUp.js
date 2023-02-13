import React,{useState} from 'react'
import { json, useNavigate } from 'react-router-dom';
import Button from '../UI/Button';
import Card from '../UI/Card';
import Input from '../UI/Input/Input';
import Back from './Back';
import styles from './SignUp.module.css';

const SignUp = (props) => {

    const [firstName, setFirstName] = useState("");
    const [lastName, setLastName] = useState("");

    const navigate = useNavigate();

    const firstNameChangeHandler = (e) => {
        setFirstName(e.target.value);
    }
    const lastNameChangeHandler = (e) => {
      setLastName(e.target.value);
  }
    const handleClickSignup =(event) => {
      event.preventDefault();
      const names = {
        firstName: firstName,
        lastName: lastName
      }   
      console.log(names);
      localStorage.setItem("names", JSON.stringify(names));
      // se
      navigate("/emailverification");
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
            <h2>What name should we call you?</h2>
        </div>
        <form>
        <Input 
        id = "fisrtName" 
        label= "First Name" 
        type="text" 
        placeholder= "John"
        onChange={firstNameChangeHandler}
        value = {firstName}
        // isValid={emailIsValid} 
        
        // onBlur={validateEmailHandler}/>
        />
        <Input 
        id = "lastName" 
        label= "Last Name" 
        type="text" 
        placeholder ="Doe"
        value = {lastName}
        // isValid={emailIsValid} 
        onChange={lastNameChangeHandler}
        // onBlur={validateEmailHandler}/>
        />
        <div className={styles.button}>
        <Button type = "submit" onClick = {handleClickSignup}>Continue</Button>
        </div>
        </form>
        
    </Card>
    </div>
  );
};

export default SignUp