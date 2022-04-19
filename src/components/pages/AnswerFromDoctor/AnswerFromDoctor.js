import React from "react";
import styled from "styled-components";
import patience_cart from "../../../images/patience_cart.svg";

function AnswerFromDoctor({ asd, wizyta }) {
  // const [odpowiedzi, setOdpowiedzi] = useState([]);

  // const { id } = useParams();

  const { diagnoza, lek} = asd;

  console.log("xxxD", { diagnoza });
  console.log("WIZYTA ", wizyta);

  console.log("wizyta.diagnoza", wizyta.jakiLek);

  return (
    <AllWrapped>

        <StyledVisit>
        <Wrap>
          <Title>Karta Wizyty</Title>
          <Image src={patience_cart} alt='' />
        </Wrap>
        <Content>
        <p>Objawy : {wizyta.objawy}</p>
        <p>Kiedy brał leki : {wizyta.kiedyLek}</p>
        <p>Jaki pacjent chce lek : {wizyta.jakiLek}</p>
        <p>Przebyte Choroby : {wizyta.przebytaChoroba}</p>
        </Content>
      </StyledVisit>


      <StyledVisit>
        <Wrap>
          <Title>Karta Odpowiedzi</Title>
          <Image src={patience_cart} alt='' />
        </Wrap>
        <Content>
          <p>Diagnoza : {lek}</p>
          <p>Lek : {diagnoza}</p>
        </Content>
      </StyledVisit>

    
    </AllWrapped>
  );
}

export default AnswerFromDoctor;

const AllWrapped = styled.div`
  margin-top: 5px;
  
`;
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
const Title = styled.h1`
  color: #008080;
`;

const Image = styled.img`
  width: 20%;
  margin-left: 40px;
`;
