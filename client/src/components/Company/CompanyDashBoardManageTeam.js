import React from "react";

// Bootsrap Company
import { Row, Col, Button, Table } from "react-bootstrap";

// Components
import CompanyDashBoardNewTeam from "./CompanyDashBoardNewTeamModal";

// context
import CompanyContext from "./CompanyContext";

class CompanyDashBoardManageTeam extends React.Component {
  constructor() {
    super();
    this.state = {
      isModalOpen: false
    };
  }

  // new team method
  addNewTeam = () => {
    this.setState({
      isModalOpen: true
    });
  };
  render() {
    console.log(this.context.companyData);
    return (
      <div className="border border-muted p-2">
        <CompanyDashBoardNewTeam
          isOpen={this.state.isModalOpen}
          handleClose={e => {
            this.setState({ isModalOpen: false });
          }}
        />
        <Row className="ml-2 mt-2">
          <Col md={10}>
            <h5>Your Teams</h5>
            <hr />

            {this.context.companyData.teams !== undefined
              ? this.context.companyData.teams.map((value, index) => {
                  return (
                    <div key={index}>
                      <h5 className="text-dark">
                        Team Name : {value.teamName}
                      </h5>

                      <Table striped bordered hover className="mt-2">
                        <thead>
                          <tr>
                            <th>Name</th>
                            <th>Twitter </th>
                            <th>Reddit Name</th>
                            <th>StackOverflow Id</th>
                            <th>Cluster</th>
                          </tr>
                        </thead>
                        <tbody>
                          {value.members.map((member, index2) => {
                            return (
                              <tr key={index2}>
                                <td>{member.name}</td>
                                <td>{member.twitterName}</td>
                                <td>{member.redditName}</td>
                                <td>{member.stackOverflowID}</td>
                              </tr>
                            );
                          })}
                        </tbody>
                      </Table>
                      <div className="mb-2">
                        <span>OverAll Cluster : Moderate</span>
                        <br></br>
                        <span>Cluster Index : 8.2</span>
                      </div>
                      <Button variant="danger" className="mr-2">
                        Edit{" "}
                      </Button>

                      <Button variant="success">
                        Hire People For {value.teamName}
                      </Button>
                      <hr />
                    </div>
                  );
                })
              : null}
          </Col>
          <Col md={2}>
            <Button variant="warning" onClick={this.addNewTeam}>
              New
            </Button>
          </Col>
        </Row>
        <hr />
      </div>
    );
  }
}
CompanyDashBoardManageTeam.contextType = CompanyContext;
export default CompanyDashBoardManageTeam;
