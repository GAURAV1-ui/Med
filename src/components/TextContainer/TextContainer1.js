import React,{useEffect,useState} from 'react';
import Card1 from '../UI/Card1';
import Date from '../Date/Date';
import {db} from '../../firebase';
import {collection,getDocs} from 'firebase/firestore'
import classes from './TextContainer1.module.css'
const TextContainer1 = () => {
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

      const latest = users[users.length-1];
      console.log(users);
  return (
    <>
          <Card1>
            <div className={classes.container}>
              <div>
                <h3>Test Result</h3>
              </div>
            {/* {users.day} */}
          </div>
          <br/>
          <section>
              {/* <p>{users[0].translatedData}</p> */}
          </section>
          </Card1>
        </>

  )
}

export default TextContainer1;