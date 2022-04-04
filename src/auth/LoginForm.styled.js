import styled from "styled-components";

export const Main = styled.div`
background-image: linear-gradient(120deg, #008080,#00b894, #55efc4,#81ecec);
min-height:100vh; 
box-sizing:border-box;

`;

export const Pliki = styled.div`
width:360px;
background-color:#f1f1f1;
height:580px;
padding: 80px 40px;
border-radius:10px;
position:absolute;
left:50%;
top:50%;
transform: translate(-50%,-50%);
`;
export const Text = styled.div`
    text-align:center;
    margin-bottom:60px;
    font-size:30px;
    font-weight:bold;

`

export const InPut = styled.input`
  font-size: 20px;
  border-bottom:2px solid #adadad;
  position:relative;
  margin: 30px 0;
  color:#333;
  border:none;
  width:100%;
  outline:none;
  background:none;
  padding: 0 5px;
  height:40px;
`;


export const Button = styled.button`
  
  display:block;
  width:100%;
  height:50px;
  border:none;
  background-image: linear-gradient(120deg, #008080,#00b894, #55efc4,#81ecec);
  background-size: 200%;
  color:#fff;
  cursor:pointer;
  transition:0.5s;
    
  :disabled {
    opacity: 0.0;
    background-image: linear-gradient(630deg, #dfe6e9,#dfe6e9, #dfe6e9,#dfe6e9);
  }
`;
