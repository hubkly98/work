import React, { useState } from "react";
import { Link } from "react-router-dom";
import {
  AllWrapped,
  TextWra,
  IconWrap2,
  Title,
  Grid,
  SearchInputs,
  Searchin,
  Img,
} from "./Diseases.styled";
import imgForm from "../../../../images/anty_hormonalna.png";

const Disease = ({ placeholder, data }) => {
  const [searchTerm, setSearchTerm] = useState("");

  return (
    <>
      <SearchInputs>
        <Searchin
          type='text'
          placeholder={placeholder}
          onChange={(event) => {
            setSearchTerm(event.target.value);
          }}
        />
      </SearchInputs>

      <Grid>
        {data
          .filter((val) => {
            if (searchTerm === "") {
              return val;
            } else if (
              val.title.toLowerCase().includes(searchTerm.toLowerCase())
            ) {
              return val;
            }
          })
          .slice(0, 20)
          .map((value, key) => {
            console.log(value.img);
            console.log(imgForm);
            return (
              <AllWrapped>
                <TextWra>
                  <Img src={value.img} alt='' />

                  <Title>{value.title}</Title>
                  <Link to={value.link} state={{value}}>
                    <IconWrap2 />
                  </Link>
                </TextWra>
              </AllWrapped>
            );
          })}
      </Grid>
    </>
  );
};

export default Disease;
