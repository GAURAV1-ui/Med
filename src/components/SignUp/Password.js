import React,{useState} from 'react'
import { useNavigate,useLocation } from 'react-router-dom';
import Button from '../UI/Button';
import Card from '../UI/Card';
import Input from '../UI/Input/Input';
import Back from './Back';
import styles from './Password.module.css';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
// import {useUserAuth} from "../../store/UserAuthContext"
import { auth, db } from "../../firebase";
import { ref, set } from "firebase/database";
import { createUserWithEmailAndPassword } from "firebase/auth";

const Password = (props) => {

  const navigate = useNavigate();
  const [password, setPassword] = useState("");

  const items = JSON.parse(localStorage.getItem('User'));
  console.log(items);
  const {state} = useLocation();
  const number = state;
  console.log(number);
  const email = number+"@domain.com";
  console.log(email);
  const changePasswordHandler = (event) => {
  const passwordInputValue = event.target.value.trim();
  setPassword(passwordInputValue);
  }

    const handleSubmission = async(event) => {
    event.preventDefault();
    let passwordRegExp = /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z]).{8,}$/; 
    if (password === "") {
      toast.error("Please enter password");
      return;
    } if (!passwordRegExp.test(password)){
      toast.error("Password is not Valid");
      return;
    }   
    function onRegister() {
      createUserWithEmailAndPassword(auth, email, password)
        .then((userCredential) => {
          set(ref(db, "users/" + userCredential.user.uid), {
            firstName: items.firstName,
            lastName: items.lastName,
            email: email,
          });
        })
        .catch((error) => console.log(error));
      navigate("/");
    }
    onRegister();
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
        onChange={changePasswordHandler}
        />
        <ToastContainer/>
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
        <Button 
        type="submit">Continue</Button>
        </div>
        </form> 
    </Card>
    </div>
  );
};

export default Password;