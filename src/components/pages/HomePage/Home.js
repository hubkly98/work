import React, { useEffect, useState } from "react";
import { homeObjOne,homeObjFour } from "./Data";
import { InfoSection } from "../..";
import Doctor from "../Doctor/Doctor";
import {
  doctorObjOne,
  doctorObjTwo,
  doctorObjThree,
} from "../Doctor/DataDoctor";
import { getDocs } from "firebase/firestore";
import { db, useAuth } from "../../../firebase";
import { collection } from "firebase/firestore";
import Knowledge from "../Knowledge/Diseases/Knowledge";
const Home = ({ choosenDoctor, setChoosenDoctor }) => {
  const [users, setUsers] = useState(null);
  const currentUser = useAuth();
  console.log(currentUser);

  useEffect(() => {
    const getUsers = async () => {
      if (!!currentUser) {
        const wizytaCollectionRef = collection(
          db,
          "users",
          currentUser.uid,
          "wizyty"
        );
        const data = await getDocs(wizytaCollectionRef);
        setUsers(data.docs.map((item) => ({ ...item.data(), id: item.id })));
      }
    };
    getUsers();
  }, []);

  return (
    <>
      <div>
        <ul>
          {!!users && users.map((item) => <li key={item.id}>{item.objawy}</li>)}
        </ul>
      </div>
      <InfoSection {...homeObjOne} />
      {/* <InfoSection {...homeObjTwo} /> */}

      <Doctor
        choosenDoctor={choosenDoctor}
        setChoosenDoctor={setChoosenDoctor}
        {...doctorObjOne}
        {...doctorObjTwo}
        {...doctorObjThree}
      />

      <InfoSection {...homeObjFour} />
      <Knowledge />
    </>
  );
};

export default Home;
