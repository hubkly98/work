import React from "react";
import { homeObjOne,homeObjTwo,homeObjFour } from "./Data";
import { InfoSection,Pricing } from "../..";
// import { Pricing } from '../components/Pricing/Pricing'
import {pricingObjOne } from "../../Pricing/DataPricing";

const Home = () => {
  return (
    <>
     
      <InfoSection {...pricingObjOne} />
    </>
  );
};

export default Home;
