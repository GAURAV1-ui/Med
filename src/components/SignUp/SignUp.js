import React,{useState} from 'react'
import { useNavigate } from 'react-router-dom';
import Button from '../UI/Button';
import Card from '../UI/Card';
import Input from '../UI/Input/Input';
import Back from './Back';
import styles from './SignUp.module.css';
import { toast,ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

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
      if(firstName === "" || lastName=== ""){
        toast.error("Name is empty");
        return;
      }

      if(firstName.length<3 || lastName.length<3){
        toast.error("Name is not valid");
        return
      }
      const names = {
        firstName: firstName,
        lastName: lastName
      }   
      console.log(names);
      localStorage.setItem("names", JSON.stringify(names));
      navigate("/phoneverification");
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
        id = "firstName" 
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
        <ToastContainer/>
        <div className={styles.button}>
        <Button type = "submit" onClick = {handleClickSignup}>Continue</Button>
        </div>
        </form>
        
    </Card>
    </div>
  );
};

export default SignUp