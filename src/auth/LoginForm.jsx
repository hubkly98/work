import { Pliki, InPut, Main } from "./LoginForm.styled";

import React, { useRef, useState } from "react";
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
        <InPut ref={emailRef} placeholder='Email' />
        <InPut ref={passwordRef} type='password' placeholder='Password' />
      </Pliki>
      <button disabled={loading || currentUser} onClick={handleSignUp}>
        Zarejestruj się
      </button>
      <button disabled={loading || currentUser} onClick={handleLogin}>
        Zaloguj się
      </button>
      <button disabled={loading || !currentUser} onClick={handleLogOut}>
        Wyloguj
      </button>
    </Main>
  );
};
