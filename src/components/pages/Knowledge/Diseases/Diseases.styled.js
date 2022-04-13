import styled from "styled-components";
import AccessAlarmIcon from '@mui/icons-material/AccessAlarm';

// import CheckIcon from "@material-ui/icons/Check";
import CheckIcon from '@mui/icons-material/Check';
import fotkasadasd from "../../../../images/anty_hormonalna.png"

export const Grid = styled.div`
  display: grid;
  grid-gap: 5px;
  justify-content: center;

  @media (min-width: 800px) {
    grid-template-columns: repeat(2, 1fr);
  }

  @media (min-width: 1300px) {
    grid-template-columns: repeat(3, 1fr);
  }
`;

export const AllWrapped = styled.div`
  /* background-color: purple; */
  padding: 1rem;
  margin: 5px;
  display: flex;
  /* max-width:400px; */
  /* max-width:40%; */
  /* width: 100%; */
  
`;

export const TextWra = styled.div`
  display: flex;
  align-items: center; //wysrodkowuje gora/dol lewo/prawo
  padding: 15px;
  /* text-align: right; */
  color: #1b263b;
  font-family: "Times New Roman", serif;
  min-width: 350px;
  background: #fff;
  border-radius: 15px;
  box-shadow: 4px 2px 20px #d0e7f1;
  justify-content:space-between;
  text-align:center;
`;
export const Img = styled.img`
  padding-right: 0;
  border: 0;
  max-width: 100%;
  vertical-align: middle;
  display: inline-block;
  max-height: 500px;
`;

  
;
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

export const SearchInputs = styled.div`
  display: flex;
  
  border: 15px;
  /* position: center; */
`;

export const Searchin = styled.input`
  background-color: white;
  /* border: 0 */
  border-right: none;
  border-left: 2px solid yellow;
  border-top: 2px solid red;
  border-bottom: 2px solid red;
  border-radius: 10px;
  border-top-right-radius: 0px;
  border-bottom-right-radius: 0px;
  font-size: 18px;
  padding: 15px;
  height: 60px;
  width: 300px;
`;
export const SearchIcon = styled.div`
  border-bottom: 2px solid red;
  border-top: 2px solid red;
  border-right: 2px solid red;
  border-top-right-radius: 10px;
  border-bottom-right-radius: 10px;
  height: 60px;
  width: 50px;
  background-color: white;
  display: grid;
  place-items: center;
`;
