import { Pliki, InPut, Main, Text, Text2, Button } from "./LoginForm.styled";

import React, { useRef, useState } from "react";
import { Link } from "react-router-dom";

import { signup, useAuth, logout, login } from "../firebase";

export const LoginForm = () => {
  const [loading, setLoading] = useState(false);
  const currentUser = useAuth();

  const emailRef = useRef();
  const passwordRef = useRef();

  // async function handleSignUp() {
  //   try {
  //     setLoading(true);
  //     await signup(emailRef.current.value, passwordRef.current.value);
  //   } catch {
  //     alert("Konto już istnieje");
  //   }
  //   setLoading(false);
  // }

  // async function handleLogOut() {
  //   setLoading(true);
  //   try {
  //     await logout();
  //   } catch {
  //     alert("Nie udało się wylogować");
  //   }
  //   setLoading(false);
  // }

  async function handleLogin() {
    setLoading(true);
    try{

      await login(emailRef.current.value, passwordRef.current.value);
    }catch{
      alert("błedne podanie hasła lub adresu emaila");
    }
  }

  return (
    <Main>
      <div>Currently logged in as: {currentUser?.email}</div>
      <div>Currently logged in as: {currentUser?.displayName}</div>

      <Pliki>
        <Text>Login</Text>
        <InPut ref={emailRef} placeholder='Email' type='text' />
        <InPut ref={passwordRef} type='password' placeholder='Password' />

        <Button
          class='logbtn'
          disabled={loading || currentUser}
          onClick={handleLogin}
        >
          Zaloguj się
        </Button>
        <Text2>
          Nie masz konta? <Link to='/sign-up'>Zarejestruj sie</Link>
        </Text2>
      </Pliki>
    </Main>
  );
};
