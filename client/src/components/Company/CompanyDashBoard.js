// This page is just a layout of components

import React from "react";

// Components
import NavBarHeader from "../NavBar/NavBar";

// axios
import axios from "axios";

// Bootstrap Components
import { Container, Row, Col } from "react-bootstrap";

// Components
import CompanyDashBoardDetails from "./CompanyDashBoardDetails";
import CompanyDashBoardActions from "./CompanyDashBoardActions";
import CompanyDashBoardQuickBox from "./CompanyDashBoardQuickBox";
import CompanyDashBoardNewPostForm from "./CompanyDashBoardPostForm";
import CompanyDashBoardManageTeam from "./CompanyDashBoardManageTeam";

// Context
import CompanyContext from "./CompanyContext";

class CompanyDashBoard extends React.Component {
  constructor() {
    super();
    this.state = {
      showPage: false,
      companyData: [],
      isNewPostOpen: false,
      isManageTeamOpen: false
    };
  }
  componentDidMount() {
    //   Validate whether the user is logged in or not
    const headers = {
      Authorization: "Bearer " + localStorage.getItem("authToken")
    };
    axios
      .post(
        "http://localhost:8000/api/company/getCompanyDetails",
        {},
        { headers: headers }
      )
      .then(response => {
        this.setState({
          showPage: true
        });

        // get all details of the company
        axios
          .post("http://localhost:8000/api/company/getAllDetails", {
            email: response.data.authData.companyData.email
          })
          .then(response => {
            this.setState({ companyData: response.data[0] });
          });

        localStorage.setItem(
          "companyEmail",
          response.data.authData.companyData.email
        );
      });
  }

  // update company data
  updateCompanyData = data => {
    this.setState({
      companyData: data
    });
  };

  // show
  showCreateNewPost = () => {
    this.setState({
      isNewPostOpen: true
    });
  };

  // Show Quick BOx
  showJobApplications = () => {
    this.setState({
      showJobApplications: true,
      isNewPostOpen: false,
      isManageTeamOpen: false
    });
  };
  // show Manage team
  showManageTeam = () => {
    this.setState({
      isManageTeamOpen: true,
      isNewPostOpen: false,
      showJobApplications: false
    });
  };
  render() {
    if (this.state.showPage === true) {
      return (
        <CompanyContext.Provider
          value={{
            ...this.state,
            updateCompanyData: this.updateCompanyData,
            showCreateNewPost: this.showCreateNewPost,
            showJobApplications: this.showJobApplications,
            showManageTeam: this.showManageTeam
          }}
        >
          <NavBarHeader />
          <Container className="mt-3">
            <Row>
              <Col md={3}>
                <CompanyDashBoardDetails />
                <CompanyDashBoardActions />
              </Col>
              <Col md={9}>
                {this.state.isNewPostOpen ? (
                  <CompanyDashBoardNewPostForm />
                ) : this.state.isManageTeamOpen ? (
                  <CompanyDashBoardManageTeam />
                ) : (
                  <CompanyDashBoardManageTeam />
                )}
              </Col>
            </Row>
          </Container>
        </CompanyContext.Provider>
      );
    } else {
      return null;
    }
  }
}
CompanyDashBoard.contextType = CompanyContext;
export default CompanyDashBoard;
