import React from "react";
import { homeObjTwo } from "./Data";
import { InfoSection } from "../..";


const Home = () => {
  return (
    <>
     
      <InfoSection {...homeObjTwo} />
    </>
  );
};

export default Home;
