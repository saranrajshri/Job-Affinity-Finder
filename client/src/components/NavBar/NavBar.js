import React from "react";

//Bootstrap Components
import { Navbar, Button } from "react-bootstrap";

class NavBarHeader extends React.Component {
  render() {
    return (
      <Navbar bg="dark" variant="dark">
        <Navbar.Brand>
          <span className="text-warning">Job</span> Affinity{" "}
          <span className="text-warning">Finder</span>
        </Navbar.Brand>
        <Navbar.Toggle />
        <Navbar.Collapse className="justify-content-end">
          <Button variant="warning" className="mr-2">
            Login
          </Button>
          <Button variant="success">Register</Button>
        </Navbar.Collapse>
      </Navbar>
    );
  }
}
export default NavBarHeader;
