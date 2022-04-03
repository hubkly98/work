import React, { useState, useEffect } from "react";
import { FaBars, FaTimes } from "react-icons/fa";
import { IconContext } from "react-icons/lib"; //import for set react-icon color to white
//import { NavLink } from "react-router-dom";
import { Button } from "../../globalStyles";
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

export default function  Navbar() {
  const [click, setClick] = useState(false);
  const [button, setButton] = useState(true);

  const handleClick = () => setClick(!click);

  const showButton = () => {
    if (window.innerWidth <= 960) {
      setButton(false);
    } else {
      setButton(true);
    }
  };
  useEffect(() => {
    showButton();
  }, []);
  window.addEventListener("resize", showButton);

  return (
    <>
      <IconContext.Provider value={{ color: "#fff" }}>
        {/*set react-icon color to white*/}
        <Nav>
          <NavbarContainer>
            <NavLogo to='/'>
              <NavIcon />
              Hipokrates
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
                <NavLinks to='/specialists'>Specjalisci</NavLinks>
              </NavItem>

              <NavItem>
                <NavLinks to='/specialists'>Kontakt</NavLinks>
              </NavItem>

              <NavItemBtn>
                {button ? (
                  <NavBtnLink to='/sign-up'>
                    <Button fontBig primary>Zaloguj sie</Button>
                  </NavBtnLink>
                ) : (
                  <NavBtnLink to='/sign-up'>
                    <Button  primary> Zaloguj sie</Button>
                   
                  </NavBtnLink>
                )}
              </NavItemBtn>


            </NavMenu>
          </NavbarContainer>
        </Nav>
      </IconContext.Provider>
    </>
  );
};

