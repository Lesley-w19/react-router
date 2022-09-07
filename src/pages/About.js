import React from "react";
import Button from "../components/Button";

const About = () => {
  return (
    <>
      <h1>About page</h1>
      <p> This is the About page</p>

      <Button variant="info" size={"sm"} color="white">Small button</Button>
      <Button variant="success" size={"lg"} >Smaller Button</Button>
    </>
  );
};
export default About;
