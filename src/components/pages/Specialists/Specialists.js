import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import { Container } from "react-bootstrap";
import imgForm from "../../../images/checklist.png";
import { SendForm } from "./SendForm";
import "./Specialists.css";


const Specialists = ({ choosenDoctor, setChoosenDoctor }) => {
  return (
    <>
      <div className='container mt-3'>
        <div className='row'>
          <div className='col-md-5'>
            <SendForm choosenDoctor={choosenDoctor} setChoosenDoctor={setChoosenDoctor} />
          </div>
          <div className='col-md-7 my-auto'>
            <img className='img-fluid w-80 ' src={imgForm} alt='...' />
          </div>
        </div>
      </div>
    </>
  );
};

export default Specialists;
