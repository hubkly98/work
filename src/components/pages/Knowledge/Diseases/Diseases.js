import React, { useState } from "react";
import { Link } from "react-router-dom";
import SearchIcon1 from "@material-ui/icons/Search";
// import CloseIcon from "@material-ui/icons/Close";
import CloseIcon from '@mui/icons-material/Close';
import {
  DiseasSection,
  DiseasContainer,
  AllWrapped,
  TextWra,
  IconWrap,
  IconWrap2,
  Title,
  Grid,
  SearchInputs,
  Searchin,
  SearchIcon,
  L,
  Img,
} from "./Diseases.styled";

// import SearchBar from "../../SearchBar/SearchBar";
// import { NavLinks } from "../../Navbar/Navbar.styled";

const Disease = ({ placeholder, data }) => {
  const [searchTerm, setSearchTerm] = useState("");

  const clearInput = () => {
    // searchTerm([]);
    setSearchTerm("");
  };
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

        <SearchIcon>
          {data.length === 0 ? (
            <SearchIcon1 />
          ) : (
            <CloseIcon id='clearBtn' onClick={clearInput} />
          )}
        </SearchIcon>
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
            return (
              <AllWrapped>
                <TextWra>
                  
                  <Img src={value.img} alt="..." />

                  {console.log(value.img)}
                  <Title>{value.title}</Title>

                  {/* <a
                    DataItem
                    rel='noopeneer noreferrer'
                    href={value.link}
                    target='_blank'
                  ></a> */}
                  <Link to={value.link}>
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
