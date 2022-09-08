import React from "react";
import { Link } from "react-router-dom";
import Button from "../components/Button";

const PageNotFound = () => {
  return (
    <React.Fragment>
      <div className="wrapper">
        <h1>Page Not Found</h1>
        <p> This page is not found or has been redirected</p>
        <Link to="/">
          <Button variant="primary" size={"sm"}>
            Back to Home
          </Button>
        </Link>
      </div>
    </React.Fragment>
  );
};
export default PageNotFound;
