import React, { useState } from "react";
import {
  MDBNavbar,
  MDBNavbarBrand,
  MDBNavbarNav,
  MDBNavItem,
  MDBNavbarToggler,
  MDBCollapse,
  MDBDropdown,
  MDBDropdownToggle,
  MDBDropdownMenu,
  MDBDropdownItem,
  MDBIcon,
  MDBContainer
} from "mdbreact";

import { NavLink } from "react-router-dom";
import { FormattedMessage } from 'react-intl';

const NavbarPage = () => {
  const [isOpen, setisOpen] = useState(false);
  const [value, setValue] = useState("fr");
  const onClick = () => {
    if (value === "fr") {
      setValue("ar");
      localStorage.setItem('language', "ar");
    }
    else {
      setValue("fr");
      localStorage.setItem('language', "fr");
    }
  };
  const toggleCollapse = () => {
    setisOpen(!isOpen)
  };


  return (
    <MDBNavbar color="indigo accent-2" dark expand="md">
      <MDBContainer>
        <MDBNavbarBrand>
          <img width="200px" src="/images/logo.png" alt="logoside" />
        </MDBNavbarBrand>
        <MDBNavbarToggler onClick={toggleCollapse} />
        <MDBCollapse id="navbarCollapse3" isOpen={isOpen} navbar>
          <MDBNavbarNav right>
            <MDBNavItem className="mr-4 mt-2 links">
              <NavLink
                className="font-weight-bold"
                to="/"
              >
                <FormattedMessage id="accueil.label"
                  defaultMessage="Acceuil"
                  description="Link on react page" />
              </NavLink>
            </MDBNavItem>
            <MDBNavItem className="mr-4 mt-2 links">
              <NavLink
                className="font-weight-bold text-white"
                to="/dashboard/1"
              >
                <FormattedMessage id="dashboard.label"
                  defaultMessage="Acceuil"
                  description="Link on react page" />
              </NavLink>
            </MDBNavItem>
            <MDBNavItem>
              <button id="myButton" type="button" onClick={onClick} className="btn btn-white mr-4 btn-sm">
                <FormattedMessage id="lang.label"
                  defaultMessage="Français"
                  description="Link on react page" />
              </button>
            </MDBNavItem>
            <MDBNavItem>
              <MDBDropdown>
                <MDBDropdownToggle nav caret>
                  <MDBIcon icon="user" />
                </MDBDropdownToggle>
                <MDBDropdownMenu className="dropdown-default">
                  <MDBDropdownItem href="#!"> <FormattedMessage id="signout.label"
                    defaultMessage="Français"
                    description="Link on react page" /></MDBDropdownItem>
                </MDBDropdownMenu>
              </MDBDropdown>
            </MDBNavItem>
          </MDBNavbarNav>
        </MDBCollapse>
      </MDBContainer>
    </MDBNavbar>
  );
}

export default NavbarPage;
