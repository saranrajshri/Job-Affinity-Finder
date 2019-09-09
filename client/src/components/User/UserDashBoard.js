import React from "react";

import axios from "axios";

// Components
import NavBar from "../NavBar/NavBar";

// Bootstrap Components
import { Row, Col } from "react-bootstrap";

// Components
import UserDashBoardDetails from "./UserDashBoardDetails";

class UserDashBoard extends React.Component {
  constructor() {
    super();
    this.state = {
      showPage: false
    };
  }
  componentDidMount() {
    const headers = {
      Authorization: "Bearer " + localStorage.getItem("userAuthToken")
    };
    axios
      .post(
        "http://localhost:8000/api/company/getCompanyDetails",
        {},
        { headers: headers }
      )
      .then(response => {
        this.setState({ showPage: true });
      });
  }
  render() {
    if (this.state.showPage === true) {
      return (
        <div>
          <NavBar />
          {/* Body */}
          <div>
            <Row>
              <Col md={3}>
                <UserDashBoardDetails />
              </Col>
              <Col md={9}></Col>
            </Row>
          </div>
        </div>
      );
    } else {
      return null;
    }
  }
}
export default UserDashBoard;
