import { createContext, useContext, useEffect, useState } from "react";
import {
  onAuthStateChanged,

} from "firebase/auth";
import { auth } from "../firebase";

const userAuthContext = createContext();

export function UserAuthContextProvider({ children }) {
  const [currentUser, setCurrentUser] = useState(null);
  // const [isLoggedIn, setIsLoggedIn] = useState(false);
  const[userTranslateInput,setUserTranslateInput] = useState("");
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");


  // function logIn(email, password) {
  //   setIsLoggedIn(true);
  //   return signInWithEmailAndPassword(auth, email, password);
  // }
  // function signUp(email, password) {
  //   return createUserWithEmailAndPassword(auth, email, password);
  // }
  // function logOut() {
  //   setIsLoggedIn(false);
  //   return signOut(auth);
  // }


  useEffect(() => {
    onAuthStateChanged(auth, (user) => {
      if (user) {
        setCurrentUser(user);
      } else {
        setCurrentUser(null);
      }
    });
    // console.log(currentUser);
  }, [currentUser]);

  return (
    <userAuthContext.Provider
      value={{ currentUser,userTranslateInput,setUserTranslateInput, firstName,setFirstName,lastName,setLastName }}
    >
      {children}
    </userAuthContext.Provider>
  );
}

export function useUserAuth() {
  return useContext(userAuthContext);
}