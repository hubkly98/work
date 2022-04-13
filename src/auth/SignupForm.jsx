import { Pliki, InPut, Main, Text, Text2, Button } from "./SignupForm.styled";
import { getAuth, updateProfile } from "firebase/auth";
import { collection, getDocs, addDoc } from "firebase/firestore";
import { db } from "../firebase";
import { doc } from "firebase/firestore";
import { setDoc } from "firebase/firestore";

import React, { useRef, useState } from "react";
import { Link } from "react-router-dom";

import { signup, useAuth, logout, login } from "../firebase";

export const SignupForm = () => {
  const [loading, setLoading] = useState(false);
  const currentUser = useAuth();

  const emailRef = useRef();
  const passwordRef = useRef();
  const nameRef = useRef();
  const doktorRef = useRef();


  const userCollectionRef = collection(db, "users");

  async function handleSignUp() {
    // try {
      setLoading(true);
      await signup(
        emailRef.current.value,
        passwordRef.current.value,
        nameRef.current.value,
        doktorRef.current.checked

      );
      const auth = getAuth();
      const user = auth.currentUser;

      await updateProfile(user, {
        // displayName: "Jane Q. User",
        displayName: nameRef.current.value,

      });

      const { uid, displayName, email } = user;
      
      console.log(uid, email, displayName);

       console.log(doktorRef.current.checked); 
      // await addDoc(userCollectionRef, {
      //   displayName,
      //   email,
      //   uid,
      //   isDoctor: true,
      // }); //tworzenie kolekcji userów
      if(!doktorRef.current.checked ){
      await setDoc(doc(db,"users",uid), {
        displayName,
        email,
        uid,
        // isDoctor: true,
        }); //tworzenie kolekcji userów
      }
      else{
        await setDoc(doc(db,"doctors",uid), {
          displayName,
          email,
          uid,
          // isDoctor: true,
          }); //tworzenie kolekcji userów
      }
      console.log("Display Name",displayName);
      // const currentUserRef = collection(db, "users").doc(currentUser.uid).collection("Presciption");

      // await addDoc(currentUserRef,{displayName,email,uid,isDoctor:true});

    // } catch {
    //   alert("Konto już istnieje");
    // }
    setLoading(false);
  }

  async function handleLogOut() {
    setLoading(true);
    try {
      await logout();
    } catch {
      alert("Nie udało się wylogować");
    }
    setLoading(false);
  }
    

  //FUNKCJA DO PODSUMOWANIA FORMULARZA 

  async function handleSubmit() {
    const wizytaRef = doc(db, "wizyta");
    setDoc(wizytaRef, {
      medicin: "apap", // to bedzie z Inputa w Formularzu APAP XD
      currentUser: "DANY PACJENT ID",// wyciagam z zalogowanego usera
      dawkowanie: "2", 
    });
  
    const WizytazPacjetemRef = doc(db, "users", "IDLEKARZA", "wizyta", "123");
    setDoc(WizytazPacjetemRef, {
      medicin: "apap", // to bedzie z Inputa w Formularzu APAP XD
      currentUser: "DANY PACJENT ID",// wyciagam z zalogowanego usera
      dawkowanie: "2", 
      
    });


  }


  return (
    <Main>
      <div>Currently logged in as: {currentUser?.email}</div>

      <Pliki>
        <Text>Rejestracja</Text>
        <InPut ref={emailRef} placeholder='Email' type='text' />
        <InPut ref={passwordRef} type='password' placeholder='Password' />
        <InPut ref={nameRef} type='text' placeholder='Name' />

        <Button
          value='Zarejestruj sie'
          disabled={loading || currentUser}
          onClick={handleSignUp}
        >
          Zarejestruj sie
        </Button>

        <div>

         <input ref={doktorRef} type="checkbox" id="doctor" name="doctor"  />
       <label for="doctor">Czy jestes lekarzem? </label>
        </div>


        {/* DOKONCZ SPAN I LINK DO REJESTRACJI  */}
        <Text2>
          Masz już konto? <Link to='/login'>Zaloguj sie</Link>
        </Text2>
      </Pliki>

      <button disabled={loading || !currentUser} onClick={handleLogOut}>
        Wyloguj
      </button>
    </Main>
  );
};
