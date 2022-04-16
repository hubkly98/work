import React from "react";
import GlobalStyle from "./globalStyles";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Home from "./components/pages/HomePage/Home";
import Covid from "./components/pages/Covid/Covid";
import { LoginForm } from "./auth/LoginForm";
import { SignupForm } from "./auth/SignupForm";
import {  Navbar } from "./components";
import Knowledge from "./components/pages/Knowledge/Diseases/Knowledge";
import Antykoncepcjahormonalna from "./components/pages/Knowledge/Diseases/Section/SectionPage/SectionPage";
import Specialists from "./components/pages/Specialists/Specialists";
import VisitsPatient from "./components/pages/VisitPatient/VisitsPatience";
import Answer from "./components/pages/VisitPatient/Answer/Answer";
import Success from "./components/pages/VisitPatient/Answer/Success";
import DoctorPage from "./components/pages/Doctor/DoctorPage";

function App() {
  const [choosenDoctor, setChoosenDoctor] = React.useState(null);
  return (
    <BrowserRouter>
      <GlobalStyle />
      <Navbar />
      <Routes>
        {/*Routes is Switch */}
        <Route path='/' element={<Home choosenDoctor={choosenDoctor} setChoosenDoctor={setChoosenDoctor} />} />
        <Route path='/covid' element={<Covid />} />
        <Route
          path='/specialists'
          element={<Specialists choosenDoctor={choosenDoctor} setChoosenDoctor={setChoosenDoctor} />}
        />
        <Route path='/login' element={<LoginForm />} />
        <Route path='/sign-up' element={<SignupForm />} />
        <Route path='/knowledge' element={<Knowledge />} />
        <Route path='/:id' element={<Antykoncepcjahormonalna />} />

        <Route path='/doctor' element={<DoctorPage choosenDoctor={choosenDoctor} setChoosenDoctor={setChoosenDoctor}/>} />
        <Route path='visitPatient' element={<VisitsPatient/>} />
        <Route path='/answer/:id' element={<Answer/>} />
        <Route path="success" element={<Success/>} />
      </Routes>
      {/* <Footer /> */}
    </BrowserRouter>
  );
}

export default App;