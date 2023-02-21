import React, { useEffect, useState } from 'react'
import { useNavigate } from 'react-router-dom';
import Back from '../components/SignUp/Back';
import styles from './NewRecord.module.css'
import Dates from '../components/Date/Date';
import Button from '../components/UI/Button';
import data from './data';
import axios from "axios";
import { useUserAuth } from '../store/UserAuthContext';
import TextContainer from '../components/TextContainer/TextContainer';
const qs = require('qs')

const NewRecord = (props) => {
  const [userInput, setUserInput] = useState("");
  const [userTranscribedInput, setUserTranscribedInput] = useState("");
  const [inputDestinationLanguage, setInputDestinationLanguage] = useState();
  const [inputSourceLanguage, setInputSourceLanguage] = useState("en");
  const {userTranslateInput,setUserTranslateInput} = useUserAuth();

  const navigate = useNavigate();

  const userInputChangeHandler = (event) => {
    setUserInput(event.target.value);
    console.log(userInput);
  }

  const onSubmitSourceLanguageHandler = (event) => {
    setInputSourceLanguage(event.target.value);
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
      // const result = res;
      setUserTranslateInput(res.data.translatedText);
      console.log(userTranslateInput);
      console.log("Translate Response", res.data.translatedText);
    }).catch((err) => {
      console.log(err);
    })
  }

  const current = new Date();
  const day = current.toDateString();

  const onSubmitTranslateHandler = async (event) => {
    event.preventDefault();
    const res = fetch ("https://medinclude-8a7fa-default-rtdb.firebaseio.com/usertranslateData.json",
    {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body:JSON.stringify({
        date:day,
        translated_data: userTranslateInput,
      })
    }
    );
    if(res) {
      alert(res);
      console.log(res);
    } else {
      alert("Pldkljs");
    }
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
        <div>
          <label htmlFor="sourcelanguage">Source Language</label>
          <select
            name="sourcelanguage"
            id="sourcelanguage"
            value={inputSourceLanguage}
            onChange={onSubmitSourceLanguageHandler}>
            {data.map((data) => (
              <option value={data.code}>{data.language}</option>
            ))}
          </select>
        </div>
        <div>
          <label htmlFor="destinationlanguage">Destination Language</label>
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