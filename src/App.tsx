import React from "react";
//import "./style.css";
import GlobalStyle from "./globalStyles";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Home from './components/pages/HomePage/Home';
import Covid from './components/pages/Covid/Covid';
import { LoginForm } from "./auth/LoginForm";
import {SignupForm} from './auth/SignupForm';
import { Footer, Navbar } from "./components";
import Knowledge from './components/pages/Knowledge/Diseases/Knowledge';
import Antykoncepcjahormonalna from "./components/pages/Knowledge/Diseases/Section/Antykoncepcjahormonalna/Antykoncepcjahormonalna";
import Specialists from "./components/pages/Specialists/Specialists";
function App() {
  return (
    <BrowserRouter>
      <GlobalStyle />
      <Navbar />
      <Routes>{/*Routes is Switch */}
        <Route path='/' element={<Home />} />
        <Route path='/covid' element={<Covid />} />
        <Route path='/specialists' element={<Specialists />} />
        <Route path='/login' element={<LoginForm />} />
        <Route path='/sign-up' element={<SignupForm />} />
        <Route path='/knowledge' element={<Knowledge/>} />
        
        <Route path='/hormonalna' element={<Antykoncepcjahormonalna/>} />

      </Routes>
      <Footer/>
    </BrowserRouter>
  );
}

export default App;
