import React from "react";
import { homeObjOne,homeObjTwo,homeObjFour } from "./Data";
import { InfoSection,Pricing } from "../..";
// import { Pricing } from '../components/Pricing/Pricing'
import {pricingObjOne } from "../../Pricing/DataPricing";

const Home = () => {
  return (
    <>
      <InfoSection {...homeObjOne} />
      <InfoSection {...homeObjTwo} />
    
      <Pricing {...pricingObjOne} />
      {/* <InfoSection {...homeObjThree} /> */}
      <InfoSection {...homeObjFour} />

    </>
  );
};

export default Home;
