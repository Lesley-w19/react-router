import React, { Fragment } from "react";

const Home = () => {
  const styleHome = {
    fontSize: 14,
    color: "#4a54f1",
    textAlign: "center",
    paddingTop: "100px",
  };
  return (
    <Fragment>
      <div className="wrapper" style={styleHome}>
        <div className="home">
          <h1>Home page</h1>
          <p> This is the Home page</p>
        </div>
      </div>
    </Fragment>
  );
};
export default Home;
