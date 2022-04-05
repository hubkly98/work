import { Pliki, InPut, Main,Text,Text2,Button } from "./LoginForm.styled";

import React, { useRef, useState } from "react";
import { Link } from "react-router-dom";

import { signup, useAuth, logout, login } from "../firebase";

export const LoginForm = () => {
  const [loading, setLoading] = useState(false);
  const currentUser = useAuth();

  const emailRef = useRef();
  const passwordRef = useRef();

  async function handleSignUp() {
    try {
      setLoading(true);
      await signup(emailRef.current.value, passwordRef.current.value);
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
        <Text>Login</Text>
        <InPut ref={emailRef} placeholder='Email' type="text" />
        <InPut ref={passwordRef} type='password' placeholder='Password' />
      
        <Button class="logbtn" disabled={loading || currentUser} onClick={handleLogin}>
        Zaloguj się

      </Button>
        
      {/* DOKONCZ SPAN I LINK DO REJESTRACJI  */}
        <Text2>Nie masz konta? <Link to='/'>
         Zarejestruj sie
       </Link></Text2>
        
      </Pliki>

      <button value="Zarejestruj sie" disabled={loading || currentUser} onClick={handleSignUp}>Zarejestruj sie
      </button>

     
      <button disabled={loading || !currentUser} onClick={handleLogOut}>
        Wyloguj
      </button>
    </Main>
  );
};
