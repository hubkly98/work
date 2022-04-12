import styled from "styled-components";
import AccessAlarmIcon from "@material-ui/icons/AccessAlarm";

import CheckIcon from "@material-ui/icons/Check";


export const Grid = styled.div`
  display: grid;
  grid-gap: 5px;
  justify-content:center;

  @media (min-width: 700px){
    grid-template-columns: repeat(2, 1fr);
    
  }

@media (min-width: 1300px){
    grid-template-columns: repeat(3, 1fr);

}
`;


export const AllWrapped = styled.div`
  /* background-color: purple; */
  padding: 1rem;
  margin:5px;
  display:flex;
  /* max-width:40%; */
  /* width: 30%; */
`;


export const TextWra = styled.div`
  display: flex;
  align-items: center; //wysrodkowuje gora/dol lewo/prawo
  padding: 15px;
  text-align: center;
  color: #1b263b;
  font-family: "Times New Roman", serif;
  /* min-width: 150px; */
  background: #fff;
  border-radius: 15px;
  box-shadow: 4px 2px 20px #d0e7f1;
`;
export const IconWrap = styled(AccessAlarmIcon)`
  /* background-color:green; */
  min-width: 60px;
  min-height: 60px;
`;
export const IconWrap2 = styled(CheckIcon)`
  /* background-color:green; */
  min-width: 60px;
  min-height: 60px;
`;

export const Title = styled.h2`
  max-width: 200px;
`;
