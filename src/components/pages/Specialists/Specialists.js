import React from "react";
import { SendForm } from "./SendForm";

const Specialists = ({ choosenDoctor, setChoosenDoctor }) => {
  return (
    <SendForm
      choosenDoctor={choosenDoctor}
      setChoosenDoctor={setChoosenDoctor}
    />
  );
};

export default Specialists;
