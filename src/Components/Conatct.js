import React from "react";

function Contact() {
  const name = "Chetan Balwant Nagmoti";
  const email = "chetanbnagmoti@gmail.com";
  const mobileNo = "8390569860";
  const github = "https://github.com/chetanbnagmoti";
  const linkedin = "https://www.linkedin.com/in/chetan-nagmoti-18b6b9225/";

  return (
    <React.Fragment>
      <h2>Contact</h2>
      <div className="container">
        <div className="row">
          <div className="col-12">
            <ul className="list-group">
              <li className="list-group-item">
                <strong>{name}</strong>
              </li>
              <li className="list-group-item">{email}</li>
              <li className="list-group-item">{mobileNo}</li>
              <li className="list-group-item">
                <a href={linkedin} target="_blank" rel="noopener noreferrer">
                  LinkedIn
                </a>
              </li>
              <li className="list-group-item">
                <a href={github} target="_blank" rel="noopener noreferrer">
                  GitHub
                </a>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </React.Fragment>
  );
}

export default Contact;
