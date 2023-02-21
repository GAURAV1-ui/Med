import React,{useEffect,useState} from 'react';
import Card1 from '../UI/Card1';
import Date from '../Date/Date';
import {db} from '../../firebase';
import {collection,getDocs} from 'firebase/firestore'
import classes from './TextContainer2.module.css'
const TextContainer2 = () => {
    const [users, setUsers] = useState([]);
    const usersCollectionRef = collection(db, "Users");
    useEffect(() => {
        const getUsers = async () => {
          const data = await getDocs(usersCollectionRef);
          setUsers(data.docs.map((doc) => ({ ...doc.data(), id: doc.id })));
          console.log(users[0]);
        };
    
        getUsers();
      }, []);


  return (
    <>

        {users.map((data) => {
          return(
          <Card1>
            <div className={classes.container}>
              <div>
                <h3>Test Result</h3>
              </div>
            {data.day}
          </div>
          <br/>
          <section>
              <p>{data.translatedData}</p>
          </section>
          </Card1>
          )}
          )}
        </>

  )
}

export default TextContainer2;