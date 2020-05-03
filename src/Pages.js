import React from "react";
import { Link, useLocation, Route } from "react-router-dom";
import Step1 from "./components/Step1";
import Step2 from "./components/Step2";
import Result from "./components/Result";

const Pages = () => {
  const location = useLocation();
  return (
    <>
      <nav className="container">
        <ul className="steps">
          <li className={location.pathname === "/" ? "active" : ""}>
            <Link to="/">Step 1</Link>
          </li>
          <li className={location.pathname === "/step2" ? "active" : ""}>
            <Link to="/step2">Step 2</Link>
          </li>
          <li className={location.pathname === "/result" ? "active" : ""}>
            <Link to="/result">Result</Link>
          </li>
        </ul>
      </nav>
      <Route exact path="/" component={Step1} />
      <Route path="/step2" component={Step2} />
      <Route path="/result" component={Result} />
    </>
  );
};

export default Pages;
