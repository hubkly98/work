import { Pliki, InPut, Main,Text,Text2,Button } from "./SignupForm.styled";

import React, { useRef, useState } from "react";
import { Link } from "react-router-dom";

import { signup, useAuth, logout, login } from "../firebase";

export const SignupForm = () => {
  const [loading, setLoading] = useState(false);
  const currentUser = useAuth();

  const emailRef = useRef();
  const passwordRef = useRef();
  const nameRef = useRef();

  async function handleSignUp() {
    try {
      setLoading(true);
      await signup(emailRef.current.value, passwordRef.current.value,nameRef.current.value);
    } catch {
      alert("Konto już istnieje");
    }
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

  async function handleLogin() {
    setLoading(true);
    await login(emailRef.current.value, passwordRef.current.value);
  }

  return (
    <Main>
      <div>Currently logged in as: {currentUser?.email}</div>

      <Pliki>
        <Text>Rejestracja</Text>
        <InPut ref={emailRef} placeholder='Email' type="text" />
        <InPut ref={passwordRef} type='password' placeholder='Password' />
        <InPut ref={nameRef} type='text' placeholder='Name' />

        <Button value="Zarejestruj sie" disabled={loading || currentUser} onClick={handleSignUp}>Zarejestruj sie
      </Button>
        
      {/* DOKONCZ SPAN I LINK DO REJESTRACJI  */}
        <Text2>Masz już konto? <Link to='/login'>
         Zaloguj sie
       </Link></Text2>
        
      </Pliki>

     

     
      <button disabled={loading || !currentUser} onClick={handleLogOut}>
        Wyloguj
      </button>
    </Main>
  );
};
