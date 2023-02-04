import React from 'react'

import Back from '../components/SignUp/Back';
import styles from './NewRecord.module.css'
import Dates from '../components/Date/Date';
import Button from '../components/UI/Button';

const NewRecord = () => {

    
  return (
    <div>
        <Back/>
       <div className= {styles.container}>
        <div>
            <h3>New Record</h3>
        </div>
            <Dates/>
        </div> 
        <textarea name='userInput' placeholder = "Enter or paste your records here"/>
        <div className={styles.button}>
        <Button>Upload</Button>
        </div>
        <textarea name ='transcribed_data' placeholder='Your transcribed record shows up here'/>
        <div className={`${styles.button} ${styles.button1}`}>
        <Button>Save</Button>
        </div>
    </div>
  )
}

export default NewRecord