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
import CompanyDashBoardPostForm from "./CompanyDashBoardPostForm";

class CompanyDashBoardNewPost extends React.Component {
  constructor() {
    super();
    this.state = {
      showPage: false
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
      .then(() => {
        this.setState({ showPage: true });
      });
  }
  render() {
    if (this.state.showPage === true) {
      return (
        <div>
          <NavBarHeader />
          <Container className="mt-3">
            <Row>
              <Col md={3}>
                <CompanyDashBoardDetails />
                <CompanyDashBoardActions />
              </Col>
              <Col md={9}>
                <CompanyDashBoardPostForm />
              </Col>
            </Row>
          </Container>
        </div>
      );
    } else {
      return null;
    }
  }
}
export default CompanyDashBoardNewPost;
