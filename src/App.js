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
import AnswerFromDoctorDetails from "./components/pages/AnswerFromDoctor/AnswerFromDoctorDetails";
import { collection, query, orderBy, onSnapshot} from "firebase/firestore";
import { db } from "./firebase";
import { useAuth } from "./firebase";


function App() {
  const [choosenDoctor, setChoosenDoctor] = useState(null);
  const [wizyty, setWizyty] = useState([]);
  const currentUser = useAuth();
  
  const [mojodpowiedzi, setMojodpowiedzi] = useState([]);
  const [uzytkownicy, setUzytkownicy ] = useState([])//useEffectem pobrac wszystkich uzytkownikow
  const [doktorzy, setDoktorzy ] = useState([])



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

    

      useEffect(() => {
        const qa = query(collection(db, 'odpowiedzi'), orderBy('created', 'desc'))
        onSnapshot(qa, (querySnapshot) => {
          setMojodpowiedzi(querySnapshot.docs.map(doc => ({
            id: doc.id,
        lek: doc.data().lek,
        diagnoza: doc.data().diagnoza,
        doktor: currentUser,
      })))
    })
        
  },[])


  useEffect(() => {
    const qa = query(collection(db, 'users'))
    onSnapshot(qa, (querySnapshot) => {
      setUzytkownicy(querySnapshot.docs.map(doc => ({
     id:doc.id,
   
  })))
})
    
},[])

useEffect(() => {
  const qa = query(collection(db, 'doctors'))
  onSnapshot(qa, (querySnapshot) => {
    setDoktorzy(querySnapshot.docs.map(doc => ({
   id:doc.id,
 
})))
})
  
},[])


const wizytyFiltrowane = currentUser?.uid && wizyty.filter(item => item.doktor === currentUser.uid);


const czyJestPacjentem = currentUser?.uid && uzytkownicy.some(item => item.id === currentUser.uid);


const czyjestDoktorem = currentUser?.uid && doktorzy.some(item => item.id === currentUser.uid);


const pytaniedoLekarza = currentUser?.uid && mojodpowiedzi.filter(item => item.id === currentUser.uid);


console.log("Uzytkownicy", uzytkownicy);
console.log("Doktorzy", doktorzy);
console.log("CurrentUSerUID", currentUser?.uid);


console.log("czyJestPacjentem", czyJestPacjentem);
console.log("czyJestDoktorem", czyjestDoktorem);
  return (
    <BrowserRouter>
      <GlobalStyle />
      <Navbar czyjestDoktorem={czyjestDoktorem} czyJestPacjentem={czyJestPacjentem} />
      <Routes>
        {/*Routes is Switch */}
        <Route path='/' element={<Home choosenDoctor={choosenDoctor} setChoosenDoctor={setChoosenDoctor} />} />
        
        <Route
          path='/specialists'
          element={<Specialists choosenDoctor={choosenDoctor} setChoosenDoctor={setChoosenDoctor} />}
        />
        <Route path='/login' element={<LoginForm />} />
        <Route path='/work' element={<Home />} />
        <Route path='/sign-up' element={<SignupForm />} />
        <Route path='/knowledge' element={<Knowledge />} />
        <Route path='/:id' element={<Antykoncepcjahormonalna />} />

        <Route path='/doctor' element={<DoctorPage choosenDoctor={choosenDoctor} setChoosenDoctor={setChoosenDoctor}/>} />
        <Route path='visitPatient' element={<VisitsPatient wizyty={wizytyFiltrowane}/>} />
        <Route path='/answer/:id' element={<Answer  wizyty={wizyty} />} />

        <Route path="odpowiedzi" element={<AnswerFromDoctorDetails wizyty={wizyty} uid={currentUser && currentUser.uid} odp={mojodpowiedzi} />}  />
        
        <Route path="success" element={<Success/>} />
        
      </Routes>
      {/* <Footer /> */}
    </BrowserRouter>
  );
}
export default App;