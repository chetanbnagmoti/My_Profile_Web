import React from 'react'
import ProjectTwo from "./ProjectTwo";
import Experiencs from "./Experiencs";
import EducationTwo from "./EducationTwo";
import ImageAndSkills from "./ImageAndSkills";
import Git from "./Git";
import Cv from "./Cv";
import ContactMe from "./ContactMe";

const Resume = () => {
  return (
    <div className="conatiner-fluid mt-5" style={{ overflowX: "hidden" }}>
        <div className="row">
          <div className="col-lg-12 text-center resume">
            <h1 className="pt-5 pb-2">Resume</h1>
            <p>
             Seasoned Full Stack Developer with expertise in React, Node.js, MongoDB, Express.js. 
            </p>
          </div>
          {/* Experience */}
           <Experiencs />

          {/* Education */}
          <EducationTwo />

          {/* CV download  button*/}
          <Cv/>

          {/* Project */}
          <ProjectTwo />

          {/* {git } */}
          <Git />

          {/* contact me */}
           <ContactMe />

          {/* copyrigth */}
          <div className="col-lg-12 text-center resume mb-5">
            Copyright ©2024 All rights reserved | This template is made with{" "}
            <i class="bi bi-heart-fill"></i> by Colorlib
          </div>
        </div>
      </div>
  )
}

export default Resume