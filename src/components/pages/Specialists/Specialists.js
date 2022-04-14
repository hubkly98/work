import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import imgForm from "../../../images/checklist.png";
import { SendForm } from "./SendForm";
import "./Specialists.css";

const Specialists = ({ choosenDoctor, setChoosenDoctor }) => {
  return (
    <>
      <div className='container-fluid'>
        <div className='container mt-4'>
          <div className='row'>
            <div className='col-md-4'>
              <SendForm
                choosenDoctor={choosenDoctor}
                setChoosenDoctor={setChoosenDoctor}
              />
            </div>
            <div className='col-md-4 my-auto '>
              <img className='img-fluid' src={imgForm} alt='...' />
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Specialists;
