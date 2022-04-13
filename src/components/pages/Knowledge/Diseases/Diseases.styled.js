import styled from "styled-components";
import AccessAlarmIcon from "@mui/icons-material/AccessAlarm";

// import CheckIcon from "@material-ui/icons/Check";
import CheckIcon from "@mui/icons-material/Check";
import fotkasadasd from "../../../../images/anty_hormonalna.png";

export const Grid = styled.div`
  display: grid;
  padding: 0 0 80px 0;
  grid-gap: 5px;
  justify-content: center;
  h2 {
    font-size: 18px;
    margin: 0;
  }

  margin: 0 auto;
  @media (min-width: 800px) {
    grid-template-columns: repeat(2, 1fr);
    max-width: 800px;
  }

  @media (min-width: 1300px) {
    grid-template-columns: repeat(3, 1fr);
    max-width: 1440px;
  }
`;

export const AllWrapped = styled.div`
  /* background-color: purple; */
  padding-bottom: 4px;
  @media (min-width: 800px) {
    padding: 10px;
  }
  margin: 5px;
  display: flex;
  justify-content: center;
  /* max-width:400px; */
  /* max-width:40%; */
  /* width: 100%; */
`;

export const TextWra = styled.div`
  display: flex;
  align-items: center; //wysrodkowuje gora/dol lewo/prawo
  padding: 10px 20px;
  /* text-align: right; */
  color: #1b263b;
  font-family: "Times New Roman", serif;
  min-width: 345px;
  background: #fff;
  border-radius: 15px;
  box-shadow: 4px 2px 20px #d0e7f1;
  justify-content: space-between;
  text-align: center;
`;
export const Img = styled.img`
  margin-left: 20px;
  height: 45px;
  width: auto;
  max-width: 45px;
  object-fit: contain;
`;

export const IconWrap = styled(AccessAlarmIcon)`
  /* background-color:green; */
  min-width: 40px;
  min-height: 40px;
`;
export const IconWrap2 = styled(CheckIcon)`
  /* background-color:green; */
  min-width: 40px;
  min-height: 40px;
`;

export const Title = styled.h2`
  max-width: 200px;
`;

export const SearchInputs = styled.div`
  display: flex;
  justify-content: center;
  border: 15px;
  padding: 40px 0 30px 0;
  max-width: 1440px;
  margin: 0 auto;
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
  font-size: 16px;
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