import React from 'react'
import { useMediaQuery } from "react-responsive";
import myImage from "../accets/images/my.jpg";


const skills = [
  {
    id: 1,
    name: "JavaScript",
    percent: '90'
  },
  {
    id: 2,
    name: "Java",
    percent: '85'
  },
  {
    id: 3,
    name: "C",
    percent: '60'
  },
  {
    id: 4,
    name: "C++",
    percent: '75'
  },
  {
    id: 5,
    name: "C#",
    percent: '55'
  },
  {
    id: 6,
    name: "React.js",
    percent: '90'
  },
  {
    id: 7,
    name: "Node.js",
    percent: '85'
  },
  {
    id: 8,
    name: "MongoDB",
    percent: '80'
  },
  {
    id: 9,
    name: "MySQL",
    percent: '85'
  },
  {
    id: 10,
    name: "Dot Net",
    percent: '65'
  },
  {
    id: 11,
    name: "Spring Boot",
    percent: '85'
  }
];



 

const ImageAndSkills = () => {
    const isSmallScreen = useMediaQuery({ maxWidth: 768 });
    const currentDate=new Date();
    const d = new Date("2021-8-01");
    const diffTime = Math.abs(currentDate - d);
    const diffDays = Math.floor(diffTime / (1000 * 60 * 60 * 24));
    let years = Math.floor(diffDays / 365);
    let remainingDays = diffDays % 365;
    let months = Math.floor(remainingDays / 30);
    remainingDays = remainingDays % 30;
    const exp=years + " years, " + months + " months, and " + remainingDays + " days."


  
    const selfInfo = [
      {
        id: 1,
        heading: "Name",
        details: "Chetan Nagmoti",
      },
      {
        id: 2,
        heading: "Job Role",
        details: "MERN Full Stack Developer",
      },
      {
        id: 3,
        heading: "Experience",
        details: exp
      },
      {
        id: 4,
        heading: "Address",
        details: "Mumabi, India",
      },
    ];

  return (
   <>
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
                            {
                              selfInfo && selfInfo.map((self)=>(
                            <tr key={self.heading}>
                              <td>{self.heading}</td>
                              <td>:</td>
                              <td>{self.details}</td>
                            </tr>
                              ))
                            }
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
                  <div>
                    {
                      skills && skills
                      .slice() // Create a shallow copy of the skills array to avoid mutating the original array
                      .sort((a, b) => parseInt(b.percent) - parseInt(a.percent)) // Sort the array based on percent (from highest to lowest) 
                      .map((skill,index)=>(
                        <div key={skill.name} style={{ marginBottom: "1rem" }}>
                        <div>{skill.name}{' '}{skill.percent}%</div>
                        <div className="progress" style={{ height: "15px" }}>
                          <div
                            key={`${skill.percent}`}
                            className="progress-bar bg-warning progress-bar-striped  progress-bar-animated"
                            style={{ width: `${skill.percent}%` ,color:'black'}}
                            role="progressbar"
                            aria-valuenow={skill.percent}
                            aria-valuemin="0"
                            aria-valuemax="100"
                          >
                            {skill.percent}%
                          </div>
                        </div>
                      </div>
                      ))
                    }
                  </div>
                </div>
              </div>
            </div>
          </div>
   
   
   </>
  )
}

export default ImageAndSkills