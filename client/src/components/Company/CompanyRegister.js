import React from "react";

// Components
import NavBarHeader from "../NavBar/NavBar";

// Bootstrap Components
import { Row, Col, Container, Form, Button, Spinner } from "react-bootstrap";

// axios
import axios from "axios";

class CompanyRegister extends React.Component {
  constructor() {
    super();
    this.state = {
      companyName: "",
      userName: "",
      email: "",
      password: "",
      isLoading: false,
      errorText: ""
    };
  }

  // Update input val to the state
  handleChange = e => {
    this.setState({
      [e.target.name]: e.target.value
    });
  };

  // register btn action
  handleRegister = () => {
    this.setState({
      isLoading: true
    });
    if (
      this.state.companyName === "" &&
      this.state.userName === "" &&
      this.state.email === "" &&
      this.state.password === ""
    ) {
      this.setState({
        errorText: "Enter All The Fields"
      });
    } else {
      axios
        .post("http://localhost:8000/api/company/register", {
          companyName: this.state.companyName,
          userName: this.state.userName,
          email: this.state.email,
          password: this.state.password
        })
        .then(response => {
          console.log(response);
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
                <h5 className="text-dark">Register Your Company</h5>
                <Form.Text className="text-danger">
                  {this.state.errorText}
                </Form.Text>
                {/* F/orm */}
                <div className="mt-3">
                  <Form.Control
                    type="text"
                    name="companyName"
                    placeholder="Company Name"
                    className="mb-3"
                    autoComplete="off"
                    onChange={this.handleChange}
                  />

                  <Form.Control
                    type="text"
                    name="userName"
                    placeholder="Username"
                    className="mb-3"
                    autoComplete="off"
                    onChange={this.handleChange}
                  />
                  <Form.Control
                    type="email"
                    name="email"
                    placeholder="Email"
                    className="mb-3"
                    autoComplete="off"
                    onChange={this.handleChange}
                  />
                  <Form.Control
                    type="password"
                    name="password"
                    placeholder="Password"
                    className="mb-3"
                    onChange={this.handleChange}
                  />
                  <Form.Check
                    type="checkbox"
                    label="I Agree To The Conditions"
                    className="mb-3"
                  />
                  {this.state.isLoading ? (
                    <Button variant="warning" disabled>
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
                    <Button variant="warning" onClick={this.handleRegister}>
                      Register
                    </Button>
                  )}
                </div>
                {/* Form End */}
              </div>
            </Col>
            <Col md={4}></Col>
          </Row>
        </Container>
      </div>
    );
  }
}
export default CompanyRegister;
