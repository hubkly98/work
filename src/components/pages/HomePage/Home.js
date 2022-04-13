import React, { useEffect, useState } from "react";
import { homeObjOne, homeObjTwo, homeObjFour } from "./Data";
import { InfoSection, Pricing } from "../..";
// import { Pricing } from '../components/Pricing/Pricing'
import { pricingObjOne } from "../../Pricing/DataPricing";
import { getDocs } from "firebase/firestore";
import { db, useAuth } from "../../../firebase";
import { collection } from "firebase/firestore";
const Home = ({ choosenDoctor, setChoosenDoctor }) => {
  const [users, setUsers] = useState(null);
  const currentUser = useAuth();
  console.log(currentUser);

  useEffect(() => {
    const getUsers = async () => {
      if (!!currentUser) {
        const wizytaCollectionRef = collection(db, "users", currentUser.uid, "wizyty");
        const data = await getDocs(wizytaCollectionRef);
        setUsers(data.docs.map((item) => ({ ...item.data(), id: item.id })));
      }
    };
    getUsers();
  }, []);

  return (
    <>
      <div>
        <ul>{!!users && users.map((item) => <li key={item.id}>{item.objawy}</li>)}</ul>
      </div>
      <InfoSection {...homeObjOne} />
      <InfoSection {...homeObjTwo} />

      <Pricing choosenDoctor={choosenDoctor} setChoosenDoctor={setChoosenDoctor} {...pricingObjOne}  />
     
     
      <InfoSection {...homeObjFour} />
    </>
  );
};

export default Home;