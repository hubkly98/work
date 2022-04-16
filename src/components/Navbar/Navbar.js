import React, { useState, useEffect } from "react";
import { FaBars, FaTimes } from "react-icons/fa";
import { IconContext } from "react-icons/lib"; //import for set react-icon color to white
//import { NavLink } from "react-router-dom";
import { useAuth } from "../../firebase";
import { Button } from "../../globalStyles";
import styled from "styled-components";
import {
  Nav,
  NavbarContainer,
  NavLogo,
  NavIcon,
  MobileIcon,
  NavMenu,
  NavItem,
  NavLinks,
  NavItemBtn,
  NavBtnLink,
} from "./Navbar.styled";

import ExitToAppIcon from "@mui/icons-material/ExitToApp";
import { logout } from "../../firebase";

export default function Navbar() {
  const [click, setClick] = useState(false);

  const currentUser = useAuth(); // useAuth() returns the current user

  const [loading, setLoading] = useState(false);

  async function handleLogOut() {
    setLoading(true);
    try {
      await logout();
    } catch {
      alert("Nie udało się wylogować");
    }
    setLoading(false);
  }
  // const email = currentUser.email;
  // const {email} = currentUser; //same tylko z destrukturyzacją

  const handleClick = () => setClick(!click);

  return (
    <>
      <IconContext.Provider value={{ color: "#fff" }}>
        {/*set react-icon color to white*/}
        <Nav>
          <NavbarContainer>
            <NavLogo to='/'>
              <NavIcon />
              Teleporadnia
            </NavLogo>
            <MobileIcon onClick={handleClick}>
              {" "}
              {/*changing menu to X */}
              {click ? <FaTimes /> : <FaBars />}
            </MobileIcon>
            <NavMenu onClick={handleClick} click={click}>
              <NavItem>
                <NavLinks to='/'>Glowna</NavLinks>
              </NavItem>

              <NavItem>
                <NavLinks to='/knowledge'>Wiedza</NavLinks>
              </NavItem>

              <NavItem>
                <NavLinks to='/covid'>Covid-19</NavLinks>
              </NavItem>

              <NavItem>
                <NavLinks to='/doctor'>Wizyty</NavLinks>
              </NavItem>

              <NavItem>
                <NavLinks to='/specialists'>Specjalisci</NavLinks>
              </NavItem>

              <NavItem>
                {(currentUser === "" || currentUser || currentUser) && (
                  <NavLinks to='/visitPatient'>Wizyty pacjentow</NavLinks>
                )}
              </NavItem>
              <NavItem>
                {(currentUser !== "" || currentUser || currentUser) && (
                  <NavLinks to='/odpowiedzi'>odpowiedzi od Lekarza</NavLinks>
                )}
              </NavItem>

              <NavItemBtn>
                {currentUser ? (
                  <UserDiv>
                    <p>{currentUser.displayName}</p>
                    <Icon>
                      <ExitToAppIcon onClick={handleLogOut} />
                    </Icon>
                  </UserDiv>
                ) : (
                  <NavBtnLink to='/login'>
                    <Button fontBig primary>
                      Zaloguj sie
                    </Button>
                  </NavBtnLink>
                )}
              </NavItemBtn>
            </NavMenu>
          </NavbarContainer>
        </Nav>
      </IconContext.Provider>
    </>
  );
}

const UserDiv = styled.div`
  font-size: 23px;
  color: black;
  padding: 5px 20px;
  /* border: 1px solid white; */
  border-radius: 20px;
  display: flex;
  /* margin: 10px; */
  justify-content: space-between;
`;
const Icon = styled.div`
  padding: 0 10px;
`;
