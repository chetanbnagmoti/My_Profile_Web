import React from "react";

const aboutTable = [
  {
    id: 1,
    heading: "Profile:",
    details: "MERN Full Stack Developer",
  },
  {
    id: 2,
    heading: "Domain:",
    details: "Retail, Ecommerce, & Digital Marketing",
  },
  {
    id: 3,
    heading: "Education:",
    details: "Bachelor of Engineering",
  },
  {
    id: 4,
    heading: "Language:",
    details: "English, Hindi , Marathi",
  },
  {
    id: 5,
    heading: "Tools",
    details: "Vs-code,Eclipis,Microsoft Vs Code",
  },
  {
    id: 6,
    heading: "Other Skills:",
    details: "Cloud, AWS , Excel, Git, JIRA, Selenium",
  },
];

const AboutUs = () => {
  return (
    <div className="col-lg-7">
      <div
        className="d-flex flex-column align-items-start about"
        style={{ gap: "1rem" }}
      >
        <div className="heading">About Me</div>
        <div className="content">
          <p>
            I am a Full Stack Developer and Team Leader with over 3 years of
            experience specializing in the MERN stack (MongoDB, Express.js,
            React.js, Node.js). Throughout my career, I have successfully led
            and developed numerous complex projects, delivering
            high-performance, scalable web applications.
          </p>
          <p>
            My expertise lies in designing robust backend architectures,
            creating dynamic frontend interfaces, and integrating third-party
            platforms seamlessly.
          </p>
          <p>
            I have worked extensively on complex API integrations, including:
          </p>
          <ul>
            <li>
              <a href="" style={{ color: "red" }}>
                {" "}
                Zoho ↔️ TempLogger
              </a>
            </li>
            <li>
              {" "}
              <a href="" style={{ color: "red", border: "none" }}>
                TempLogger ↔️ Zoho
              </a>{" "}
            </li>
            <li>
              {" "}
              <a href="" style={{ color: "red", border: "none" }}>
                Double Tick ↔️ Zoho
              </a>{" "}
            </li>
            <li>
              {" "}
              <a href="" style={{ color: "red", border: "none" }}>
                Gati ↔️ Zoho
              </a>{" "}
            </li>
            <li>
              {" "}
              <a href="" style={{ color: "red", border: "none" }}>
                Bigin Double Tick ↔️ Zoho Bigin
              </a>{" "}
            </li>
          </ul>
          <p>
            During this period, I have written and optimized several intricate
            API logics and resolved countless challenging issues across both
            frontend and backend systems.
          </p>
          <p>
            I continuously explore and learn modern technologies to enhance
            application performance and maintainability — including:
          </p>
          <ul>
            <li>
              <b>React Redux</b> for efficient global state management
            </li>
            <li>
              <b>React Query</b> for advanced caching and reducing redundant API
              calls
            </li>
          </ul>
          <p>
            I am passionate about clean code, scalable architecture, and
            continuous learning, always striving to deliver high-quality
            solutions that drive real business impact.
          </p>
        </div>
        <div className="table-responsive">
          <table className="table table-borderless">
            <tbody className="custom-tbody">
              {aboutTable &&
                aboutTable.map((about, index) => (
                  <tr key={about.heading}>
                    <td>{about.heading}</td>
                    <td>{about.details}</td>
                  </tr>
                ))}
            </tbody>
          </table>
        </div>
        <div className="project">
          <p>
            {" "}
            <span>30 + </span>Projects completed
          </p>
        </div>
        <div>
          <a
            role="button"
            target="_blank"
            href="https://www.linkedin.com/in/chetan-nagmoti-18b6b9225/"
            className="btn btn-warning btn-outline-dark btn-lg border border-dark rounded-pill"
          >
            LinkedIn
          </a>
        </div>
      </div>
    </div>
  );
};

export default AboutUs;
