import React from "react";

// Boostrap Components
import { Form, Button, Alert } from "react-bootstrap";

// Context
import CompanyContext from "./CompanyContext";

// axios
import axios from "axios";

var headers = {
  Authorization: "Bearer " + localStorage.getItem("authToken")
};
class CompanyDashBoardPostForm extends React.Component {
  constructor() {
    super();
    this.state = {
      vacantName: "",
      experience: "",
      description: "",
      languagesRequired: "",
      isSuccessAlertOpen: false
    };
  }

  // handle change
  handleChange = e => {
    this.setState({
      [e.target.name]: e.target.value
    });
  };

  // post action
  handlePost = () => {
    var data = {
      title: this.state.vacantName,
      experience: this.state.experience,
      description: this.state.description,
      languagesRequired: this.state.languagesRequired
    };

    axios
      .post(
        "http://localhost:8000/api/company/createNewPost",
        {
          email: localStorage.getItem("companyEmail"),
          jobPost: data
        },
        { headers: headers }
      )
      .then(response => {
        console.log(response.data);
        this.setState({
          isSuccessAlertOpen: true,
          vacantName: "",
          experience: "",
          description: "",
          languagesRequired: ""
        });
      })
      .catch(err => {
        console.log(err);
      });
  };
  render() {
    return (
      <div className="p-2 border border-muted">
        <Alert variant="success" show={this.state.isSuccessAlertOpen}>
          <b>The Job Has Been Posted Successfully !.</b>
        </Alert>
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
          onChange={this.handleChange}
          name="description"
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
        <Button variant="success" onClick={this.handlePost}>
          Post
        </Button>
      </div>
    );
  }
}
CompanyDashBoardPostForm.contextType = CompanyContext;
export default CompanyDashBoardPostForm;
