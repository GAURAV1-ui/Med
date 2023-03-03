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
import axios from 'axios';

const Login = () => {

    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");

    const navigate = useNavigate();

    const changeEmailHandler = (event) => {
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
          toast.error("Please enter email and password");
          return;
        }
        if (password.length<8){
          toast.error("Please enter valid email and password");
          return;
        }

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
        // function onRegister() {
        //   signInWithEmailAndPassword(auth, emails, password).then((res)=>{
        //     console.log(res);
        //     toast.success("Successfull");
        //     navigate("/");
        //   }).catch((error) =>{
        //     console.log(error);
        //     toast.error("Please enter valid number and password");
        //   }
        //   );        
        // }
        // onRegister();
        axios({
          method: 'post',
          url: 'https://medinclude-api.onrender.com/api/login',
          data:{
              uniqueId: email,
              password: password,
          },
        }).then((res) => {
          console.log(res.data);
          toast.success("Successfull");
          // navigate("/");
        }).catch((err) => {
          console.log(err);
          console.log(err.error)
          toast.error("Please enter valid number and password");
        })
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

    {/* <PhoneInput
        className={styles.phoneInput}
        international
        countryCallingCodeEditable={false}
        defaultCountry="US"
         placeholder="Enter phone number"
         value={email}
         onChange={setEmail}  
         /> */}
     <Input 
    id = "email" 
    type="email" 
    placeholder = "iamGaurav@gmail"
    value ={email}
    onChange ={changeEmailHandler}
    required
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