import React from "react";
import { homeObjOne, homeObjTwo, homeObjFour } from "./Data";
import { InfoSection, Pricing } from "../..";
import { pricingObjOne } from "../../Pricing/DataPricing";
import "bootstrap/dist/css/bootstrap.min.css";
import { Container } from "react-bootstrap";
import imgForm from "../../../images/checklist.png";
import { SendForm } from "./SendForm";
import "./Specialists.css";


const Specialists = () => {
  return (
    <>
      <div className='container mt-3'>
        <div className='row'>
          <div className='col-md-5'>
            <SendForm />
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
