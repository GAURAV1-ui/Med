import React,{useState} from 'react'
import { useNavigate } from 'react-router-dom';
import Back from '../SignUp/Back';
import Input from '../UI/Input/Input';
import Card from '../UI/Card';
import CheckBox from './CheckBox'
import Button from '../UI/Button'
import styles from './Login.module.css'
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { signInWithEmailAndPassword } from "firebase/auth";
import {auth} from "../../firebase"
import PhoneInput from 'react-phone-number-input'
import 'react-phone-number-input/style.css'
const Login = () => {

    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");

    const navigate = useNavigate();

    // const changeNumberHandler = (event) => {
    //     event.preventDefault();
    //     setEmail(event.target.value);
    // }
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

        const emails = email+"@domain.com"
        console.log(emails);
        // setSubmitButtonDisabled(true);
        // try{
        //   await logIn(emails, password);
        //   toast.success("Successfull");
        //   navigate("/");
        // }
  
        //   catch {
        //     console.log();
        //     toast.error("Please enter valid number and password");
        //   };
        function onRegister() {
          signInWithEmailAndPassword(auth, emails, password).then((res)=>{
            console.log(res);
            toast.success("Successfull");
            navigate("/");
          }).catch((error) =>{
            console.log(error);
            toast.error("Please enter valid number and password");
          }
          );        
        }
        onRegister();
    };

  return (
   
    <div>
    <Back/>
<Card>
<div className={styles.loginHeading}>
         <h1>MedInclude</h1>
        <h5>Simple. Understandable. Accessible</h5>
    </div>
    <form >
    {/* <Input 
    id = "email" 
    type="number"  
    required
    value ={email}
    onChange ={changeNumberHandler}
    placeholder = "9693098513"
    /> */}
    <PhoneInput
        className={styles.phoneInput}
        international
        countryCallingCodeEditable={false}
        defaultCountry="US"
         placeholder="Enter phone number"
         value={email}
         onChange={setEmail}
         PhoneInputInput = {{
          color: "green",
          height: "40px"

         }}
         />
    <ToastContainer/>
    <Input 
    id = "password" 
    type="password" 
    placeholder = "•••••••••••"
    value ={password}
    onChange ={changePasswordHandler}
    required
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