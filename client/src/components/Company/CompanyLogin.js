import React from "react";

// Components
import NavBarHeader from "../NavBar/NavBar";

// Bootstrap Components
import { Row, Col, Container, Form, Button } from "react-bootstrap";

class CompanyLogin extends React.Component {
  render() {
    return (
      <div>
        <NavBarHeader />
        <Container>
          <Row>
            <Col md={4}></Col>
            <Col md={4}>
              <div className="border border-muted p-3 mt-3 ">
                <h5 className="text-dark mmb-4">Company Login</h5>
                {/* F/orm */}
                <div className="mt-3">
                  <Form.Control
                    type="email"
                    placeholder="Email"
                    className="mb-3"
                  />
                  <Form.Control
                    type="password"
                    placeholder="Password"
                    className="mb-3"
                  />

                  <Button variant="success">Login</Button>
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
export default CompanyLogin;
