import { Link } from 'react-router-dom';
import styled from 'styled-components';

export const PricingSection = styled.div`
  padding: 100px 0 160px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  background: #224558;
`;

export const PricingWrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  margin: 0 auto;
  @media screen and (max-width: 960px) {
    margin: 0 30px;
    display: flex;
    flex-direction: column;
    align-items: center;
  }
`;

export const PricingHeading = styled.h1`
  color: #fff;
  font-size: 48px;
  margin-bottom: 24px;
`;

export const PricingContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  @media screen and (max-width: 960px) {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    width: 100%;
  }
`;

export const PricingCard = styled(Link)`
  background: 'white';
  box-shadow: 0 6px 20px rgba(56, 125, 255, 0.2);
  width: 280px;
  height: 500px;
  text-decoration: none;
  border-radius: 4px;
  &:nth-child(2) {
    margin: 24px;
  }
  &:hover {
    transform: scale(1.06);
    transition: all 0.3s ease-out;
    color: #1c2237;
  }
  @media screen and (max-width: 960px) {
    width: 90%;
    &:hover {
      transform: none;
    }
  }
`;

export const PricingCardInfo = styled.div`
  display: flex;
  flex-direction: column;
  height: 500px;
  padding: 24px;
  align-items: center;
  color: #fff;
`;


export const PricingCardPlan = styled.h3`
  margin-bottom: 5px;
  font-size: 24px;
  text-align:center;
  `;

export const PricingCardCost = styled.h4`
  font-size: 40px;
  `;

export const PricingCardLength = styled.p`
  font-size: 14px;
  margin-bottom: 24px;
  `;

export const PricingCardFeatures = styled.ul`
  margin: 16px 0 32px;
  list-style: none;
  display: flex;
  flex-direction: column;
  align-items: center;
  color: #a9b3c1;
  `;

export const PricingCardFeature = styled.li`
  margin-bottom: 10px;
  `;

  export const PricingCardIcon = styled.div`
    margin: 4px 12px 12px 12px;
    

  `;

export const Img = styled.img`
  padding-right: 0;
  border: 0;
  max-width: 100%;
  vertical-align: middle;
  display: inline-block;
  max-height: 150px;
  border-radius:50%;
`;
// export const Image = {
//     // lightBg: false,
//     // primary:false,
//     // imgStart:'',
//     // lightTopLine:true,
//     // buttonLabel:'Get Started',
//     // lightTextDesc:true,
//     // description:"Tworzymy stronę specjalnie dla twoich potrzeb",
//     // headline:'Jesteśmy tutaj dla twojej troski',
//     // lightText:true,
//     // topLine:'Margeting Agency',
//     img: require('../../images/magda.svg').default,
//     alt:'Image',
//     // start:''
//   };