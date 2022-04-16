import React from "react";
import { useState, useEffect } from "react";
import { collection, query, orderBy, onSnapshot } from "firebase/firestore";
import { db } from "../../../firebase";
import VisitDetails from "./VisitDetails";


function VisitsPatient({wizyty}) {
  return (
    <div>
      {!!wizyty && wizyty.map((item) => <VisitDetails key={item.id} wizyta={item} />)}
    </div>
  );
}

export default VisitsPatient;
