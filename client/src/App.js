import React from "react";
import "./App.css";
import "bootstrap/dist/css/bootstrap.css";

//Routers
import { BrowserRouter as Router } from "react-router-dom";

// Components
import CompanyRegister from "./components/Company/CompanyRegister";
import CompanyLogin from "./components/Company/CompanyLogin";

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
      </Router>
    </div>
  );
}

export default App;
