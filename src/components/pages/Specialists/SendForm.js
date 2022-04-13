import React from "react";
import { Form, Formik } from "formik";
import { TextField } from "./TextField";
import * as Yup from "yup";

export const SendForm = () => {
  const validation = Yup.object({
    objawy: Yup.string()
      .min(10, "Za mało znaków")
      .required("To pole jest wymagane"),
      jakiLek: Yup.string()
      .min(3, "Za mało znaków")
      .required("To pole jest wymagane"),
      kiedyLek: Yup.string()
      .min(10, "Za mało znaków")
      .required("To pole jest wymagane"),
      przebytaChoroba: Yup.string()
      .min(10, "Za mało znaków")
      .required("To pole jest wymagane")
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
            <TextField label='Objawy' name='objawy' type='text' />
            <TextField
              label='Jaki potrzebujesz lek / Nie wiem'
              name='jakiLek'
              type='text'
            />
            <TextField
              label='Kiedy brałeś leki i jakie'
              name='kiedyLek'
              type='text'
            />
            <TextField
              label='Przebyte choroby'
              name='przebytaChoroba'
              type='text'
            />
            <button className='btn btn-dark mt-3' type='submit'>
              Wyslij
            </button>
          </Form>
        </div>
      )}
    </Formik>
  );
};
