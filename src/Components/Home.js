import React from "react";
import myImage from "../accets/images/my.jpg";
import airport from "../accets/images/homepage.jpg";
import gitImage from "../accets/images/git.jpg";
import { useMediaQuery } from "react-responsive";

const projects = [
  {
    id: 1,
    title: "Digital Music Store Data Analysis using SQL",
    description:
      "Analyzed music store data using advanced SQL queries to identify gaps and increase business growth.",
    imageUrl:
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcROaVOG79tRrh89_ds97qFvY7OkGS4HwO0VD0zCbC0LqA&s", // Assuming airport is the variable holding the image URL
  },
  {
    id: 2,
    title: "Data Analysis using Python Project for Beginners",
    description:
      "Performed exploratory data analysis on diwali sales data using Python to improve the customer experience.",
    imageUrl:
      "https://www.shutterstock.com/image-photo/presentation-project-management-areas-knowledge-600nw-706715482.jpg",
  },
  {
    id: 3,
    title: "Power BI Sales dashboard Project for Beginners",
    description:
      "Designed a power bi dashboard for Madhav Store to track and analyze the online sales data acorss India.",
    imageUrl:
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRXlJpbjY0FHwS4O_WZ_M6zApCpydsE-xXPkkXc7QY0yA&s", // Assuming airport is the variable holding the image URL
  },
  {
    id: 4,
    title: "Sales Forecast- Time Series Forecasting",
    description:
      "Used multiple machine learning models to forecast sales (retail store) and performed time series analysis.",
    imageUrl:
      "https://img.freepik.com/free-photo/business-data-analysis_53876-95296.jpg", // Assuming airport is the variable holding the image URL
  },
  {
    id: 5,
    title: "Customer Segmentation using clustering model",
    description:
      "Developed a ML model to give various recommendations of financial products & services on target customer groups.",
    imageUrl: airport, // Assuming airport is the variable holding the image URL
  },
  // Add more projects as needed
];

