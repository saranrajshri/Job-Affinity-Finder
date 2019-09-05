import React from "react";

// Bootstrap Components
import { Row, Col, Button } from "react-bootstrap";

class CompanyDashBoardQuickBox extends React.Component {
  render() {
    return (
      <div className=" p-2 border border-muted">
        <h5 className="page-heading m-3">Activity Wall</h5>
        <hr />
        <p>
          <a href="#">SaranrajShri</a> applied for the SQL Engineer{" - "}
          <span className="text text-muted small">
            [1 day ago] [<a href="#">Show Analysis</a>]
          </span>
        </p>
        <p>
          <a href="#">Santhosh</a> applied for the MEAN Stack Developer Post
          {" - "}
          <span className="text text-muted small">
            [1 day ago] [<a href="#">Show Analysis</a>]
          </span>
        </p>
      </div>
    );
  }
}
export default CompanyDashBoardQuickBox;
