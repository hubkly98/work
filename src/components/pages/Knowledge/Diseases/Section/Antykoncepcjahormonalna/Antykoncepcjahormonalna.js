import React from "react";
import { antykoncepcjahormonalna } from "../Data";
import ExampleSection from "../ExampleSection";

const Home = () => {
  return (
    <>
      <ExampleSection {...antykoncepcjahormonalna} />
    </>
  );
};

export default Home;
