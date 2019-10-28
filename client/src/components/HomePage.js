import React, { Component } from "react";
import { MDBContainer, MDBRow, MDBCol } from "mdbreact";
import {FormattedMessage} from 'react-intl';
import FilterPage from "./FilterPage";

class HomePage extends Component {
  state = {
    isOpen: false
  };

  toggleCollapse = () => {
    this.setState({ isOpen: !this.state.isOpen });
  };

  render() {
    return (
      <div>
      <MDBContainer className="mt-5">
        <MDBRow>
          <MDBCol md="12" className="text-center">
            <img
              src="images/logo1.png"
              width="250px"
              alt=""
              className="img-fluid mx-auto d-block"
            />
            <h2 className="text-justify text-center mt-5">
              <FormattedMessage id="description.label"
                      defaultMessage="Nouvelles"
                      description="Link on react page"/>
            </h2>
            <a href="https://www.apple.com/ios/app-store/">
              <img
                width="200px"
                alt=""
                src="images/android.png"
                className="mr-3 mt-3"
              ></img>
            </a>
            <a href="https://www.apple.com/ios/app-store/">
              <img
                width="200px"
                alt=""
                src="images/ios.png"
                className="mt-3"
              ></img>
            </a>
          </MDBCol>
        </MDBRow>
      </MDBContainer>
      <FilterPage />
      </div>
    );
  }
}

export default HomePage;
