import React from 'react';
import SkillsMain from './SkillsMain';

function Skills() {
  return (
    <React.Fragment>
      <div className="container">
      <h2>Skills</h2>
        <div className="row">
          <div className="col-md-12">
            <SkillsMain
              heading="Front End Technology"
              conatine1="HTML, CSS, JavaScript"
              conatine2="React.js, Bootstrap, TypeScript"
            />
          </div>
        </div>
        <div className="row">
          <div className="col-md-12">
            <SkillsMain
              heading="Back End Technology"
              conatine1="C++, C#, Java"
              conatine2="Spring Boot, Hibernate, JSP, Maven, Node.js, .Net-Core"
            />
          </div>
        </div>
        <div className="row">
          <div className="col-md-12">
            <SkillsMain heading="Data Base Technology" conatine1="My-SQL, Mongo-DB" />
          </div>
        </div>
        <div className="row">
          <div className="col-md-12">
            <SkillsMain
              heading="Dev ops Tools"
              conatine1="GitHub, Docker, Kubernetes, Jenkins, Jira, Selenium"
            />
          </div>
        </div>
        <div className="row">
          <div className="col-md-12">
            <SkillsMain heading="API Test Tool" conatine1="Postman" />
          </div>
        </div>
        <div className="row">
          <div className="col-md-12">
            <SkillsMain heading="IDE/Tools" conatine1="Eclipse, Vs-Code, MS-CIT" />
          </div>
        </div>
      </div>
    </React.Fragment>
  );
}

export default Skills;
