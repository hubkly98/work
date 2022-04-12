import React from "react";
//import "./style.css";
import GlobalStyle from "./globalStyles";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Home from './components/pages/HomePage/Home';
import Covid from './components/pages/Covid/Covid';
import Specialists from './components/pages/Specialists/Specjalists';
import { LoginForm } from "./auth/LoginForm";
import {SignupForm} from './auth/SignupForm';
import { Footer, Navbar } from "./components";
import Knowledge from './components/pages/Knowledge/Diseases/Diseases';
function App() {
  return (
    <BrowserRouter>
      <GlobalStyle />
      <Navbar />
      <Routes>{/*Routes is Switch */}
        <Route path='/' element={<Home />} />
        <Route path='/covid' element={<Covid />} />
        <Route path='/specjalists' element={<Specialists />} />
        <Route path='/login' element={<LoginForm />} />
        <Route path='/sign-up' element={<SignupForm />} />
        <Route path='/knowledge' element={<Knowledge/>} />
      </Routes>
      <Footer/>
    </BrowserRouter>
  );
}

export default App;
