import React,{useState} from 'react'
import {  useNavigate, useParams } from 'react-router-dom';
import Button from '../UI/Button';
import Card from '../UI/Card';
import Input from '../UI/Input/Input';
import { useLocation } from 'react-router-dom';
import Back from './Back';
import styles from './Password.module.css';
import { baseUrl } from '../../api/axios';
import axios from 'axios';
import { useUserAuth } from '../../store/UserAuthContext';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const ForgetPassword = () => {
  const Navigate = useNavigate();
  const {token} = useUserAuth();
  const [forgetEmail, setForgetEmail] = useState("");

  const location = useLocation();
  console.log(location);
  const changeForgetPasswordHandler = (event) => {

    setForgetEmail(event.target.value);
  }
  const onSubmitBtnClick = async (event) => {
    event.preventDefault();
    axios({
      method: 'put',
      url: 'https://medinclude-api.onrender.com/api/forgot-password',
      data: {
        uniqueId:forgetEmail
      },
      headers: {
        'Authorization':`Bearer ${token}`
      }
    }).then((res) => {
      console.log(res);
    }).catch((err) => {
      console.log(err);
    })
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
            <h2>Enter your email to change your password</h2>
        </div>
        <form >
        <Input 
        id = "email" 
        type="email" 
        required
        onChange={changeForgetPasswordHandler}
        />
        <ToastContainer/>
         <div className={styles.instruction}>
        <p>Check your email for verification link</p>
        </div>
        <div className={styles.button}>
        <Button 
        type="submit" onClick={onSubmitBtnClick}>Confirm Password</Button>
        </div>
        </form> 
    </Card>
    </div>
  )
}

export default ForgetPassword;