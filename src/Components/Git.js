import React from 'react'
import gitImage from "../accets/images/git.jpg";
import { useMediaQuery } from "react-responsive";

const achievements = [
    {
      id: 1,
      number: 20,
      name: "Achievements",
    },
    {
      id: 2,
      number: 30,
      name: "Projects",
    },
    {
      id: 3,
      number: 1000,
      name: "Mentored Students",
    },
    {
      id: 4,
      number: 500,
      name: "Cups of coffee",
    },
  ];



const Git = () => {
    const isSmallScreen = useMediaQuery({ maxWidth: 768 });
  return (
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
            {!isSmallScreen && (
              <div
                style={{
                  position: isSmallScreen ? "" : "absolute",
                  top: isSmallScreen ? "0%" : "0%",
                  left: isSmallScreen ? "0%" : "50%",
                  transform: isSmallScreen
                    ? "translate(0%, 0%)"
                    : "translate(-50%, -50%)",
                  width: "100%",
                }}
              >
                <div className="container mt-3 text-center">
                  <div className="row justify-content-center">
                    {achievements &&
                      achievements.map((achievement) => (
                        <div
                          key={achievement.id + achievement.name}
                          className="col-lg-3 col-md-3 mb-3"
                        >
                          <div
                            className="card text-white shadow-lg p-2"
                            style={{ backgroundColor: "rgb(25, 40, 50)" }}
                          >
                            <div className="card-body d-flex flex-column justify-content-center align-items-center">
                              <h3 className="card-title text-warning">
                                {achievement.number}
                              </h3>
                              <p className="card-text text-white">
                                {achievement.name}
                              </p>
                            </div>
                          </div>
                        </div>
                      ))}
                  </div>
                </div>
              </div>
            )}
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
                  href="https://github.com/chetanbnagmoti"
                  target='_blank'
                  className="btn btn-warning btn-outline-primary text-dark btn-lg border border-dark rounded-pill w-50"
                >
                  Github
                </a>
              </div>
            </div>
          </div>
  )
}

export default Git