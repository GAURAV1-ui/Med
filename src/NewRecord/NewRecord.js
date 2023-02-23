import React, { useEffect, useState } from 'react'
import {collection,addDoc,updateDoc} from "firebase/firestore";
import { db } from '../firebase';
import { useNavigate } from 'react-router-dom';
import Back from '../components/SignUp/Back';
import styles from './NewRecord.module.css'
import Dates from '../components/Date/Date';
import Button from '../components/UI/Button';
import data from './data';
import axios from "axios";
import { useUserAuth } from '../store/UserAuthContext';
import { toast,ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import TextContainer from '../components/TextContainer/TextContainer';
import { serverTimestamp } from "firebase/firestore"; 
// import TextContainer1 from '../components/TextContainer/TextContainer1';
const qs = require('qs')


const NewRecord = (props) => {
  const [userInput, setUserInput] = useState("");
  const [userTranscribedInput, setUserTranscribedInput] = useState("");
  const [inputDestinationLanguage, setInputDestinationLanguage] = useState(data[0].code);
  const [inputSourceLanguage, setInputSourceLanguage] = useState("en");
  const {userTranslateInput,setUserTranslateInput} = useUserAuth();

  const navigate = useNavigate();
  const usersCollectionRef = collection(db, "Users");

  const userInputChangeHandler = (event) => {
    setUserInput(event.target.value);
    console.log(userInput);
  }

  const onSubmitSourceLanguageHandler = () => {
    setInputSourceLanguage("en");
  }
  const onSubmitDestinationLanguageHandler = (event) => {
    setInputDestinationLanguage(event.target.value);
  }

  useEffect(() => {
    axios.get("https://ymyfish.com/api")
      .then((res) => {
        console.log(res);
      }).catch((err) => {
        console.log(err);
      })
  }, []);


  const onSubmitHandler = (event) => {
    event.preventDefault();

    axios({
      method: 'post',
      url: 'https://ymyfish.com/api/transcribe',
      data: qs.stringify({
        prompt: userInput,
      }),
      headers: {
        'content-type': 'application/x-www-form-urlencoded;charset=utf-8'
      }
    }).then((res) => {
      const result = res.data.result;
      setUserTranscribedInput(result);
      console.log("Transcribe Response", res);
    }).catch((err) => {
      console.log(err);
    })
  }

  const onSubmitTranscribedHandler = () => {
    if(inputDestinationLanguage.length>1){
    axios({
      method: 'post',
      url: 'https://ymyfish.com/api/translate',
      data: qs.stringify({
        text: userTranscribedInput,
        sourceLanguage: inputSourceLanguage,
        targetLanguage: inputDestinationLanguage
      }),
      headers: {
        'content-type': 'application/x-www-form-urlencoded;charset=utf-8'
      }
    }).then((res) => {
      setUserTranslateInput(res.data.translatedText);
      console.log(userTranslateInput);
      console.log("Translate Response", res.data.translatedText);
    }).catch((err) => {
      console.log(err);
    })}else{
      toast.error("Please select destintion language");
    }
  }

  const current = new Date();
  const createdAt = serverTimestamp();
  const date = current.toDateString();

  const onSubmitTranslateHandler = async (event) => {
    event.preventDefault();
    await addDoc(usersCollectionRef, { createdAt:createdAt,date: date, translatedData:userTranslateInput });
    navigate("/records");
  };

  return (
    <div>
      <Back />
      <div className={styles.container}>
        <div>
          <h3>New Record</h3>
        </div>
        <Dates />
      </div>
      <textarea
        name='userInput'
        placeholder="Enter or paste your records here"
        value={userInput}
        onChange={userInputChangeHandler}
      />
      <div className={styles.button}>
        <Button onClick={onSubmitHandler}>Upload</Button>
      </div>
      <div className={styles.selectOption}>
        <div className={styles.select}>
          <p htmlFor="sourcelanguage">Source Language:</p>
          <select
            name="sourcelanguage"
            id="sourcelanguage"
            value={inputSourceLanguage}
            onChange={onSubmitSourceLanguageHandler}>
              <option value={inputSourceLanguage}>English</option>

          </select>
        </div>
        <div className = {styles.select}>
          <p htmlFor="destinationlanguage">Destination Language:</p>
          <select
            name="destinationlanguage"
            id="sourcelanguage"
            value={inputDestinationLanguage}
            onChange={onSubmitDestinationLanguageHandler}>
            {data.map((data) => (
              <option value={data.code}>{data.language}</option>
            ))}
          </select>
        </div>
      </div>
      <textarea
        name='transcribed_data'
        placeholder='Your transcribed record shows up here'
        value={userTranscribedInput}
      />
      <div className={`${styles.button} ${styles.button1}`}>
        <Button onClick={onSubmitTranscribedHandler}>Translate</Button>
      </div>
      <ToastContainer/>
      {userTranslateInput.length>1 &&
      <div>
      <TextContainer/>
      <div className={`${styles.button} ${styles.button1}`}>
        <Button onClick={onSubmitTranslateHandler}>Save</Button>
      </div>
      </div>
}
    </div>
  )
}

export default NewRecord;