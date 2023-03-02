import { createContext, useContext, useEffect, useState } from "react";
import {onAuthStateChanged} from "firebase/auth";
import { auth } from "../firebase";

const userAuthContext = createContext();

export function UserAuthContextProvider({ children }) {
  const [currentUser, setCurrentUser] = useState(null);
  const[userTranslateInput,setUserTranslateInput] = useState("");
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");


  useEffect(() => {
    onAuthStateChanged(auth, (user) => {
      if (user) {
        setCurrentUser(user);
      } else {
        setCurrentUser(null);
      }
    });
  }, [currentUser]);




  return (
    <userAuthContext.Provider
      value={{ currentUser,userTranslateInput,setUserTranslateInput, firstName,setFirstName,lastName,setLastName,buttonIsShow, setButtonIsShown, showButtonHandler, hideButtonHandler}}
    >
      {children}
    </userAuthContext.Provider>
  );
}

export function useUserAuth() {
  return useContext(userAuthContext);
}