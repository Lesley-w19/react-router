import React, { Suspense } from "react";
// import { Form } from "react-bootstrap";
import Input from "../components/Inputcontrol";
import Loading from "../components/Loading";
import Population from "../components/Populations";

const InputReftUse = React.lazy(() => import("../components/InputRefUse"));
const Contact = () => {
  return (
    <React.Fragment>
      <h1>Contact page</h1>
      <p> This is the Contact page</p>
      <div className="main">
        <h1>React AutoSuggestion Demo</h1>
        <div className="search-form">
          <div>
            <Input
              name="country"
              label="Enter name of a Country"
              placeholder="Type a country name"
            />
          </div>
        </div>

        <Population />

        <Suspense fallback={<Loading />}>
          <InputReftUse />
        </Suspense>
      </div>
    </React.Fragment>
  );
};
export default Contact;
