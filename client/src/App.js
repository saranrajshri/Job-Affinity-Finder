import React from "react";
import "./App.css";
import "bootstrap/dist/css/bootstrap.css";

//Routers
import { BrowserRouter as Router } from "react-router-dom";

// Components

// Company
import CompanyRegister from "./components/Company/CompanyRegister";
import CompanyLogin from "./components/Company/CompanyLogin";
import CompanyDashBoard from "./components/Company/CompanyDashBoard";
// User
import UserRegister from "./components/User/UserRegister";
import UserLogin from "./components/User/UserLogin";
import UserDashBoard from "./components/User/UserDashBoard";

//React Router(dont change the order of this react router)
const Route = require("react-router-dom").Route;

function App() {
  return (
    <div>
      <Router>
        <Route
          path="/companyRegister"
          exact
          component={CompanyRegister}
        ></Route>
        <Route path="/companyLogin" exact component={CompanyLogin}></Route>
        <Route
          path="/company/dashboard"
          exact
          component={CompanyDashBoard}
        ></Route>
        <Route path="/userRegister" exact component={UserRegister}></Route>
        <Route path="/userLogin" exact component={UserLogin}></Route>
        <Route path="/user/dashboard" exact component={UserDashBoard}></Route>
      </Router>
    </div>
  );
}

export default App;
