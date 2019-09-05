import React from "react";
class CompanyDashBoardActions extends React.Component {
  render() {
    return (
      <div className="border border-muted p-2 mt-2">
        <h5 className="pt-2 pl-2">Actions</h5>
        <hr />
        <div className="">
          <a href="/company/newpost" className="btn btn-link">
            Post A New Job Vacancy
          </a>
          <a href="#" className="btn btn-link">
            Search For Candidates
          </a>
          <a href="#" className="btn btn-link">
            View Job Applications
          </a>
        </div>
      </div>
    );
  }
}
export default CompanyDashBoardActions;
