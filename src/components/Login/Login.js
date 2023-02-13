import React,{useRef} from 'react'
import { useNavigate } from 'react-router-dom';
// import Modal from '../UI/Modal'
import Back from '../SignUp/Back';
import Input from '../UI/Input/Input';
import Card from '../UI/Card';
import CheckBox from './CheckBox'
import Button from '../UI/Button'
import styles from './Login.module.css'
const Login = (props) => {

    const phoneInputRef = useRef();
    const passwordInputRef = useRef();
    
    const navigate = useNavigate();

    const handleClickSignup =() => {
      navigate("/signup");
    } 


    const handleClickLogin = (event) => {
        event.preventDefault();
        const phoneNumber = phoneInputRef.current.value;
        const password = passwordInputRef.current.value;
        console.log(phoneNumber);
        navigate("/");
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
    <form onSubmit={handleClickLogin}>
    <Input 
    ref = {phoneInputRef}
    id = "phone" 
    type="tel"  
    required
    // isValid={emailIsValid} 
    placeholder = "9693098513"
    // onChange={emailChangeHandler}
    // onBlur={validateEmailHandler}/>
    />
    <Input 
    ref = {passwordInputRef}
    id = "password" 
    type="password" 
    placeholder = "•••••••••••"
    required
    // isValid={emailIsValid} 
    // onChange={emailChangeHandler}
    // onBlur={validateEmailHandler}/>
    />
    <CheckBox/>
    <div className={styles.button}>
    <Button type = "submit" onClick = {handleClickLogin}>Log In</Button>
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