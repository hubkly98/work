import React from 'react'
import { doctorObjOne,doctorObjTwo, doctorObjThree } from "../Doctor/DataDoctor";
import Doctor from './Doctor';


const DoctorPage = ({ choosenDoctor, setChoosenDoctor }) => {
  return (
    <Doctor choosenDoctor={choosenDoctor} setChoosenDoctor={setChoosenDoctor} {...doctorObjOne} {...doctorObjTwo} {...doctorObjThree} />
    )
}

export default DoctorPage