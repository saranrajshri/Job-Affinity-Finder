import React from "react";

// Components
import NavBarHeader from "../NavBar/NavBar";
import Footer from "../Footer/Footer";

// Bootstrap Components
import { Row, Col, Container, Form, Button, Spinner } from "react-bootstrap";

// axios
import axios from "axios";

class UserRegister extends React.Component {
  constructor() {
    super();
    this.state = {
      userName: "",
      email: "",
      password: "",
      twitterName: "",
      redditName: "",
      stackOverFlowId: "",
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
      this.state.userName === "" &&
      this.state.email === "" &&
      this.state.password === "" &&
      this.state.twitterName === "" &&
      this.state.redditName === "" &&
      this.state.stackOverFlowId === ""
    ) {
      this.setState({
        errorText: "Enter All The Fields"
      });
    } else {
      axios
        .post("http://localhost:8000/api/user/register", {
          userName: this.state.userName,
          email: this.state.email,
          password: this.state.password,
          twitterName: this.state.twitterName,
          redditName: this.state.redditName,
          stackOverFlowId: this.state.stackOverFlowId
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
                <h5 className="text-dark">Register Your Account</h5>
                <Form.Text className="text-danger">
                  {this.state.errorText}
                </Form.Text>
                {/* F/orm */}
                <div className="mt-3">
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
                  <Form.Control
                    type="text"
                    name="twitterName"
                    placeholder="Twitter Name"
                    className="mb-3"
                    autoComplete="off"
                    onChange={this.handleChange}
                  />
                  <Form.Control
                    type="text"
                    name="redditName"
                    placeholder="Reddit Name"
                    className="mb-3"
                    autoComplete="off"
                    onChange={this.handleChange}
                  />
                  <Form.Control
                    type="text"
                    name="stackOverFlowId"
                    placeholder="StackOverflow ID"
                    className="mb-3"
                    autoComplete="off"
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
        <Footer />
      </div>
    );
  }
}
export default UserRegister;
