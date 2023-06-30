import React from "react";
import EducationMain from "./EducationMain";
import JobMain from "./JobMain";
import Skills from "./Skills";
import ProjectMain from "./ProjectMain";
import PersonalDetails from "./PersonalDetails";
import SocialActivities from "./SocialActivities";
import Contact from "./Conatct";


function Home() {
  return (
    <React.Fragment>
      <div className="container-fluid ">
       

        <div className="container mt-5  ">
           
          <hr />
          <br/>

          <div className="row">
            <div className="col-md-6">
              <Contact />
            </div>
            <div className="col-md-6">
              <EducationMain />
            </div>
          </div>

          <div className="row">
            <div className="col-md-6">
              <JobMain />
            </div>
            <div className="col-md-6">
              <Skills />
            </div>
          </div>

          <div className="row">
            <div className="col-md-12">
              <ProjectMain />
            </div>
          </div>

          <div className="row">
            <div className="col-md-6">
              <PersonalDetails />
            </div>
            <div className="col-md-6">
              <SocialActivities />
            </div>
          </div>
        </div>
      </div>
    </React.Fragment>
  );
}

export default Home;
