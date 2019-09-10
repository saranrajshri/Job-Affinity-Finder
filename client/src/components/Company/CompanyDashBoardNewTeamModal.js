import React from "react";

// Bootsrap Components
import { Modal, Button, Form } from "react-bootstrap";

// import axios
import axios from "axios";

// context
import CompanyContext from "./CompanyContext";

class CompanyDashBoardNewTeamModal extends React.Component {
  constructor() {
    super();
    this.state = {
      teamName: "",
      name: "",
      twitterName: "",
      redditName: "",
      stackOverFlowID: ""
    };
  }

  // handleChange
  handleChange = e => {
    this.setState({
      [e.target.name]: e.target.value
    });
  };

  //  submit action
  addNewTeam = () => {
    axios
      .post("http://localhost:8000/api/company/createNewTeam", {
        email: this.context.companyData.email,
        teams: {
          teamName: this.state.teamName,
          members: [
            {
              name: this.state.name,
              twitterName: this.state.twitterName,
              redditName: this.state.redditName,
              stackOverFlowID: this.state.stackOverFlowID
            }
          ]
        }
      })
      .then(response => {
        console.log(response);
        this.props.handleClose();
      })
      .catch(err => {
        console.log(err);
      });
  };

  render() {
    return (
      <div>
        <Modal show={this.props.isOpen} onHide={this.props.handleClose}>
          <Modal.Header closeButton>
            <Modal.Title>Add a new team</Modal.Title>
          </Modal.Header>
          <Modal.Body>
            <Form.Control
              type="text"
              name="teamName"
              onChange={this.handleChange}
              autoComplete="off"
              placeholder="Team Name"
              className="mb-3"
            />
            <hr />
            <label className="mb-2 text-dark">Team Leader Details</label>
            <Form.Control
              type="text"
              name="name"
              onChange={this.handleChange}
              autoComplete="off"
              placeholder=" Name"
              className="mb-3"
            />
            <Form.Control
              type="text"
              name="twitterName"
              onChange={this.handleChange}
              autoComplete="off"
              placeholder=" Twitter Name"
              className="mb-3"
            />
            <Form.Control
              type="text"
              name="redditName"
              onChange={this.handleChange}
              autoComplete="off"
              placeholder=" Reddit Name"
              className="mb-3"
            />
            <Form.Control
              type="text"
              name="stackOverFlowID"
              onChange={this.handleChange}
              autoComplete="off"
              placeholder="StackOverFlow ID"
              className="mb-3"
            />
          </Modal.Body>
          <Modal.Footer>
            <Button variant="secondary" onClick={this.props.handleClose}>
              Close
            </Button>
            <Button variant="primary" onClick={this.addNewTeam}>
              Save
            </Button>
          </Modal.Footer>
        </Modal>
      </div>
    );
  }
}
CompanyDashBoardNewTeamModal.contextType = CompanyContext;
export default CompanyDashBoardNewTeamModal;
