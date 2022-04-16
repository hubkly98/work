import React, {useState, useEffect} from "react";
import GlobalStyle from "./globalStyles";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Home from "./components/pages/HomePage/Home";
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
// import AnswerFromDoctor from "./components/pages/AnswerFromDoctor/AnswerFromDoctor";
import AnswerFromDoctor from "./components/pages/AnswerFromDoctor/AnswerFromDoctor";
import { collection, query, orderBy, onSnapshot} from "firebase/firestore";
import { db } from "./firebase";
import { useAuth } from "./firebase";


function App() {
  const [choosenDoctor, setChoosenDoctor] = useState(null);
  const [wizyty, setWizyty] = useState([]);
  const currentUser = useAuth();

  useEffect(() => {
    const q = query(collection(db, "wizyty"), orderBy("created", "desc"));
    onSnapshot(q, (querySnapshot) => {
      setWizyty(
        querySnapshot.docs.map((doc) => ({
          id: doc.id,
          pacjent: doc.data().pacjent,
          doktor: doc.data().doktor,
          jakiLek: doc.data().jakiLek.toString(),
          kiedyLek: doc.data().kiedyLek.toString(),
          przebytaChoroba: doc.data().przebytaChoroba.toString(),
          objawy: doc.data().objawy.toString(),
          created: doc.data().created.toString(),
        }))
      );
    });
  }, [])

  
  console.log(wizyty);

  return (
    <BrowserRouter>
      <GlobalStyle />
      <Navbar />
      <Routes>
        {/*Routes is Switch */}
        <Route path='/' element={<Home choosenDoctor={choosenDoctor} setChoosenDoctor={setChoosenDoctor} />} />
        
        <Route
          path='/specialists'
          element={<Specialists choosenDoctor={choosenDoctor} setChoosenDoctor={setChoosenDoctor} />}
        />
        <Route path='/login' element={<LoginForm />} />
        <Route path='/sign-up' element={<SignupForm />} />
        <Route path='/knowledge' element={<Knowledge />} />
        <Route path='/:id' element={<Antykoncepcjahormonalna />} />

        <Route path='/doctor' element={<DoctorPage choosenDoctor={choosenDoctor} setChoosenDoctor={setChoosenDoctor}/>} />
        <Route path='visitPatient' element={<VisitsPatient wizyty={wizyty}/>} />
        <Route path='/answer/:id' element={<Answer />} />
        <Route path="success" element={<Success/>} />

        <Route path="odpowiedzi" element={<AnswerFromDoctor wizyty={wizyty} uid={currentUser && currentUser.uid}/>}  />
        
        
      </Routes>
      {/* <Footer /> */}
    </BrowserRouter>
  );
}
export default App;