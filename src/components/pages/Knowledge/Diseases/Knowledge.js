import React from "react";
import Disease from "./Diseases";
import BookData from "./Data.json";



const Knowledge = () => {
  return (

      <Disease placeholder='Wpisz nazwe leku...' data={BookData} />

  );
};

export default Knowledge;
