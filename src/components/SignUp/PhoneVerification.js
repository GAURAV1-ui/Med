import React,{useState} from 'react'
import { useNavigate } from 'react-router-dom';
import Button from '../UI/Button';
import Card from '../UI/Card';
import Input from '../UI/Input/Input';
import Back from './Back';
// import { db } from '../../firebase';
import styles from './PhoneVerification.module.css';
// import {auth} from '../../firebase'
// import { onAuthStateChanged } from 'firebase/auth';
import axios from 'axios';

import { toast,ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';




const EmailVerification = (props) => {    
    // const[user,setUser] = useState();
    // const[userNumber,setUserNumber] = useState();
    const [email, setEmail] = useState();
    const [userOtp, setUserOtp] = useState('');
    const [flag, setFlag] = useState(false);
    const [otp, setOtp] = useState("");
    const [hasCode, setHashCode] = useState("");
    const [uniqueId, setUniqueId] = useState("");

    const items = JSON.parse(localStorage.getItem('User'));
    const navigate = useNavigate();

    const emailChangeHandler = (event) => {
        setEmail(event.target.value);
    }

    // useEffect(() => {
    //     const unsubscribe = onAuthStateChanged(auth, (currentuser) => {
    //       console.log("Auth", currentuser);
    //       setUser(currentuser);
    //     });
    
    //     return () => {
    //       unsubscribe();
    //     };
    //   }, []);

      

    //   useEffect(() => {
    //     const getNumber = async () => {
    //       const data = await getDocs(usersCollectionRef);
    //       setUserNumber(data.docs.map((doc) => ({ ...doc.data(), id: doc.id })));
    //     };
    //     getNumber();
       
    //   }, []);
    

    const otpChangeHandler = (e) => {
        setUserOtp(e.target.value);
    }   

    // const generateRecaptcha = () => {
    //     window.recaptchaVerifier = new RecaptchaVerifier('recaptcha-container', {
    //          'size': 'invisible',
    //          'callback': (response) => {
    //          }
    //     }, auth);
    // }
    // const validCheck =()=> {userNumber.filter((num) =>{
    //     console.log(num.number);
    //     console.log(number);
    //     console.log(num.number.includes(number.toString()) );
    //     return num.number.includes(number.toString());
    // })};

    const getOtp = async(event) => {
        event.preventDefault();
        // const numbers =[];
        // userNumber.map((num)=>{
        //     numbers.push(num.number);
        // })
        // console.log(numbers);
        // if(numbers.includes(number)){
        //     toast.error("Number already exist");
        //     return;
        // }
        // if(number.length<11){
        //     toast.error("Enter valid number");
        // }
        // if(number.length >= 11){
            
        //    generateRecaptcha();
        //    let appVerifier = window.recaptchaVerifier;
           
        //    signInWithPhoneNumber(auth,number,appVerifier)
        //    .then(confirmationResult => {
        //     window.confirmationResult = confirmationResult;
        //     setFlag(true);
            
        //    }).catch((error) => {
        //     console.log(error);
        //     setFlag(false);
        //    }) 
        axios({
            method: 'post',
            url: 'https://medinclude-api.onrender.com/api/send-otp',
            data:{
                uniqueId:email
            },
          }).then((res) => {
            console.log(res.data);

            setFlag(true);
          }).catch((err) => {
            console.log(err);
            setFlag(false);
          })
    }

    const verifyOtp = (event) => {
        console.log("I got it");
        event.preventDefault();
    if(otp.length<6){
        toast.error("Enter valid otp");
    }
    if(otp.length === 6){
        axios({
            method: 'post',
            url: 'https://medinclude-api.onrender.com/api/verify-otp',
            data:{
                hash:hasCode,
                otp: otp,
                uniqueId: email
            },
          }).then((res) => {
            console.log(res.data);
            navigate("/password")
          }).catch((err) => {
            console.log(err);
          })
        }
    }

  return (
    <div>
        <Back/>
    <Card>
        {!flag &&
        <div>
        <div>
            
            <div className= {styles.polygon}></div>
            <hr className= {styles.line}/>
        </div>

        <div className={styles.heading}>
            
            <h2>Hi {items.firstName}! Please enter your Phone number</h2>
            <p>Used for login and recovery of your records</p>
        </div>
        <form >
  
    
        <Input 
        id = "email" 
        label= "Email" 
        type="email"
        placeholder = "iamgaurav@gmail.com" 
        value ={email}
        onChange={emailChangeHandler}    
        />
    

        <ToastContainer/>
        <div id="recaptcha-container"></div>
         <div className={styles.button}>
        <Button type = "submit" onClick={getOtp}>Request OTP</Button>
        </div>
        </form>
        </div>
        }
        {flag &&
        <div>
        <div>
            <div className= {styles.polygon}></div>
            <hr className= {styles.line}/>
        </div>
        <div className={styles.heading}>
            <h2>Hi {items.firstName}! Please enter your OTP</h2>
            <p>Used for login and recovery of your records</p>
        </div>
   
        <form >
        <Input 
        id = "otp" 
        label= "OTP" 
        type="number" 
        // isValid={emailIsValid} 
        value ={userOtp}
        onChange={otpChangeHandler}
        // onBlur={validateEmailHandler}/>
        />
        <ToastContainer/>
        <div className={styles.button}>
        <Button type="submit" onSubmit = {verifyOtp}>Confirm OTP</Button>
        </div>
        </form>
        
        </div>
}
    </Card>    
    </div>
  );
};

export default EmailVerification;