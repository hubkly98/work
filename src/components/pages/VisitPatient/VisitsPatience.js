import React from "react";
import { useState, useEffect } from "react";
import { collection, query, orderBy, onSnapshot } from "firebase/firestore";
import { db } from "../../../firebase";
import VisitDetails from "./VisitDetails";


function VisitsPatient() {
  const [wizyty, setWizyty] = useState([]);
  //  pobierz listę pacjentów analogicznie 

  useEffect(() => {
    const q = query(collection(db, "wizyty"), orderBy("created", "desc"));
    onSnapshot(q, (querySnapshot) => {
      setWizyty(
        querySnapshot.docs.map((doc) => ({
          id: doc.id,
          pacjent: doc.data().pacjent,
          doktor: doc.data().doktor,
          jakiLek: doc.data().jakiLek.toString(),
          kiedyLek: doc.data().kiedyLek.toString(),
          przebytaChoroba: doc.data().przebytaChoroba.toString(),
          objawy: doc.data().objawy.toString(),
          created: doc.data().created.toString(),
        }))
      );
    });
  }, []);

  return (
    <div>
      {!!wizyty && wizyty.map((item) => <VisitDetails key={item.id} wizyta={item} />)}
    </div>
  );
}

export default VisitsPatient;
