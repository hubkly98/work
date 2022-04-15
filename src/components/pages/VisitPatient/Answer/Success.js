import React, {useEffect} from "react";
// tu dodaj przycisk wróć to home
import styled from "styled-components";
import patience_cart from "../../../../images/patience_cart.svg";
import { useNavigate } from "react-router-dom";

const Success = () => {
  const navigate = useNavigate();

//useEffect po zaladowaniu strony od razu wywoluje funkcje 
  useEffect(() => {
    setTimeout(() => navigate("../", { replace: true }), 2000)
  }, [navigate])


  return (
    <Wrap>
      <Title>Formularz wysłany pomyślnie</Title>
      <Image src={patience_cart} alt='' />
    </Wrap>
  );
};
export default Success;

const Wrap = styled.div`
  height: 100vh;
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
`;
const Image = styled.img`
  width: 30%;
`;

const Title = styled.h1`
  color: #008080;
  margin-bottom: 20px;
`
