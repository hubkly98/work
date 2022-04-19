import React, { useRef, useEffect } from "react";
import { useAuth } from "../../../firebase";
import { db } from "../../../firebase";
import { collection, Timestamp, addDoc } from "firebase/firestore";
import styled from "styled-components";
import { query, orderBy, onSnapshot } from "firebase/firestore";
import { Button } from "../../../globalStyles";
import { Form } from "../VisitPatient/Answer/Answer";
import { useNavigate } from "react-router-dom";
// import { TextField } from "./TextField";
// import { Text } from "../../../auth/SignupForm.styled";

export const SendForm = ({ choosenDoctor, setChoosenDoctor }) => {
  //FIREBASE
  const currentUser = useAuth();

  const objawyRef = useRef();
  const jakiLekRef = useRef();
  const kiedyLekRef = useRef();
  const przebytaChorobaRef = useRef();

  const navigate = useNavigate();

  const doctor = (() => {
    if (choosenDoctor == 1) {
      return "UzcmcZwM9QOlImAIsOYfpJxG4h03";
    }
    if (choosenDoctor == 2) {
      return "V2v8JM8zQTNptFAgHO2zH0KEzmz2";
    }
    if (choosenDoctor == 3) {
      return "Wf9kv24LF4NFcpIi60j6muEE0LJ2";
    }
    return "UzcmcZwM9QOlImAIsOYfpJxG4h03"; // default jeżeli nie wybierze się lekarza z listy
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
        created: Timestamp.now(),
      });
      navigate("../success", { replace: true });
    } catch (err) {
      console.log(err);
    }
  };

  //  console.log(choosenDoctor);

  //BODY PAGE

  return (
    <Form>
      <h1>Formularz</h1>
      {/* {console.log(formik.values)} */}
      <form onSubmit={(e) => handleForm(e)}>
        <label>Opisz swoje objawy</label>
        <TextArea ref={objawyRef} label='Objawy' name='objawy' type='text' />
        <label>Jaki lek potrzebujesz / Nie wiem</label>
        <InPut
          ref={jakiLekRef}
          label='Jaki potrzebujesz lek / Nie wiem'
          name='jakiLek'
          type='text'
          required
        />
        <label>Kiedy i jakie brałeś leki w ostatnim czasie</label>
        <InPut
          ref={kiedyLekRef}
          label='Kiedy brałeś leki i jakie'
          name='kiedyLek'
          type='text'
          required
        />
        <label>Przebyte choroby w ostatnim czasie</label>
        <InPut
          ref={przebytaChorobaRef}
          label='Przebyte choroby'
          name='przebytaChoroba'
          type='text'
          required
        />
        <Button
          type='submit'
          onClick={handleForm}
          className='btn btn-dark mt-4'
        >
          Wyslij
        </Button>
      </form>
    </Form>
  );
};

export const InPut = styled.input`
  font-size: 20px;
  position: relative;
  margin: 10px 0 10px 10px;
  color: #333;
  border: bold;
  width: 100%;
  outline: none;
  padding: 0 5px;
  height: 40px;
`;
export const TextArea = styled.textarea`
  font-size: 20px;
  position: relative;
  margin: 10px 0 10px 10px;
  color: #333;
  border: bold;
  width: 100%;
  outline: none;
  padding: 0 5px;
  height: auto;
`;
