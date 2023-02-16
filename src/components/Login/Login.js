import React,{useState} from 'react'
import { useNavigate } from 'react-router-dom';
// import Modal from '../UI/Modal'
import Back from '../SignUp/Back';
import Input from '../UI/Input/Input';
import Card from '../UI/Card';
import CheckBox from './CheckBox'
import Button from '../UI/Button'
import styles from './Login.module.css'
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { useUserAuth } from "../../store/UserAuthContext";
const Login = (props) => {

    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const { logIn } = useUserAuth();

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


    const handleClickLogin = async(event) => {
        event.preventDefault();

        if (password === "" ||email === "") {
          toast.error("Please enter number and password");
          return;
        }
        if (email.length<10 || password.length<8){
          toast.error("Please valid number and password");
          return;
        }

        const emails = "+91"+email+"@domain.com"
        console.log(emails);
        // setSubmitButtonDisabled(true);
        try{
          await logIn(emails, password);
          // setSubmitButtonDisabled(false);
          // alert("success");
          toast.success("Successfull");
          navigate("/");
        }
  
          catch {
            // setSubmitButtonDisabled(false);
            console.log();
            toast.error("Please enter valid number and password");
          };
          
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
    <ToastContainer/>
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