import React from "react";
import Disease from "./Diseases";
import { content } from "./Data";

const Knowledge = () => {
  return <Disease placeholder='Wpisz dolegliwosc...' data={content} />;
};

export default Knowledge;
