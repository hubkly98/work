import React, { useRef } from "react";
import { Form, Formik } from "formik";
import { TextField } from "./TextField";
import * as Yup from "yup";
import { useAuth } from "../../../firebase";
import { setDoc } from "firebase/firestore";
import { db } from "../../../firebase";
import { doc, addDoc } from "firebase/firestore";

import { collection, query, where, getDocs } from "firebase/firestore";

export const SendForm = () => {
  //FIREBASE
  const currentUser = useAuth();

  const objawyRef = useRef();
  const jakiLekRef = useRef();
  const kiedyLekRef = useRef();
  const przebytaChorobaRef = useRef();

  // const userCollectionRef = collection(db, "users");
  // const wizytaCollectionRef = collection(db, "wizyty");
  // console.log(userCollectionRef, wizytaCollectionRef);

  // const docRef = doc(db,"users", currentUser.uid);
  // const currentUserRef = collection(db, "users").doc(currentUser.uid).collection("wizyty");
  // const colRef = collection(currentUser,"wizyty");

  //   async function handleForm(){
  //  await addDoc(userCollectionRef,{
  //       currentUser,
  //       objawyRef,
  //       jakiLekRef,
  //       kiedyLekRef,
  //       przebytaChorobaRef,
  //       }); // działa dodawanie do kolekcji
  //     }

  // const newCityRef= doc(collection(db,"users"));

  // const newCityRef=userCollectionRef.doc(currentUser.uid).collection("wizyty").doc();

  // async function handleForm(){

  //   await setDoc(newCityRef,{
  //     id:currentUser.uid,
  //     objawy:"objawyaaaaRef",
  //     jakiLek:"jakiLekRef",
  //     kiedyLek:"kiedyLekRef",
  //     przebytaChoroba:"przebytaChorobaRef",
  //     }); // działa dodawanie do kolekcji
  //   }

  // const handleForm = async (values) => {
  //   const q = query(collection(db, "users"));
  //   const querySnapshot = await getDocs(q);
  //  const queryData = querySnapshot.docs.map((aaa) => ({
  //    ...aaa.data(),
  //     id: aaa.id,
  //  }));
  //  console.log(queryData);
  //  queryData.map(async (currentUser,uid)=>{
  //    await setDoc(doc(db,`users/$(currentUser.uid)/more-details`,"asd"),{
  //      name: "asd",
  //      email: "xxx",
  //      asdasdsad: "asdasd",
  //    });
  //  })
  // };

  //  async function handleForm(){
  //    try{
  //      await setDoc(doc(db,"users", `currentUser.uid/more-detial`),{
  //        id:currentUser.uid,
  //        objawy: "aasd",
  //        jakiLek:"aasd",
  //        kiedyLek:"asd",
  //        przebytaChoroba:"asd" });
  //       }
  //       catch{
  //         alert("Cos poszlo nie tak");
  //       }
  //     }
  // const WizytazPacjetemRef = doc(db, "users",currentUser.uid , "wizyta", "123");

  // async function handleForm(){
  //   try{
  //     await setDoc(WizytazPacjetemRef,{
  //       id:currentUser.uid,
  //       objawy: "aasd",
  //       jakiLek:"aasd",
  //       kiedyLek:"asd",
  //       przebytaChoroba:"asd" });
  //      }
  //      catch{
  //        alert("Cos poszlo nie tak");
  //      }
  //    }

  const handleForm = async () => {
    try {
      await addDoc(collection(db, "users", currentUser.uid, "wizyty"), {
        id: currentUser.uid,
        objawy: "asd",
        jakiLek: "test",
        kiedyLek: "test",
        przebytaChoroba: "asd",
      });
    } catch (err) {
      alert(err);
    }
  };

  // async function handleForm(){

  //   await userCollectionRef.doc(currentUser.uid).collection("wizyty").add({
  //     id:currentUser.uid,
  //     objawy:objawyRef.current.value,
  //     jakiLek:jakiLekRef.current.value,
  //     kiedyLek:kiedyLekRef.current.value,
  //     przebytaChoroba:przebytaChorobaRef.current.value });
  //    }

  //  await addDoc(userCollectionRef,{
  //     id:currentUser.uid,
  //     }); // działa dodawanie do kolekcji

  // async function handleForm() {
  //   const q = query(collection(db, "users"));
  //   const querySnapshot = await getDocs(q);
  //   const queryData = querySnapshot.docs.map((detail) => ({
  //     ...detail.data(),
  //     id: detail.id,
  //   }));

  //   console.log(queryData);
  // }

  // console.log(handleForm);

  //BODY PAGE

  const validation = Yup.object({
    objawy: Yup.string().min(1, "Za mało znaków").required("To pole jest wymagane"),
    jakiLek: Yup.string().min(1, "Za mało znaków").required("To pole jest wymagane"),
    kiedyLek: Yup.string().min(1, "Za mało znaków").required("To pole jest wymagane"),
    przebytaChoroba: Yup.string().min(1, "Za mało znaków").required("To pole jest wymagane"),
  });
  return (
    <Formik
      initialValues={{
        objawy: "", // objawy
        jakiLek: "", // jaki lek(jeśli nie wiem wpisz "wybiera lekarz")
        kiedyLek: "", // kiedy braleś leki i jakie
        przebytaChoroba: "", // ostatnio przebyta choroba(kiedy)
      }}
      validationSchema={validation}
    >
      {(formik) => (
        <div>
          <h1 className='my-4 font-weight-bold-display-4'>Formularz</h1>
          {/* {console.log(formik.values)} */}
          <Form>
            <TextField ref={objawyRef} label='Objawy' name='objawy' type='text' />
            <TextField ref={jakiLekRef} label='Jaki potrzebujesz lek / Nie wiem' name='jakiLek' type='text' />
            <TextField ref={kiedyLekRef} label='Kiedy brałeś leki i jakie' name='kiedyLek' type='text' />
            <TextField ref={przebytaChorobaRef} label='Przebyte choroby' name='przebytaChoroba' type='text' />
            <button onClick={handleForm} className='btn btn-dark mt-3'>
              Wyslij
            </button>
          </Form>
        </div>
      )}
    </Formik>
  );
};