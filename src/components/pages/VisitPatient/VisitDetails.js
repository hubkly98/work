import React, { useState } from "react";
import styled from "styled-components";
import patience_cart from "../../../images/patience_cart.svg";
import { Button } from "../../../globalStyles";
//destrukturyzacja propsóe
// (props)
// props.wizyta
import { Link } from "react-router-dom";
import { db } from "../../../firebase";
import { useEffect } from "react";
import { doc } from "firebase/firestore";
import { getDoc } from "firebase/firestore";
import { updateCurrentUser } from "firebase/auth";
import { useAuth } from "../../../firebase";

const VisitDetails = ({ wizyta ,wizyty}) => {
  const { id, jakiLek, kiedyLek, przebytaChoroba, objawy , pacjent } = wizyta;
  const [userName, setUsername] = useState("");

  const docRef = doc(db, "users", wizyta.pacjent);

  
  const currentUser = useAuth();

  // const wizytyLek = wizyta.filter(item => item.doktor ===currentUser.uid)

  // console.log("DOKTOR", wizyta.doktor);
  
  useEffect(() => {
    async function fetch() {
      const docSnap = await getDoc(docRef);
      if (docSnap.exists()) {
        setUsername(docSnap.data().displayName);
      } else {
        console.log(docRef);
      }
    }
    fetch();
  }, [docRef]);
  
  
  return (
    <StyledVisit>
      <Wrap>
        <Title>Karta Pacjenta</Title>
        <Image src={patience_cart} alt='' />
      </Wrap>
      <Content>
        <p>Pacjent : {userName}</p>
        <p>Objawy : {objawy}</p>
        <p>Kiedy brał leki : {kiedyLek}</p>
        <p>Jaki pacjent chce lek : {jakiLek}</p>
        <p>Przebyte Choroby : {przebytaChoroba}</p>
      </Content>
      <Link to={`/answer/${id}`} state={{ userName }}>
        <Button primary>Odpowiedz</Button>
      </Link>
    </StyledVisit>
  );
};

export default VisitDetails;

const StyledVisit = styled.div`
  margin-left: auto;
  margin-right: auto;
  width: 60%;
  border-radius: 20px;
  box-shadow: 0 20px 25px -5px rgb(0 0 0 / 0.1),
    0 8px 10px -6px rgb(0 0 0 / 0.1);
  font-family: "Trebuchet MS", "Lucida Sans Unicode", "Lucida Grande",
    "Lucida Sans", Arial, sans-serif;
  margin-top: 100px;
  margin-bottom: 200px;
  display: flex;
  flex-direction: column;
  padding: 40px;
  align-items: center;
`;

const Title = styled.h1`
  color: #008080;
`;

const Image = styled.img`
  width: 20%;
  margin-left: 40px;
`;

const Wrap = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  max-width: max-content;
  margin-right: auto;
  margin-left: auto;
  border-bottom: 2px solid #008080;
  padding-bottom: 20px;
  text-transform: uppercase;
`;
const Content = styled.div`
  padding-top: 20px;
`;
