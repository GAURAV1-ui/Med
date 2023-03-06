import React,{useState} from 'react'
import { useNavigate } from 'react-router-dom';
import Button from '../UI/Button';
import Card from '../UI/Card';
import Input from '../UI/Input/Input';
import Back from './Back';
import styles from './Password.module.css';
import { baseUrl } from '../../api/axios';
import axios from 'axios';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const ForgetPassword = () => {
  const [email, setEmail] = useState("");


  const changeForgetPasswordHandler = (event) => {
    setEmail(event.target.value);
  }
  const onSubmitBtnClick = async () => {
    await axios
      .post(`${baseUrl}/`, { email: email })
      .then(res => {
        console.log(res);
      })
      .catch(err => {
        console.log(err);
      });
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
        <form onSubmit={onSubmitBtnClick}>
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
        type="submit">Confirm Password</Button>
        </div>
        </form> 
    </Card>
    </div>
  )
}

export default ForgetPassword;