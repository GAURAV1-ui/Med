import React,{useState} from 'react'
import { useNavigate } from 'react-router-dom';
// import Modal from '../UI/Modal'
import Back from '../SignUp/Back';
import Input from '../UI/Input/Input';
import Card from '../UI/Card';
import CheckBox from './CheckBox'
import Button from '../UI/Button'
import styles from './Login.module.css'
import { signInWithEmailAndPassword } from "firebase/auth";
import { auth } from "../../firebase";
const Login = (props) => {

    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [errorMsg, setErrorMsg] = useState("");
    

    const navigate = useNavigate();

    const changeNumberHandler = (event) => {
        event.preventDefault();
        setEmail(event.target.value);
    }
    const changePasswordHandler = (event) => {
      event.preventDefault();
      setPassword(event.target.value );
  }

    const handleClickSignup =() => {
      navigate("/signup");
    } 


    const handleClickLogin = (event) => {
        event.preventDefault();
        if (!email || !password) {
          setErrorMsg("Fill all fields");
          return;
        }
        setErrorMsg("");

        const emails = "+91"+email+"@domain.com"
        console.log(emails);
        // setSubmitButtonDisabled(true);
        signInWithEmailAndPassword(auth, emails, password)
        .then((userCredential) => {
          const user = userCredential.user;
          console.log(user);
            // setSubmitButtonDisabled(false);
            alert("success");
            navigate("/");
          })
          .catch((err) => {
            // setSubmitButtonDisabled(false);
            setErrorMsg(err.message);
            console.log(err.message);
            alert("fail");
          });
          
        // const enteredFirstName = 
    }
  return (
    // <Modal className = {styles.modal} onClose = {props.onCloseLogin}>
    //     <div>
    //     <div className={styles.loginHeading}>
    //         <h1>MedInclude</h1>
    //         <h4>Simple. Understandable. Accessible</h4>
    //     </div>
    //     <form>
    //         <div className={styles.LoginInput}>
    //             <input
    //             id="useremail" 
    //             type = "email"
    //             value = "iamg@gmail.com">
    //             </input>
    //             <input 
    //             id = "userpassword" 
    //             type = "password"
    //             value = "*********">

    //             </input>
    //         </div>
    //             <CheckBox/>
    //         <div className={styles.button}>
    //         <Button>Log In</Button>
    //         </div>
    //     </form>
    //     <div>
    //         <p>Don't have an account? <a href="/" style={{color: "green", textDecoration: "none"}}>Sign Up</a></p>
    //     </div>
    //     </div>
    // </Modal>
    <div>
    <Back/>
<Card>
<div className={styles.loginHeading}>
         <h1>MedInclude</h1>
        <h5>Simple. Understandable. Accessible</h5>
    </div>
    <form >
    <Input 
    id = "email" 
    type="number"  
    required
    value ={email}
    onChange ={changeNumberHandler}
    // isValid={emailIsValid} 
    placeholder = "9693098513"
    // onChange={emailChangeHandler}
    // onBlur={validateEmailHandler}/>
    />
    <Input 
    id = "password" 
    type="password" 
    placeholder = "•••••••••••"
    value ={password}
    onChange ={changePasswordHandler}
    required
    // isValid={emailIsValid} 
    // onChange={emailChangeHandler}
    // onBlur={validateEmailHandler}/>
    />
    <CheckBox/>
    <div className={styles.button}>
    <Button type = "submit" onClick ={handleClickLogin}>Log In</Button>
    </div>
    </form>
   
    <div className={styles.signup}>
    <p>Don't have an account? <button style={{color: "green", backgroundColor: "transparent",border:"none",fontSize:"17px", cursor:"pointer"}} onClick = {handleClickSignup}>Sign Up</button></p>
    </div>
</Card>

</div>

  )
}

export default Login