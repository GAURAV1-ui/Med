import React,{useState} from 'react'
import { useNavigate,useLocation } from 'react-router-dom';
import Button from '../UI/Button';
import Card from '../UI/Card';
import Input from '../UI/Input/Input';
import Back from './Back';
import styles from './Password.module.css';
import { createUserWithEmailAndPassword, updateProfile } from "firebase/auth";
import { auth } from "../../firebase";

const Password = (props) => {
  const navigate = useNavigate();
  const [password, setPassword] = useState("");
  const [errorMsg, setErrorMsg] = useState("");

  const {state} = useLocation();
  const number = state;
  console.log(number);
  const email = number+"@domain.com";
  console.log(email);
  const changePasswordHandler = (event) => {
    event.preventDefault();
    setPassword(event.target.value);
  }
  const handleSubmission = (event) => {
    event.preventDefault();
    

    if (!email || !password) {
      setErrorMsg("Fill all fields");
      return;
    }
    setErrorMsg("");

    // setSubmitButtonDisabled(true);
    createUserWithEmailAndPassword(auth, email, password)
      .then(async (res) => {
        // setSubmitButtonDisabled(false);
        const user = res.user;
        console.log(user);

        navigate("/");
      })
      .catch((err) => {
        // setSubmitButtonDisabled(false);
        setErrorMsg(err.message);
      });
  };

  return (
    <div>
        <Back/>
    <Card>
        <div>
            <div className= {styles.polygon}></div>
            <hr className= {styles.line}/>
        </div>
        <div className={styles.heading}>
            <h2>Create an E-mail and password for your account</h2>
        </div>
        <form onSubmit={handleSubmission}>
    
        <Input 
        id = "password" 
        label= "Password" 
        type="password" 
        required
        // isValid={emailIsValid} 
        onChange={changePasswordHandler}
        // onBlur={validateEmailHandler}/>
        />
        {errorMsg}
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
        <Button type="submit">Continue</Button>
        </div>
        </form>
       
        
    </Card>
    </div>
  );
};

export default Password;