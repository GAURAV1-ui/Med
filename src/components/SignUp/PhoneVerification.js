import React,{useState,useEffect} from 'react'
import { useNavigate } from 'react-router-dom';
import Button from '../UI/Button';
import Card from '../UI/Card';
import Input from '../UI/Input/Input';
import Back from './Back';
import { db } from '../../firebase';
import styles from './PhoneVerification.module.css';
import {auth} from '../../firebase'
import { onAuthStateChanged } from 'firebase/auth';
import {collection,addDoc, getDocs} from "firebase/firestore";
import { RecaptchaVerifier,signInWithPhoneNumber } from 'firebase/auth';
import { toast,ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import PhoneInput from 'react-phone-number-input'
import 'react-phone-number-input/style.css'



const EmailVerification = (props) => {    
    const[user,setUser] = useState();
    const[userNumber,setUserNumber] = useState();
    const [number, setNumber] = useState("");
    // const [numbers, setNumbers] = useState([]);
    const [otp, setOtp] = useState('');
    const [flag, setFlag] = useState(false);

    const usersCollectionRef = collection(db, "PhoneData");
    const items = JSON.parse(localStorage.getItem('User'));
    // console.log(items);
    const navigate = useNavigate();

    useEffect(() => {
        const unsubscribe = onAuthStateChanged(auth, (currentuser) => {
          console.log("Auth", currentuser);
          setUser(currentuser);
        });
    
        return () => {
          unsubscribe();
        };
      }, []);

      

      useEffect(() => {
        const getNumber = async () => {
          const data = await getDocs(usersCollectionRef);
          setUserNumber(data.docs.map((doc) => ({ ...doc.data(), id: doc.id })));
        };
        getNumber();
       
      }, []);
    

    const otpChangeHandler = (e) => {
        setOtp(e.target.value);
    }   

    const generateRecaptcha = () => {
        window.recaptchaVerifier = new RecaptchaVerifier('recaptcha-container', {
             'size': 'invisible',
             'callback': (response) => {
             }
        }, auth);
    }
    // const validCheck =()=> {userNumber.filter((num) =>{
    //     console.log(num.number);
    //     console.log(number);
    //     console.log(num.number.includes(number.toString()) );
    //     return num.number.includes(number.toString());
    // })};

    const getOtp = async(event) => {
        event.preventDefault();
        const numbers =[];
        userNumber.map((num)=>{
            numbers.push(num.number);
        })
        console.log(numbers);
        if(numbers.includes(number)){
            toast.error("Number already exist");
            return;
        }
        if(number.length<11){
            toast.error("Enter valid number");
        }
        if(number.length >= 11){
            
           generateRecaptcha();
           let appVerifier = window.recaptchaVerifier;
           
           signInWithPhoneNumber(auth,number,appVerifier)
           .then(confirmationResult => {
            window.confirmationResult = confirmationResult;
            setFlag(true);
            
           }).catch((error) => {
            console.log(error);
            setFlag(false);
           }) 
        }
    }

    const verifyOtp = (event) => {
        event.preventDefault();
    if(otp.length<6){
        toast.error("Enter valid otp");
    }
    if(otp.length === 6){
    const code = otp;
    window.confirmationResult.confirm(code).then((result) => {
    const user = result.user;
    console.log(user.phoneNumber);
    toast.success("Success");
    addDoc(usersCollectionRef, { number: number,firstName: items.firstName, lastName:items.lastName });   
    navigate("/password", {state: user.phoneNumber });
}).catch((error) => {
    console.log(error.msg);
    toast.error("Invalid otp"); 
});

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
  
    
        {/* <Input 
        id = "number" 
        label= "Phone Number" 
        type="tel"
        placeholder = "9693098513" 
        value ={number}
        onChange={numberChangeHandler}    
        /> */}
        <PhoneInput
        className={styles.phoneInput}
        international
        countryCallingCodeEditable={false}
        defaultCountry="US"
         placeholder="Enter phone number"
         value={number}
         onChange={setNumber}
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
        value ={otp}
        onChange={otpChangeHandler}
        // onBlur={validateEmailHandler}/>
        />
        <ToastContainer/>
        <div className={styles.button}>
        <Button type="submit" onClick ={verifyOtp}>Confirm OTP</Button>
        </div>
        </form>
        
        </div>
}
    </Card>    
    </div>
  );
};

export default EmailVerification;