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

    const firstNameInputRef = useRef();
    const lastNameInputRef = useRef();
    
    const navigate = useNavigate();

    const handleClickSignup =() => {
      navigate("/signup");
    } 

    const handleClickLogin =() => {
        navigate("/");
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
    ref = {firstNameInputRef}
    id = "fisrtName" 
    type="text" 
    // isValid={emailIsValid} 
    value =""
    // onChange={emailChangeHandler}
    // onBlur={validateEmailHandler}/>
    />
    <Input 
    ref = {lastNameInputRef}
    id = "lastName" 
    type="text" 
    // isValid={emailIsValid} 
    value =""
    // onChange={emailChangeHandler}
    // onBlur={validateEmailHandler}/>
    />
    <CheckBox/>
    </form>
    <div className={styles.button}>
    <Button onClick = {handleClickLogin}>Log In</Button>
    </div>
    <div className={styles.signup}>
    <p>Don't have an account? <button style={{color: "green", backgroundColor: "transparent",border:"none",fontSize:"17px", cursor:"pointer"}} onClick = {handleClickSignup}>Sign Up</button></p>
    </div>
</Card>

</div>

  )
}

export default Login