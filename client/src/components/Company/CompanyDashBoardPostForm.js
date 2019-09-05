import React from "react";

// Boostrap Components
import { Form, Button } from "react-bootstrap";

class CompanyDashBoardPostForm extends React.Component {
  render() {
    return (
      <div className="p-2 border border-muted">
        <h5 className="ml-2 mt-2">Post a new job vacancy</h5>
        <hr />
        <Form.Control
          type="text"
          name="vacantName"
          onChange={this.handleChange}
          autoComplete="off"
          placeholder="Job Name"
          className="mb-3"
        />
        <Form.Control
          type="text"
          name="experience"
          onChange={this.handleChange}
          autoComplete="off"
          placeholder="Experience"
          className="mb-3"
        />
        <Form.Control
          as="textarea"
          rows="3"
          placeholder="Description"
          className="mb-3"
        ></Form.Control>
        <Form.Control
          type="text"
          name="languagesRequired"
          onChange={this.handleChange}
          autoComplete="off"
          placeholder="Languages Required (Example : Python,Java)"
          className="mb-3"
        />
        <Button variant="success">Post</Button>
      </div>
    );
  }
}
export default CompanyDashBoardPostForm;
