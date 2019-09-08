import React from "react";

// context
import CompanyContext from "./CompanyContext";

var imgUrl =
  "data:image/png;base64,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";
class CompanyDashBoardDetails extends React.Component {
  render() {
    return (
      <div className="p-2 border border-muted">
        <center>
          <img src={imgUrl} alt=""></img>
        </center>
        {/* Details */}
        <div className="mt-3">
          <span className="text-dark ">
            <b>Company Name :</b>
            {this.context.companyData.companyName}
          </span>
          <br />
          <span className="text-dark ">
            <b>Email Name :</b> {this.context.companyData.email}
          </span>
          <br />
          <span className="text-dark ">
            <b>User Name :</b> {this.context.companyData.userName}
          </span>
        </div>
      </div>
    );
  }
}
CompanyDashBoardDetails.contextType = CompanyContext;
export default CompanyDashBoardDetails;
