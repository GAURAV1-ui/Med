import React,{useState} from 'react'
import { useNavigate } from 'react-router-dom';
import Button from '../UI/Button';
import Card from '../UI/Card';
import Input from '../UI/Input/Input';
import Back from './Back';
import styles from './Password.module.css';
import { createUserWithEmailAndPassword, updateProfile } from "firebase/auth";
import { auth } from "../../firebase";

const Password = (props) => {
  const navigate = useNavigate();
  const [values, setValues] = useState({
    email: "",
    pass: "",
  });
  const [errorMsg, setErrorMsg] = useState("");

  const handleSubmission = (event) => {
    event.preventDefault();
    console.log(values)
    if (!values.email || !values.pass) {
      setErrorMsg("Fill all fields");
      return;
    }
    setErrorMsg("");

    // setSubmitButtonDisabled(true);
    createUserWithEmailAndPassword(auth, values.email, values.pass)
      .then(async (res) => {
        // setSubmitButtonDisabled(false);
        const user = res.user;
        console.log(user);

        navigate("/");
      })
      .catch((err) => {
        // setSubmitButtonDisabled(false);
        setErrorMsg(err.message);
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
            <h2>Create an E-mail and password for your account</h2>
        </div>
        <form onSubmit={handleSubmission}>
        <Input 
        id = "email" 
        label= "Email" 
        type="email" 
        // isValid={emailIsValid} 
        onChange={(event) =>
          setValues((prev) => ({ ...prev, email: event.target.value }))
        }
        // onBlur={validateEmailHandler}/>
        />
        <Input 
        id = "password" 
        label= "Password" 
        type="password" 
        // isValid={emailIsValid} 
        onChange={(event) =>
          setValues((prev) => ({ ...prev, pass: event.target.value }))
        }
        // onBlur={validateEmailHandler}/>
        />
        {errorMsg}
         <div className={styles.instruction}>
        <p>Your password must contains:</p>
        <div className={styles.instruction_details}>
        <p>Minimum of 8 characters</p>
        <p>At least one number</p>
        <p>At least one uppercase letter</p>
        <p>At least one lowercase letter</p>
        </div>
        </div>
        <div className={styles.button}>
        <Button type="submit">Continue</Button>
        </div>
        </form>
       
        
    </Card>
    </div>
  );
};

export default Password;