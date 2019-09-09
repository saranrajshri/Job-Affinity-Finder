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
              <button className="btn btn-link mr-2">Login</button>
              <button href="#" className="btn btn-link mr-2">
                Register
              </button>
              <button href="#" className="btn btn-link  mr-2">
                Contact Us
              </button>
            </center>

            <center>
              a{" "}
              <button
                href="https://www.linkedin.com/in/saranrajshri/"
                className="text-primary btn btn-link"
              >
                Shrisaranraj
              </button>{" "}
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
