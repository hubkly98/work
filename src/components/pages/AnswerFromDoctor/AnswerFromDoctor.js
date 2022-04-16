import React from "react";
import { useState, useEffect } from "react";
import { collection, query, onSnapshot} from "firebase/firestore";
import { db } from "../../../firebase";

function AnswerFromDoctor({wizyty, uid}) {
  const [odpowiedzi, setOdpowiedzi] = useState([]);

  const wizytyPacjenta = wizyty.filter(item => item.pacjent === uid);
   

  console.log("moje wizyty",wizytyPacjenta)


  useEffect(() => {
    if(wizytyPacjenta[0]){
      async function fetch(){
        const q = query(collection(db, "wizyty", wizytyPacjenta[0].id, "odpowiedz"));
        onSnapshot(q, (querySnapshot) => {
          setOdpowiedzi(querySnapshot.docs.map((doc) => ({
            id: doc.id,
            diagnoza:doc.data().diagnoza,
            lek:doc.data().lek,            
          })))
        });
      }
      fetch()
    }
  }, [wizytyPacjenta]);

  
console.log("moje odpowiedzi", odpowiedzi);
  
  return (
    <div>
      {/* {!!wizyty && wizyty.map((item) => <AnswerFromDoctorDetails wizyta={item} />)} */}
    </div>
  );
}

export default AnswerFromDoctor;
