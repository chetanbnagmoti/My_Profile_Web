import React from "react";
import Resume from "./Resume";
import About from "../View/About";

function Home() {
  return (
    <React.Fragment>
      <About />
      <hr className="custom-hr" />
      <Resume />
    </React.Fragment>
  );
}

export default Home;
