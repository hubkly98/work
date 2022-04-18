import React from "react";
import { useState, useEffect } from "react";
import { collection, query, onSnapshot} from "firebase/firestore";
import { db } from "../../../firebase";
import styled from "styled-components";

import {Button} from "../../../globalStyles"

import { Link } from "react-router-dom";
import patience_cart from "../../../images/patience_cart.svg";



function AnswerFromDoctor({wizyty, uid}) {
  const [odpowiedzi, setOdpowiedzi] = useState([]);

  const wizytyPacjenta = wizyty.filter(item => item.pacjent === uid);
   

  // console.log("moje wizyty",wizytyPacjenta)
  // const answerRef = collection(db, "wizyty", wizytyPacjenta[0].id, "odpowiedz");
  

      useEffect(() => {
        if(wizytyPacjenta[0]){
          async function fetch(){
            const q = await query(collection(db, "wizyty", wizytyPacjenta[0].id, "odpowiedz"));
            // const q =  query(answerRef);
            onSnapshot(q, (querySnapshot) => {
              setOdpowiedzi(querySnapshot.docs.map(doc => ({
                id: doc.id,
                diagnoza:doc.data().diagnoza.toString(),
                lek:doc.data().lek.toString(),            
          })))
        });
      }
      fetch()
    
      }

  }, [])
  
      
  
  // console.log("moje odpowiedzi", odpowiedzi);
  console.log("moje wizyty",odpowiedzi[0]);
  return (

    <StyledVisit>
    <Wrap>
    <Title>Karta Odpowiedzi</Title>
    <Image src={patience_cart} alt=""/>
    </Wrap>
    <Content>
    {/* <p>Diagnoza : {odpowiedzi[0].diagnoza}</p> */}
    {/* <p>Lek : {odpowiedzi[0].lek}</p> */}
  
    </Content>
    {/* <Link to={`/answer/${id}`} state={{ userName }} */}
 {/* ><Button primary>Odpowiedz</Button></Link> */}
  </StyledVisit>

    // <div>
      // {/* {!!wizyty && wizyty.map((item) => <AnswerFromDoctorDetails wizyta={item} />)} */}
    // {/* </div> */}
  )
}

export default AnswerFromDoctor;


const StyledVisit = styled.div`
  margin-left: auto;
  margin-right: auto;
  width: 60%;
  border-radius: 20px;
  box-shadow: 0 20px 25px -5px rgb(0 0 0 / 0.1), 0 8px 10px -6px rgb(0 0 0 / 0.1);
  font-family: "Trebuchet MS", "Lucida Sans Unicode", "Lucida Grande",
    "Lucida Sans", Arial, sans-serif;
  margin-top: 100px;
  margin-bottom: 200px;
  display: flex;
  flex-direction: column;
  padding: 40px;
  align-items:center;
`

const Title = styled.h1`
  color: #008080;
`

const Image = styled.img`
width: 20%;
margin-left: 40px;
`

const Wrap= styled.div`
display: flex;
justify-content: center;
align-items:center;
max-width: max-content;
margin-right: auto;
margin-left:auto;
border-bottom: 2px solid #008080;
padding-bottom: 20px; 
text-transform: uppercase;
`
const Content = styled.div`
padding-top: 20px; 

`