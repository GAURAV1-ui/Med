import React,{useState} from 'react'
import axios from 'axios';
import Button from '../UI/Button';
import Card from '../UI/Card';
import Input from '../UI/Input/Input';
import { useParams, useLocation } from 'react-router-dom'
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { useUserAuth } from '../../store/UserAuthContext';
import  styles  from './ForgetPasswordForm.module.css';



const ForgetPasswordForm = () => {
    const [newPassword, setNewPassword] = useState();
    const {token} = useUserAuth();

    const changeConfirmPasswordHandler = (event) => {
        setNewPassword(event.target.value);
    }

    // const location = useLocation();
    //     console.log(location);

    const onSubmitPasswordBtnClick = async (event) => {
        event.preventDefault();
       console.log("apple");
    await axios({
        method: 'put',
        url: 'https://medinclude-api.onrender.com/api/reset-password',
        data: {
          resetPasswordLink:`${token}`,
          newPassword: newPassword,
        },
        headers: {
          'Authorization':`Bearer ${token}`
        }
      }).then((res) => {
        console.log(res);
      }).catch((err) => {
        console.log(err);
      })
    }
 
  return (
    <div>
         <div>
    <Card>
        <div>
            <div className= {styles.polygon}></div>
            <hr className= {styles.line}/>
        </div>
        <div className={styles.heading}>
            <h2>Enter your password to change your password</h2>
        </div>
        <form >
        <Input 
        id = "password" 
        type="password" 
        required
        onChange={changeConfirmPasswordHandler}
        />
        <ToastContainer/>
        <div className={styles.button}>
        <Button 
        type="submit" onClick={onSubmitPasswordBtnClick}>Confirm Password</Button>
        </div>
        </form> 
    </Card>
    </div>
    </div>
  )
}

export default ForgetPasswordForm