import React, { useRef } from "react";
import { useLocation, useParams, useNavigate } from "react-router-dom";
import styled from "styled-components";
import { db } from "../../../../firebase";
import { doc } from "firebase/firestore";
import { setDoc } from "firebase/firestore";
import { v4 as uuidv4 } from 'uuid';
import { Button } from "../../../../globalStyles";

const Answer = () => {
  const location = useLocation();
  const { userName } = location.state;

  const { id } = useParams();

  const answerRef = doc(db, "wizyty", id, "odpowiedz", uuidv4());

  const navigate = useNavigate();

  const przepisanyLek = useRef();
  const diagnoza = useRef();

  const handleForm = async (e) => {
    e.preventDefault(); //chamuje defaultowe przekierowanie 

    try {
      await setDoc(answerRef, {lek: przepisanyLek.current.value, diagnoza: diagnoza.current.value}) 
      navigate("../success", { replace: true });
      } catch (err) {
        console.alert(err);
      }
    // console.log( przepisanyLek, kiedyLekRef, przebytaChorobaRef);
  };

  return (
    <Form>
      <h1>Formularz id: {id}</h1>
      <form onSubmit={(e) => handleForm(e)}>
        <div>
          <label>Pacjent</label>
          <InPut
            label='Jaki potrzebujesz lek / Nie wiem'
            name='pacjent'
            type='text'
            value={userName}
            disable
          />
        </div>
        <div>
          <label>Przepisany lek</label>
          <InPut
            ref={przepisanyLek}
            label='Przepisany lek'
            name='przepisany lek'
            type='text'
          />
        </div>
        <div>
          <label>Diagnoza</label>
          <TextArea
            ref={diagnoza}
            label='diagnowa'
            name='diagnoza'
            type='text'
            rows="6"
          />
        </div>
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

export default Answer;

export const InPut = styled.input`
  font-size: 20px;
  /* border-bottom: 2px solid #adadad; */
  position: relative;
  margin: 10px 0 10px 10px;
  color: #333;
  border: bold;
  width: 100%;
  outline: none;
  /* background: none; */
  padding: 0 5px;
  height: 40px;
`;

export const TextArea = styled.textarea`
  font-size: 20px;
  /* border-bottom: 2px solid #adadad; */
  position: relative;
  margin: 10px 0 10px 10px;
  color: #333;
  border: bold;
  width: 100%;
  outline: none;
  /* background: none; */
  padding: 0 5px;
  height: auto;
`;

export const Form = styled.div`
  width: 50%;
  margin-right:auto;
  margin-left:auto;
  border-radius: 20px;
  box-shadow: 0 20px 25px -5px rgb(0 0 0 / 0.1), 0 8px 10px -6px rgb(0 0 0 / 0.1);
  padding: 60px;
  margin-top: 100px;
  margin-bottom: 100px;
`