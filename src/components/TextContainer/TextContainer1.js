import React,{useEffect,useState} from 'react';
import Card1 from '../UI/Card1';
import Date from '../Date/Date';
import {db} from '../../firebase';
import {collection,getDocs} from 'firebase/firestore'
import classes from './TextContainer1.module.css'
const TextContainer1 = () => {
    const [users, setUsers] = useState([]);
    const usersCollectionRef = collection(db, "users");
    useEffect(() => {
        const getUsers = async () => {
          const data = await getDocs(usersCollectionRef);
          setUsers(data.docs.map((doc) => ({ ...doc.data(), id: doc.id })));
        };
    
        getUsers();
      }, []);


  return (
    <Card1>
        <div className= {classes.container}>
        <div>
            <h3>Test Result</h3>
        </div>
        <Date/>
        </div> 
        <br/>
        <section>
           {/* {users.length>0 ? ( */}
           { users.map((data) => 
                <p>{data.translateData}</p>)}

        </section> 
    </Card1>
  )
}

export default TextContainer1;