function Home() {
  const isSmallScreen = useMediaQuery({ maxWidth: 768 });
  return (
    <React.Fragment>
      <div className="container-fluid ">
        <div className="row mt-5">
          {/* Image And Skills */}
          <div className="col-lg-5">
            <div className="container-fluid">
              <div className="row">
                {/* Image And Info */}
                <div className="col-lg-12">
                  <div
                    className={`d-lg-flex d-sm-flex  ${
                      isSmallScreen
                        ? "justify-content-center"
                        : "justify-content-start"
                    } align-items-center  mt-2`}
                    style={{ gap: "1rem" }}
                  >
                    <div
                      className={`rounded-circle ${
                        isSmallScreen ? "m-auto" : ""
                      }`}
                      style={{
                        width: "200px",
                        height: "200px",
                        borderRadius: "50%",
                        border: "5px solid white",
                      }}
                    >
                      <img
                        src={myImage}
                        alt="Description of the image"
                        className="img-fluid rounded-circle"
                        style={{
                          width: "100%",
                          height: "100%",
                          objectFit: "cover",
                          borderRadius: "50%",
                        }}
                      />
                    </div>
                    <div
                      className={` ${
                        isSmallScreen
                          ? "d-flex justify-content-center align-items-center "
                          : ""
                      } `}
                    >
                      <div
                        className={` ${
                          isSmallScreen ? "" : "table-responsive"
                        } text-white`}
                      >
                        <table
                          className="table text-white  table-borderless "
                          style={{ fontSize: "18px" }}
                        >
                          <tbody>
                            <tr>
                              <td>Name</td>
                              <td>:</td>
                              <td>Chetan Nagmoti</td>
                            </tr>
                            <tr>
                              <td>Job Role</td>
                              <td>:</td>
                              <td>Senior Data Analyst</td>
                            </tr>
                            <tr>
                              <td>Experience</td>
                              <td>:</td>
                              <td>5 Years 3 Months</td>
                            </tr>
                            <tr>
                              <td>Address</td>
                              <td>:</td>
                              <td>Bengaluru, India</td>
                            </tr>
                          </tbody>
                        </table>
                      </div>
                    </div>
                  </div>
                </div>
                {/* Skills */}
                <div className="col-lg-12 text-white">
                  <div
                    style={{
                      marginBottom: "1rem",
                      marginTop: isSmallScreen ? "0rem" : "1rem",
                    }}
                  >
                    Skills
                  </div>
                  <div style={{ marginBottom: "1rem" }}>
                    <div>SQL 95%</div>
                    <div className="progress" style={{ height: "15px" }}>
                      <div
                        className="progress-bar bg-warning progress-bar-striped  progress-bar-animated"
                        style={{ width: "95%" }}
                        role="progressbar"
                        aria-valuenow="95"
                        aria-valuemin="0"
                        aria-valuemax="100"
                      >
                        95%
                      </div>
                    </div>
                  </div>
                  <div style={{ marginBottom: "1rem" }}>
                    <div>PYTHON 85%</div>
                    <div className="progress" style={{ height: "15px" }}>
                      <div
                        className="progress-bar bg-warning progress-bar-striped  progress-bar-animated"
                        role="progressbar"
                        style={{ width: "85%" }}
                        aria-valuenow="85"
                        aria-valuemin="0"
                        aria-valuemax="100"
                      >
                        85%
                      </div>
                    </div>
                  </div>
                  <div style={{ marginBottom: "1rem" }}>
                    <div>Data Visualization 90%</div>
                    <div className="progress" style={{ height: "15px" }}>
                      <div
                        className="progress-bar bg-warning progress-bar-striped  progress-bar-animated"
                        role="progressbar"
                        style={{ width: "90%" }}
                        aria-valuenow="90"
                        aria-valuemin="0"
                        aria-valuemax="100"
                      >
                        90%
                      </div>
                    </div>
                  </div>
                  <div style={{ marginBottom: "1rem" }}>
                    <div>Statistical Analysis 85%</div>
                    <div className="progress" style={{ height: "15px" }}>
                      <div
                        className="progress-bar bg-warning progress-bar-striped  progress-bar-animated"
                        role="progressbar"
                        style={{ width: "85%" }}
                        aria-valuenow="85"
                        aria-valuemin="0"
                        aria-valuemax="100"
                      >
                        85%
                      </div>
                    </div>
                  </div>
                  <div style={{ marginBottom: "1rem" }}>
                    <div>Machine Learning 80%</div>
                    <div className="progress" style={{ height: "15px" }}>
                      <div
                        className="progress-bar bg-warning progress-bar-striped  progress-bar-animated"
                        role="progressbar"
                        style={{ width: "80%" }}
                        aria-valuenow="80"
                        aria-valuemin="0"
                        aria-valuemax="100"
                      >
                        75%
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* About Us */}
          <div className="col-lg-7">
            <div
              className="d-flex flex-column align-items-start about"
              style={{ gap: "1rem" }}
            >
              <div className="heading">About Me</div>
              <div className="content">
                With over 5 years of comprehensive experience in the field of
                data science & analytics, accompanied by a bachelor's degree in
                engineering. Proficient in data analysis, statistical analysis,
                hypothesis testing, customer behaviour analysis, & machine
                learning. Demonstrated success in leading impactful projects and
                providing effective mentorship.
              </div>
              <div className="table-responsive">
                <table className="table table-borderless">
                  <tbody className="custom-tbody">
                    <tr>
                      <td>Profile:</td>
                      <td>Data Science & Analytics</td>
                    </tr>
                    <tr>
                      <td>Domain:</td>
                      <td>Retail, Ecommerce, BFSI & Digital Marketing</td>
                    </tr>
                    <tr>
                      <td>Education:</td>
                      <td>Bachelor of Engineering</td>
                    </tr>
                    <tr>
                      <td>Language:</td>
                      <td>English, Hindi</td>
                    </tr>
                    <tr>
                      <td>BI Tools:</td>
                      <td>Microsoft Power BI, Looker & Tableau</td>
                    </tr>
                    <tr>
                      <td>Other Skills:</td>
                      <td>
                        Cloud, PySpark, Excel, Git, JIRA, Google Analytics & SEO
                      </td>
                    </tr>
                    <tr>
                      <td>Interest:</td>
                      <td>Traveling, Travel Photography, Teaching</td>
                    </tr>
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
                  href="https://www.linkedin.com/"
                  className="btn btn-warning btn-outline-dark btn-lg border border-dark rounded-pill"
                >
                  LinkedIn
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
      {/* Resume */}
      <div className="conatiner-fluid mt-5" style={{ overflowX: "hidden" }}>
        <div className="row">
          <div className="col-lg-12 text-center resume">
            <h1 className="pt-5 pb-2">Resume</h1>
            <p>
              Seasoned Senior Data Analyst with 5+ years of experience driving
              business strategies through data-driven insights.
            </p>
            <p>
              Proven expertise in data science, statistical analysis, machine
              learning algorithms and project management.
            </p>
          </div>
          {/* Experience */}
          <div className="col-lg-12 text-center resume mb-5">
            <h1 className="pt-5 pb-2">Experience</h1>
            <hr className="custom-hr" />
            <div className="container mt-5">
              <div className="row justify-content-center">
                <div className="col-lg-6 col-md-12 mb-3">
                  <div
                    className="card text-white bg-dark shadow-lg"
                    style={{ maxWidth: "100%" }}
                  >
                    <div className="card-body ">
                      <h3 className="card-title text-left">2021-Present</h3>
                      <h4 className="card-subtitle mb-2 text-warning text-left">
                        Senior Data Analyst
                      </h4>
                      <h6 className="card-subtitle mb-2 text-muted text-left">
                        MERKLE
                      </h6>
                      <p className="card-text text-left text-secondary ">
                        Merkle, a leading CXM and media company with over 10K+
                        professionals globally. It's a part of Dentsu
                        International.
                      </p>
                      <div className=" text-muted text-left">
                        <ul className="">
                          <li className="">
                            Analysed ad campaigns, clickstream, and customer
                            surveys data, identified an increasing demand and
                            launched a strategic product line.
                          </li>
                          <li className="">
                            Developed time series forecasting models to predict
                            sales and optimize marketing budgets, got model
                            performance of 92%
                          </li>
                          <li className="">
                            Designed and executed A/B tests, performed rigorous
                            statistical analysis. Led to 20% MoM increase in the
                            conversion rate.m
                          </li>
                        </ul>
                      </div>
                      <div class=" text-left d-flex flex-column">
                        <a href="#" class="text-secondary">
                          Project-1 Link
                        </a>
                        <a href="#" class="text-secondary">
                          Project-2 Link
                        </a>
                        <a href="#" class="text-secondary">
                          Company Link
                        </a>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="col-lg-6 col-md-12 mb-3">
                  <div
                    className="card text-white bg-dark shadow-lg"
                    style={{ maxWidth: "100%", maxHeight: "100%" }}
                  >
                    <div className="card-body">
                      <h3 className="card-title text-left">2018-2021</h3>
                      <h4 className="card-subtitle mb-2 text-warning text-left">
                        Senior Data Analyst
                      </h4>
                      <h6 className="card-subtitle mb-2 text-muted text-left">
                        IQUANT
                      </h6>
                      <p className="card-text text-secondary text-left">
                        iQuanti is a data-driven digital marketing analytics and
                        solutions company, helps top 100 global brands.
                      </p>
                      <div className=" text-muted text-left">
                        <ul className="">
                          <li className="">
                            Performed in-depth market research and analysis to
                            create online pages. Resulted in ~100% website
                            growth and 30% increase in conversion rate YoY.
                          </li>
                          <li className="">
                            Delivered multiple training and mentorship sessions
                            on analytical tools like SQL, MS Excel, Power BI,
                            Tableau and Python.
                          </li>
                          <li className="">
                            Performed migration and enhancements for
                            merchandising dashboard, involved data integration
                            and its feature improvement.
                          </li>
                        </ul>
                      </div>
                      <div class=" text-left d-flex flex-column">
                        <a href="#" class="text-secondary">
                          Project-1 Link
                        </a>
                        <a href="#" class="text-secondary">
                          Project-2 Link
                        </a>
                        <a href="#" class="text-secondary">
                          Company Link
                        </a>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Education */}
          <div className="col-lg-12 text-center resume mb-5">
            <h1 className="pt-5 pb-2">Education</h1>
            <hr className="custom-hr" />
            <div className="container mt-5">
              <div className="row justify-content-center">
                <div className="col-lg-6 col-md-12 mb-3">
                  <div
                    className="card text-white bg-dark shadow-lg p-2"
                    style={{ maxWidth: "100%" }}
                  >
                    <div className="card-body ">
                      <h3 className="card-title text-left">2014-2018</h3>
                      <h4 className="card-subtitle mb-2 text-warning text-left">
                        Bachelor of Engineering
                      </h4>
                      <h6 className="card-subtitle mb-1 mt-1 text-muted text-left">
                        VISVESVARAYA TECHNOLOGICAL UNIVERSITY
                      </h6>
                      <p className="card-text text-left text-secondary ">
                        Grade: First class distinction.
                      </p>
                    </div>
                  </div>
                </div>
                <div className="col-lg-6 col-md-12 mb-3">
                  <div
                    className="card text-white bg-dark shadow-lg p-2"
                    style={{ maxWidth: "100%" }}
                  >
                    <div className="card-body ">
                      <h3 className="card-title text-left">2014-2018</h3>
                      <h4 className="card-subtitle mb-2 text-warning text-left">
                        Bachelor of Engineering
                      </h4>
                      <h6 className="card-subtitle mb-1 mt-1 text-muted text-left">
                        VISVESVARAYA TECHNOLOGICAL UNIVERSITY
                      </h6>
                      <p className="card-text text-left text-secondary ">
                        Grade: First class distinction.
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* CV download  button*/}
          <div className="col-lg-12 text-center resume mb-5">
            {/* <h1 className="pt-5 pb-2">Education</h1> */}
            <div className="">
              <a
                role="button"
                href="https://www.linkedin.com/"
                className="btn btn-warning btn-outline-primary text-dark btn-lg border border-dark rounded-pill p-3"
              >
                DOWNLOAD CV
              </a>
            </div>
          </div>

          {/* Project */}
          <div className="col-lg-12 text-center resume mb-5">
            <h1 className="pt-5 pb-2">Projects</h1>
            <hr className="custom-hr" />
            <p>
              Below are the sample Data Analytics projects on SQL, Python, Power
              BI & ML.
            </p>
            <div className="container mt-5">
              <div className="row justify-content-center">
                {projects.map((project, index) => (
                  <div
                    key={index}
                    className="col-lg-4 col-md-6 mb-3 d-flex justify-content-center"
                  >
                    <div
                      className="text-white bg-dark shadow-lg"
                      style={{ maxWidth: "100%" }}
                    >
                      <img
                        src={project.imageUrl}
                        className="card-img-top "
                        alt="..."
                        style={{ height: "200px" }}
                      />
                      <div className="card-body">
                        <h5 className="card-title">{project.title}</h5>
                        <p className="card-text text-muted">
                          {project.description}
                        </p>
                        <a href="#" className="btn  btn-outline-warning">
                          Visit
                        </a>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* {git } */}
          <div
            className="col-lg-12 text-center resume mb-5"
            style={{
              position: "relative",
              height: "400px",
              marginTop: "100px",
            }}
          >
            <img
              src={gitImage}
              alt="git.png"
              className="img-fluid img-responsive"
              style={{
                width: "100%",
                height: "100%",
                objectFit: "cover",
                opacity: "0.6",
              }}
            />
            <div
              style={{
                position: isSmallScreen ? "" : "absolute",
                top: isSmallScreen ? "-50%" : "0%",
                left: isSmallScreen ? "0%" : "50%",
                transform: isSmallScreen
                  ? "translate(0%, 0%)"
                  : "translate(-50%, -50%)",
                width: "100%",
              }}
            >
              <div className="container mt-3 text-center">
                <div className="row justify-content-center">
                  <div className="col-lg-3 col-md-6 mb-3">
                    <div
                      className="card text-white shadow-lg p-2"
                      style={{
                        maxWidth: "100%",
                        backgroundColor: "rgb(25, 40, 50)",
                      }}
                    >
                      <div className="card-body">
                        <h3 className="card-title text-warning">20</h3>
                        <p className="card-text text-white">Achievements</p>
                      </div>
                    </div>
                  </div>
                  <div className="col-lg-3 col-md-6 mb-3">
                    <div
                      className="card text-white shadow-lg p-2"
                      style={{
                        maxWidth: "100%",
                        backgroundColor: "rgb(25, 40, 50)",
                      }}
                    >
                      <div className="card-body">
                        <h3 className="card-title text-warning">30</h3>
                        <p className="card-text text-white">Projects</p>
                      </div>
                    </div>
                  </div>
                  <div className="col-lg-3 col-md-6 mb-3">
                    <div
                      className="card text-white shadow-lg p-2"
                      style={{
                        maxWidth: "100%",
                        backgroundColor: "rgb(25, 40, 50)",
                      }}
                    >
                      <div className="card-body">
                        <h3 className="card-title text-warning">1,000</h3>
                        <p className="card-text text-white">
                          Mentored Students
                        </p>
                      </div>
                    </div>
                  </div>
                  <div className="col-lg-3 col-md-6 mb-3">
                    <div
                      className="card text-white shadow-lg p-2"
                      style={{
                        maxWidth: "100%",
                        backgroundColor: "rgb(25, 40, 50)",
                      }}
                    >
                      <div className="card-body">
                        <h3 className="card-title text-warning">500</h3>
                        <p className="card-text text-white">Cups of coffee</p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div
              style={{
                position: "absolute",
                top: "50%",
                left: "50%",
                transform: "translate(-50%, -50%)",
              }}
            >
              <h1 className="text-white">
                More projects on <span className="text-warning">Github</span>{" "}
              </h1>
              <p
                className="text-white"
                style={{ fontSize: "larger", fontWeight: "700" }}
              >
                I love to solve business problems & uncover hidden data stories
              </p>
              <div className="">
                <a
                  role="button"
                  href="https://www.linkedin.com/"
                  className="btn btn-warning btn-outline-primary text-dark btn-lg border border-dark rounded-pill w-50"
                >
                  Github
                </a>
              </div>
            </div>
          </div>

          {/* contact me */}
          <div className="col-lg-12 text-center resume mb-5">
            <h1 className="pt-5 pb-2">Contact Me</h1>
            <hr className="custom-hr" />
            <p>Below are the details to reach out to me!</p>
            <div className="container mt-5">
              <div className="row justify-content-center">
                <div className="col-lg-3 col-md-6 mb-3 d-flex flex-column justify-content-between align-items-center">
                  <div
                    style={{
                      backgroundColor: "rgb(25, 40, 50)",
                      width: "100px",
                      height: "100px",
                      borderRadius: "50%",
                      display: "flex",
                      justifyContent: "center",
                      alignItems: "center",
                      marginBottom: "20px",
                    }}
                  >
                    <h1 className="text-white">
                      <i className="bi bi-house text-warning"></i>
                    </h1>
                  </div>
                  <div className="text-white" style={{ marginBottom: "20px" }}>
                    Address
                  </div>
                  <div className="text-white">Bengaluru, India</div>
                </div>
                <div className="col-lg-3 col-md-6 mb-3 d-flex flex-column justify-content-between align-items-center">
                  <div
                    style={{
                      backgroundColor: "rgb(25, 40, 50)",
                      width: "100px",
                      height: "100px",
                      borderRadius: "50%",
                      display: "flex",
                      justifyContent: "center",
                      alignItems: "center",
                      marginBottom: "20px",
                    }}
                  >
                    <h1 className="text-white">
                      <i className="bi bi-telephone text-warning"></i>
                    </h1>
                  </div>
                  <div className="text-white" style={{ marginBottom: "20px" }}>
                    CONTACT NUMBER
                  </div>
                  <div className="text-white">+ 0 101 0101 101</div>
                </div>
                <div className="col-lg-3 col-md-6 mb-3 d-flex flex-column justify-content-between align-items-center">
                  <div
                    style={{
                      backgroundColor: "rgb(25, 40, 50)",
                      width: "100px",
                      height: "100px",
                      borderRadius: "50%",
                      display: "flex",
                      justifyContent: "center",
                      alignItems: "center",
                      marginBottom: "20px",
                    }}
                  >
                    <h1 className="text-white">
                      <i className="bi bi-send text-warning"></i>
                    </h1>
                  </div>
                  <div className="text-white" style={{ marginBottom: "20px" }}>
                    EMAIL ADDRESS
                  </div>
                  <div className="text-white">conctact@domainname.com</div>
                </div>
                <div className="col-lg-3 col-md-6 mb-3 d-flex flex-column justify-content-between align-items-center">
                  <div
                    style={{
                      backgroundColor: "rgb(25, 40, 50)",
                      width: "100px",
                      height: "100px",
                      borderRadius: "50%",
                      display: "flex",
                      justifyContent: "center",
                      alignItems: "center",
                      marginBottom: "20px",
                    }}
                  >
                    <h1 className="text-white">
                      <i className="bi bi-cloud-arrow-down text-warning"></i>
                    </h1>
                  </div>
                  <div className="text-white" style={{ marginBottom: "20px" }}>
                    DOWNLOAD RESUME
                  </div>
                  <div className="text-white">resumelink</div>
                </div>
              </div>
              <div
                className="row d-flex flex-column justify-content-center align-items-center"
                style={{ marginTop: "50px" }}
              >
                <div
                  className="col-lg-12 text-white"
                  style={{ fontSize: "25px", fontWeight: "800" ,margin:'25px'}}
                >
                  Find me on
                </div>
                <div className="d-flex flex-row justify-content-center align-items-center" style={{gap:'1rem'}}>
                <div
                  style={{
                    backgroundColor: "rgb(25, 40, 50)",
                    width: "50px",
                    height: "50px",
                    borderRadius: "50%",
                    display: "flex",
                    justifyContent: "center",
                    alignItems: "center",
                    marginBottom: "20px",
                  }}
                >
                  <i className="bi bi-youtube text-warning" style={{ fontSize: "24px" }}></i>
                 
                </div>
                <div
                  style={{
                    backgroundColor: "rgb(25, 40, 50)",
                    width: "50px",
                    height: "50px",
                    borderRadius: "50%",
                    display: "flex",
                    justifyContent: "center",
                    alignItems: "center",
                    marginBottom: "20px",
                  }}
                >
                  <i
                    className="bi bi-cloud-arrow-down text-warning"
                    style={{ fontSize: "24px" }}
                  ></i>
                </div>
                <div
                  style={{
                    backgroundColor: "rgb(25, 40, 50)",
                    width: "50px",
                    height: "50px",
                    borderRadius: "50%",
                    display: "flex",
                    justifyContent: "center",
                    alignItems: "center",
                    marginBottom: "20px",
                  }}
                >
                 
                  <i
                    className="bi bi-linkedin text-warning"
                    style={{ fontSize: "24px" }}
                  ></i>
                </div>  
                <div
                  style={{
                    backgroundColor: "rgb(25, 40, 50)",
                    width: "50px",
                    height: "50px",
                    borderRadius: "50%",
                    display: "flex",
                    justifyContent: "center",
                    alignItems: "center",
                    marginBottom: "20px",
                  }}
                >
                  <i
                    className="bi bi-twitter text-warning"
                    style={{ fontSize: "24px" }}
                  ></i>
                </div>   
                <div
                  style={{
                    backgroundColor: "rgb(25, 40, 50)",
                    width: "50px",
                    height: "50px",
                    borderRadius: "50%",
                    display: "flex",
                    justifyContent: "center",
                    alignItems: "center",
                    marginBottom: "20px",
                  }}
                >
                  <i
                    className="bi bi-facebook text-warning"
                    style={{ fontSize: "24px" }}
                  ></i>
                </div> 
                <div
                  style={{
                    backgroundColor: "rgb(25, 40, 50)",
                    width: "50px",
                    height: "50px",
                    borderRadius: "50%",
                    display: "flex",
                    justifyContent: "center",
                    alignItems: "center",
                    marginBottom: "20px",
                  }}
                >
                  <i
                    className="bi bi-instagram text-warning"
                    style={{ fontSize: "24px" }}
                  ></i>
                </div>       
                </div>
              </div>
            </div>
          </div>

          {/* copyrigth */}
          <div className="col-lg-12 text-center resume mb-5">
          Copyright ©2024 All rights reserved | This template is made with <i class="bi bi-heart-fill"></i>  by Colorlib
          </div>
        </div>
      </div>
    </React.Fragment>
  );
}

export default Home;
