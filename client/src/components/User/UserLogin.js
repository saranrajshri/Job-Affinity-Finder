import React from "react";

// Components
import NavBarHeader from "../NavBar/NavBar";
import Footer from "../Footer/Footer";

// Bootstrap Components
import { Row, Col, Container, Form, Button, Spinner } from "react-bootstrap";

// axios
import axios from "axios";

class UserLogin extends React.Component {
  constructor() {
    super();
    this.state = {
      email: "",
      password: "",
      isLoading: "",
      errorText: ""
    };
  }

  // update inputs values to state
  handleChange = e => {
    this.setState({
      [e.target.name]: e.target.value
    });
  };

  // Login btn action
  handleLogin = () => {
    // Show Spinner
    this.setState({ isLoading: true });
    // Check For null inputs
    if (this.state.email === "" && this.state.password === "") {
      this.setState({
        errorText: "Enter All Fields"
      });
    } else {
      axios
        .post("http://localhost:8000/api/company/login", {
          email: this.state.email,
          password: this.state.password
        })
        .then(response => {
          // save the auth token in local storage
          localStorage.setItem("authToken", response.data["token"]);
          // redirect to dashboard
          window.location = "/company/dashboard";
        })
        .catch(err => {
          console.log(err);
        });
    }
  };
  render() {
    return (
      <div>
        <NavBarHeader />
        <Container>
          <Row>
            <Col md={4}></Col>
            <Col md={4}>
              <div className="border border-muted p-3 mt-3 ">
                <h5 className="text-dark mmb-4">User Login</h5>
                {/* F/orm */}
                <div className="mt-3">
                  <Form.Control
                    type="email"
                    name="email"
                    onChange={this.handleChange}
                    autoComplete="off"
                    placeholder="Email"
                    className="mb-3"
                  />
                  <Form.Control
                    type="password"
                    name="password"
                    onChange={this.handleChange}
                    placeholder="Password"
                    className="mb-3"
                  />
                  {this.state.isLoading ? (
                    <Button variant="success" disabled>
                      <Spinner
                        as="span"
                        animation="grow"
                        size="sm"
                        role="status"
                        aria-hidden="true"
                      />
                      Loading...
                    </Button>
                  ) : (
                    <Button variant="success" onClick={this.handleLogin}>
                      Login
                    </Button>
                  )}
                </div>
                {/* Form End */}
              </div>
            </Col>
            <Col md={4}></Col>
          </Row>
        </Container>
        <Footer />
      </div>
    );
  }
}
export default UserLogin;
