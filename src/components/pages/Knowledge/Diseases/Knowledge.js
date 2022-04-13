import React from "react";
import Disease from "./Diseases";
import BookData from "./Data";

const Knowledge = () => {
  return <Disease placeholder='Wpisz dolegliwosc...' data={BookData} />;
};

export default Knowledge;