import React from 'react';
import Project from './Project';

function ProjectMain() {
  const projects = [
    {
      Name: "Pizza Delivery System",
      Skills: "Node.js, React.js, Express.js, MongooDB, Socket.io, Nodemailer, RazorPay",
      Duration: "June 2023 to Present",
      link: "https://github.com/chetanbnagmoti/oibsip_task_3"
    },
    {
      Name: "Airline Reservation System",
      Skills: "Spring Boot, My-SQL, HTML, CSS, React JS, Bootstrap, Email.js and Axios",
      Duration: "Sep 2022 to Mar 2023",
      link: "https://github.com/chetanbnagmoti/CDAC-PROJECT-SEP-2022"
    },
    {
      Name: "Weather_App",
      Skills: "HTML, CSS, Bootstrap, and JavaScript. It leverages a third-party OpenWeatherMap API to provide real-time weather information to users.",
      Duration: "",
      link: "https://chetanbnagmoti.github.io/Weather_App/"
    },
    {
      Name: "Calculator",
      Skills: "JavaScript, HTML, CSS.",
      Duration: "",
      link: "https://chetanbnagmoti.github.io/Calculator_HTML_CSS_JavaScript/"
    },
    {
      Name: "Students_CURD_API",
      Skills: "Spring Boot, Java, API",
      Duration: "",
      link: "https://github.com/chetanbnagmoti/Students_CURD_API-"
    }
  ];

  return (
    <React.Fragment>
      <div className="container-fluid" >
        <h2 className="text text-white" >Projects</h2>
        <table className="table table-striped" style={{backgroundColor:'white'}}>
          <thead className="thead-dark">
            <tr>
              <th>Project Name</th>
              <th>Technology Used</th>
              <th>Duration</th>
              <th>GitHub Link</th>
            </tr>
          </thead>
          <tbody>
            {projects.map((project, index) => (
              <Project key={index} {...project} />
            ))}
          </tbody>
        </table>
      </div>
    </React.Fragment>
  );
}

export default ProjectMain;
