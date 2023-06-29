import React from 'react';
import Job from './Job';

function JobMain() {
  return (
    <React.Fragment>
      <div className="container">
        <h2>Work Experience</h2>
        <div className="row">
          <div className="col-md-12"> 
            <Job
              title="Oasis Info byte"
              date="(June 2023 to Present)"
              description="I have worked as an intern in the field of web development and Java programming, specializing in Node.js, Express.js, MongoDB, React.js, Java, Spring Boot, and MVC."
            />
          </div>
        </div>
        
        <div className="row mt-4 mb-2"> {/* Add margin-top for the gap */}
          <div className="col-md-12">
            <Job
              title="Freelance.com"
              date="(Sept 2020 - Aug 2022)"
              description="I have worked as a freelance software developer, specializing in Core Java, Advanced Java, MySQL Database, JavaScript, RESTful API, Postman, React.js, TypeScript, .NET Core, ASP.NET Core, ADO.NET, and Node.js."
            />
          </div>
        </div>
      </div>
    </React.Fragment>
  );
}

export default JobMain;
