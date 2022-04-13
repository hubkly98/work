import React, { useRef } from "react";
import { TextField } from "./TextField";
import { useAuth } from "../../../firebase";
import { setDoc } from "firebase/firestore";
import { db } from "../../../firebase";
import { doc, addDoc } from "firebase/firestore";

import { collection, query, where, getDocs } from "firebase/firestore";

import { InPut } from "../../../auth/SignupForm.styled";

export const SendForm = ({ choosenDoctor, setChoosenDoctor }) => {
  //FIREBASE
  const currentUser = useAuth();

  const objawyRef = useRef();
  const jakiLekRef = useRef();
  const kiedyLekRef = useRef();
  const przebytaChorobaRef = useRef();

  const doctor = (() => {
    if (choosenDoctor == 1) {
      return "OcptvUGLIDZd3oxhz8AK7aYGfap1";
    }
    if (choosenDoctor == 2) {
      return "tALWnMCm2vVP5NbB8eZcmaklKuj1";
    }
    if (choosenDoctor == 3) {
      return "OcptvUGLIDZd3oxhz8AK7aYGfap1";
    }
    return "OcptvUGLIDZd3oxhz8AK7aYGfap1"; // default jeżeli nie wybierze się lekarza z listy
  })();

  //TIPY OD DOCTORA NAUK
  //turbo myk () ... () imedidid execution odrazu sie wykonuje xD nie musze getDoctor() tylko getDoctor
  // z duzej komponenty

  console.log(doctor);

  const handleForm = async (e) => {
    e.preventDefault();
    try {
      await addDoc(collection(db, "wizyty"), {
        pacjent: currentUser.uid,
        doktor: doctor,
        objawy: objawyRef.current.value,
        jakiLek: jakiLekRef.current.value,
        kiedyLek: kiedyLekRef.current.value,
        przebytaChoroba: przebytaChorobaRef.current.value,
      });
    } catch (err) {
      console.log(err);
    }
  };

  //  console.log(choosenDoctor);

  //BODY PAGE

  return (
    <div>
      <h1 className='my-4 font-weight-bold-display-4'>Formularz</h1>
      {/* {console.log(formik.values)} */}
      <form  onSubmit={(e)=>handleForm(e)}>
        <input ref={objawyRef} label='Objawy' name='objawy' type='text' />
        <InPut
          ref={jakiLekRef}
          label='Jaki potrzebujesz lek / Nie wiem'
          name='jakiLek'
          type='text'
        />
        <InPut
          ref={kiedyLekRef}
          label='Kiedy brałeś leki i jakie'
          name='kiedyLek'
          type='text'
        />
        <InPut
          ref={przebytaChorobaRef}
          label='Przebyte choroby'
          name='przebytaChoroba'
          type='text'
        />
        <button type="submit" onClick={handleForm} className='btn btn-dark mt-3'>
          Wyslij
        </button>
      </form>
    </div>
  );
};
