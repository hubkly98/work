import React from "react";
import ExampleSection from "../ExampleSection";

import { useLocation } from "react-router-dom";

const Home = () => {
  const location = useLocation();
  const { value } = location.state;
  return (
    <>
      <ExampleSection {...value.value} />
    </>
  );
};

export default Home;
