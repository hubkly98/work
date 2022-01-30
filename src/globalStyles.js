import styled, { createGlobalStyle } from "styled-components";

const GlobalStyle = createGlobalStyle`
*{
    box-sizing: border-box;
    margin: 0;
    padding: 0;
    font-family: 'Source Sans Pro', sans-serif;
}
`;

export const Container = styled.div`
  z-index: 1;
  width: 100%;
  max-width: 1300px;
  margin-right: auto;
  margin-left: auto;
  padding-right: 50px;
  padding-left: 50px;

  @media screen and(max-width: 991px) {
    padding-right: 30px;
    padding-left: 50px;
  }
`;

export const Button = styled.button`
  border-radius: 15px;
  background: ${({ primary }) => (primary ? "#28AD97" : "#008080")};
  white-space: nowrap;
  //ten padding to chyba do zmiany
  padding: ${({ big }) => (big ? "12px 64px" : "10px 20px")};
  color: #fff; //button color
  font-size: ${({ fontBig }) => (fontBig ? "1.4rem" : "1.2rem")};

  outline: none;
  border: none;
  cursor: pointer;

  @media screen and (max-width: 960px) {
    width: 100%; // to zmienić żeby "GET STARTED" nie rozciągał się na cała strone xD
  }
  &:hover {
    transition: all 0.3s ease-out;
    background: #fff;
    background: ${({ secondary }) => (secondary ? "teal" : "#4B59F7")};
    
  }
`;

export default GlobalStyle;
