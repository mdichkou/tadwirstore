import React, { Component } from "react";
import { MDBContainer, MDBRow, MDBCol } from "mdbreact";

class HomePage extends Component {
  state = {
    isOpen: false
  };

  toggleCollapse = () => {
    this.setState({ isOpen: !this.state.isOpen });
  };

  render() {
    return (
      <MDBContainer className="mt-5">
        <MDBRow>
          <MDBCol md="12" className="text-center">
            <img
              src="images/logo1.png"
              width="350px"
              alt=""
              className="img-fluid mx-auto d-block"
            />
            <h1 className="text-justify text-center mt-5">
              <strong>TadwirStore</strong> Website est une platforme pour
            </h1>
            <h1 className="text-justify text-center">
              acheter et vendre vos déchets pour le recyclage
            </h1>
            <a href="https://www.apple.com/ios/app-store/">
              <img
                width="300px"
                alt=""
                src="images/android.png"
                className="mr-3 mt-3"
              ></img>
            </a>
            <a href="https://www.apple.com/ios/app-store/">
              <img
                width="300px"
                alt=""
                src="images/ios.png"
                className="mt-3"
              ></img>
            </a>
          </MDBCol>
        </MDBRow>
      </MDBContainer>
    );
  }
}

export default HomePage;
