import React, { Component } from "react";
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

class NavbarPage extends Component {
  state = {
    isOpen: false
  };

  toggleCollapse = () => {
    this.setState({ isOpen: !this.state.isOpen });
  };

  render() {
    return (
      <MDBNavbar color="indigo accent-2" dark expand="md">
        <MDBContainer>
          <MDBNavbarBrand>
            <img width="200px" src="images/logo.png" alt="logoside" />
          </MDBNavbarBrand>
          <MDBNavbarToggler onClick={this.toggleCollapse} />
          <MDBCollapse id="navbarCollapse3" isOpen={this.state.isOpen} navbar>
            <MDBNavbarNav right>
              <MDBNavItem className="mr-4 mt-2 links">
                <NavLink
                  activeClassName="active"
                  exact
                  className="font-weight-bold"
                  to="#!"
                >
                  Acceuil
                </NavLink>
              </MDBNavItem>
              <MDBNavItem className="mr-4 mt-2 links">
                <NavLink
                  activeClassName="active"
                  className="font-weight-bold"
                  to="#!"
                >
                  Nouvelles
                </NavLink>
              </MDBNavItem>
              <MDBNavItem className="mr-4 mt-2 links">
                <NavLink
                  activeClassName="active"
                  className="font-weight-bold"
                  to="#!"
                >
                  Classement
                </NavLink>
              </MDBNavItem>
              <MDBNavItem>
                <button type="button" className="btn btn-white mr-4 btn-sm">
                  Français
                </button>
              </MDBNavItem>
              <MDBNavItem>
                <MDBDropdown>
                  <MDBDropdownToggle nav caret>
                    <MDBIcon icon="user" />
                  </MDBDropdownToggle>
                  <MDBDropdownMenu className="dropdown-default">
                    <MDBDropdownItem href="#!">Sign in</MDBDropdownItem>
                    <MDBDropdownItem href="#!">Sign up</MDBDropdownItem>
                  </MDBDropdownMenu>
                </MDBDropdown>
              </MDBNavItem>
            </MDBNavbarNav>
          </MDBCollapse>
        </MDBContainer>
      </MDBNavbar>
    );
  }
}

export default NavbarPage;
