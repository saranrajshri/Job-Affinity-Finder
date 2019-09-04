import React from "react";

// Components
import NavBarHeader from "../NavBar/NavBar";
// axios
import axios from "axios";

class CompanyDashBoard extends React.Component {
  constructor() {
    super();
    this.state = {
      showPage: false
    };
  }
  componentDidMount() {
    //   Validate whether the user is logged in or not
    const headers = {
      Authorization: "Bearer " + localStorage.getItem("authToken")
    };
    axios
      .post(
        "http://localhost:8000/api/company/getCompanyDetails",
        {},
        {
          headers: headers
        }
      )
      .then(() => {
        this.setState({ showPage: true });
      });
  }
  render() {
    if (this.state.showPage === true) {
      return (
        <div>
          <NavBarHeader />
        </div>
      );
    } else {
      return null;
    }
  }
}
export default CompanyDashBoard;
