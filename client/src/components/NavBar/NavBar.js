import React from "react";

//Bootstrap Components
import { Navbar, Button } from "react-bootstrap";

// axios
import axios from "axios";

class NavBarHeader extends React.Component {
  constructor() {
    super();
    this.state = {
      isCompanyLoggedIn: false,
      isUserLoggedIn: false
    };
  }

  // Logout action
  handleLogout = () => {
    localStorage.setItem("authToken", "");
    localStorage.setItem("userAuthToken", "");
    window.location = "/companyLogin";
  };
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
        if (response.status !== 403) {
          this.setState({ isCompanyLoggedIn: true });
        }
      });

    // ///////
    const userHeaders = {
      Authorization: "Bearer " + localStorage.getItem("userAuthToken")
    };
    axios
      .post(
        "http://localhost:8000/api/user/getUserDetails",
        {},
        { headers: userHeaders }
      )
      .then(response => {
        if (response.status !== 403) {
          this.setState({
            isUserLoggedIn: true
          });
        }
      });
  }
  render() {
    return (
      <Navbar bg="dark" variant="dark">
        <Navbar.Brand>
          <span className="text-warning">Job</span> Affinity{" "}
          <span className="text-warning">Finder</span>
        </Navbar.Brand>
        <Navbar.Toggle />
        {this.state.isCompanyLoggedIn ? (
          // Company
          <Navbar.Collapse className="justify-content-end">
            <Navbar.Text>
              Signed in as: <a href="#login">Mark Otto</a>
            </Navbar.Text>
            <Button
              variant="warning"
              className="ml-2"
              onClick={this.handleLogout}
            >
              Logout
            </Button>
          </Navbar.Collapse>
        ) : this.state.isUserLoggedIn ? (
          // User
          <Navbar.Collapse className="justify-content-end">
            <Navbar.Text>
              Signed in as: <a href="#login">User</a>
            </Navbar.Text>
            <Button
              variant="warning"
              className="ml-2"
              onClick={this.handleLogout}
            >
              Logout
            </Button>
          </Navbar.Collapse>
        ) : (
          <Navbar.Collapse className="justify-content-end">
            <Button variant="warning" href="/companyLogin" className="mr-2">
              Login
            </Button>
            <Button variant="success" href="/companyRegister">
              Register
            </Button>
          </Navbar.Collapse>
        )}
      </Navbar>
    );
  }
}
export default NavBarHeader;
