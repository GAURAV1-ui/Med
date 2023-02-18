import React from 'react'
import TextContainer from '../components/TextContainer/TextContainer'
import styles from './Records.module.css'
import Navbar from '../components/Menu/Navbar'

import { useUserAuth } from "../store/UserAuthContext";

const Records = () => {
  const {isLoggedIn} = useUserAuth();
  return (
    <>
        <Navbar/>
        <div className={styles.record}>
            <h1>Record</h1>
        </div>
        {isLoggedIn&&<TextContainer/>}
        
    </>
  
  )
}

export default Records