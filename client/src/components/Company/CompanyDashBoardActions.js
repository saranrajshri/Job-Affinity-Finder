import React from "react";

// Context
import CompanyContext from "./CompanyContext";

class CompanyDashBoardActions extends React.Component {
  render() {
    return (
      <div className="border border-muted p-2 mt-2">
        <h5 className="pt-2 pl-2">Actions</h5>
        <hr />
        <div className="">
          <button
            onClick={this.context.showCreateNewPost}
            className="btn btn-link"
          >
            Post A New Job Vacancy
          </button>
          <button
            href="#"
            onClick={this.context.showManageTeam}
            className="btn btn-link"
          >
            Manage Your Team
          </button>
          <button href="#" className="btn btn-link">
            Search For Candidates
          </button>
          <button
            href="#"
            onClick={this.context.showJobApplications}
            className="btn btn-link"
          >
            View Job Applications
          </button>
        </div>
      </div>
    );
  }
}
CompanyDashBoardActions.contextType = CompanyContext;
export default CompanyDashBoardActions;
