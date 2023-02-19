import React,{useEffect,useState} from 'react'

import Back from '../components/SignUp/Back';
import styles from './NewRecord.module.css'
import Dates from '../components/Date/Date';
import Button from '../components/UI/Button';
import axios from "axios";

const NewRecord = () => {
    const[userInput, setUserInput]=useState("");

    const userInputChangeHandler = (event) =>{
      setUserInput(event.target.value);
      console.log(userInput);
    }
            

  useEffect(() =>{
    axios.get("https://ymyfish.com/api")
    .then((res) =>{
      console.log(res);
    }).catch((err)=>{
      console.log(err);
    })
    },[]);

  // const makeAPICall = async () => {
  //   try {
  //   const response = await fetch('http:ymyfish.com/api', {mode:'cors'});
  //   const data = await response.json();
  //   console.log({ data })
  //       }
  //   catch (e) {
  //   console.log(e)
  //       }
  //     }
  //     useEffect(() => {
  //       makeAPICall();
  //     }, [])
  

    const onSubmitHandler = async (event) => {
      let transcribe_data = new FormData()
      transcribe_data.append('prompt',userInput);
      try{
        let response = axios.post("https://ymyfish.com/api/transcribe",transcribe_data)
        console.log(response);
        
      }
      catch(err){
        console.log(err);
      }
      // axios.post("https://ymyfish.com/api/transcribe",
      //   userInput
      //   ).then((res) =>{
      //     console.log(res);
      // }).catch((err) => {
      //   console.log(err);
      // });
    }
    
  
  return (
    <div>
        <Back/>
       <div className= {styles.container}>
        <div>
            <h3>New Record</h3>
        </div>
            <Dates/>
        </div> 
        <textarea name='userInput' placeholder = "Enter or paste your records here" 
        value={userInput} 
        onChange={userInputChangeHandler}/>
        <div className={styles.button}>
        <Button onClick ={onSubmitHandler}>Upload</Button>
        </div>
        <textarea name ='transcribed_data' placeholder='Your transcribed record shows up here'/>
        <div className={`${styles.button} ${styles.button1}`}>
        <Button>Save</Button>
        </div>
    </div>
  )
}

export default NewRecord