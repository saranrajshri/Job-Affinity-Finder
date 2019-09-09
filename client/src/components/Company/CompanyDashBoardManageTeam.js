import React from "react";

// Bootsrap Company
import { Row, Col, Button } from "react-bootstrap";

class CompanyDashBoardManageTeam extends React.Component {
  render() {
    return (
      <div className="border border-muted p-2">
        <Row className="ml-2 mt-2">
          <Col md={10}>
            <h5>Your Team</h5>
          </Col>
          <Col md={2}>
            <Button variant="warning">New</Button>
          </Col>
        </Row>
        <hr />
      </div>
    );
  }
}
export default CompanyDashBoardManageTeam;
