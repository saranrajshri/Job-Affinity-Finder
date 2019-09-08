import React from "react";

// Bootstrap Componets
import { Row, Col } from "react-bootstrap";

class Footer extends React.Component {
  render() {
    return (
      <div>
        <Row>
          <Col md={4}></Col>
          <Col md={4}>
            <center className="mt-2">
              <a href="#" className="mr-2">
                Login
              </a>
              <a href="#" className="mr-2">
                Register
              </a>
              <a href="#" className="mr-2">
                Contact Us
              </a>
            </center>

            <center>
              a{" "}
              <a
                href="https://www.linkedin.com/in/saranrajshri/"
                className="text-primary"
              >
                Shrisaranraj
              </a>{" "}
              production
            </center>
          </Col>
          <Col md={4}></Col>
        </Row>
      </div>
    );
  }
}
export default Footer;
