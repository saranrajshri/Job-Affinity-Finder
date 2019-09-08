import React from "react";

// context
import CompanyContext from "./CompanyContext";
import { Button } from "react-bootstrap";

class CompanyDashBoardQuickBox extends React.Component {
  render() {
    return (
      <div>
        <div className=" p-2 border border-muted">
          <h5 className="page-heading m-3">Activity Wall</h5>
          <hr />
          <button href="#" className="btn btn-link">
            SaranrajShri
          </button>{" "}
          applied for the SQL Engineer{" - "}
          <span className="text text-muted small">
            [1 day ago] [
            <button href="#" className="btn btn-link small">
              Show Analysis
            </button>
            ]
          </span>
          <br />
          <button href="#" className="btn btn-link">
            Santhosh
          </button>{" "}
          applied for the MEAN Stack Developer Post
          {" - "}
          <span className="text text-muted small">
            [1 day ago] [
            <button href="#" className="btn btn-link small">
              Show Analysis
            </button>
            ]
          </span>
        </div>
        <div className="border border-muted mt-2 p-2">
          <h5 className="page-heading m-3">Your Posts</h5>
          <hr />
          {this.context.companyData.jobPosts !== undefined
            ? this.context.companyData.jobPosts.map((value, index) => {
                return (
                  <div key={index} className="ml-2">
                    <h5 href="#" className="text-primary">
                      {value.title}
                    </h5>{" "}
                    <span>Experience : {value.experience}</span>
                    <br />
                    <span>Description : {value.description}</span>
                    <br />
                    <span>Languages Required: {value.languagesRequired}</span>
                    <br />
                    <span>Calculated Job Index : 8.2</span>
                    <br />
                    <Button
                      variant="success"
                      className="mb-2 mt-2 btn btn-small"
                    >
                      Edit{" "}
                    </Button>
                    <Button
                      variant="warning"
                      className="ml-2 mt-2 mb-2 btn btn-small"
                    >
                      Get Talents
                    </Button>
                    <hr />
                  </div>
                );
              })
            : null}
        </div>
      </div>
    );
  }
}
CompanyDashBoardQuickBox.contextType = CompanyContext;
export default CompanyDashBoardQuickBox;
