import styled from "styled-components";
import CheckIcon from "@mui/icons-material/Check";

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
  padding-bottom: 4px;
  @media (min-width: 800px) {
    padding: 10px;
  }
  margin: 5px;
  display: flex;
  justify-content: center;
`;

export const TextWra = styled.div`
  display: flex;
  align-items: center; //wysrodkowuje gora/dol lewo/prawo
  padding: 10px 20px;
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


export const IconWrap2 = styled(CheckIcon)`
  min-width: 40px;
  min-height: 40px;
`;

export const Title = styled.h2`
  max-width: 200px;
`;

export const SearchInputs = styled.div`
  display: flex;
  justify-content: center;
  padding: 40px 0 30px 0;
  max-width: 1440px;
  margin: 0 auto;
`;

export const Searchin = styled.input`
  background-color: white;
  border: 2px 2px 2px 2px ;
  border-radius: 10px;
  font-size: 16px;
  padding: 15px;
  height: 60px;
  width: 300px;
`;
