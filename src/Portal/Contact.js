import React, {useState} from 'react';
import styles from './Contact.module.css';
import med from '../Images/2.jpg';
import Button from '../components/UI/Button';

const Contact = () => {
    const [name, setName] = useState("");

    const onChangeHandler = (event) => {
        setName(event.target.value);
    }
  return (

    <div className={styles.about_background}>
      <div className={styles.about_container}>
        <div className={styles.float_container}>

        <div className={`${styles.float_child} ${styles.left}`}>
            <img className={styles.about_img} src={med} alt="" />
        </div>
          <div className={`${styles.float_child} ${styles.right}`}>
            <div>
            <h1>              
              Request a Demo
            </h1>
            <br/>
            <div>
            <div className={styles.contact}>
            <div className={styles.firstName}>
            <label>First Name</label>  
            <input 
            type="text"
            id="text"
            value={name}
            onChange={onChangeHandler}/> 
            </div>
            <div className={styles.firstName}>
            <label>Last Name</label>  
            <input 
            type="text"
            id="text"
            value={name}
            onChange={onChangeHandler}/> 
            </div>
            </div>
            <div className={styles.lastName}>
            <label>Email *</label>  
            <input 
            type="email"
            id="email"
            value={name}
            onChange={onChangeHandler}/> 
            </div>
            <div className={styles.message}>
            <label >Add message here</label>
            <textarea
              name='userInput'
              value=""
              onChange=""
              />
              </div>
              <div className={styles.contactButton}>
              <Button>Submit</Button>
              </div>
            </div>
            </div>
          </div>
        </div>
        
      </div>
      
</div>
  )
}

export default Contact;