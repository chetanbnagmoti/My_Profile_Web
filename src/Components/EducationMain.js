import React from 'react';
import Education from './Education';

function EducationMain() {
  return (
    <React.Fragment>
      
      <div className="container">
      <h2>Education</h2>
        <div className="row">
          <div className="col-md-12">
            <div className="border border-3 p-3 mb-3">
              <Education
                course="Post Graduate Diploma in Advance Computing"
                institution="CDAC New Delhi"
                duration="Sep 2022 to March 2023"
                percentage="71%"
              />
            </div>
          </div>
          <div className="col-md-12">
            <div className="border border-3 p-3 mb-3">
              <Education
                course="Bachelor of Engineering in Mechanical"
                institution="Savitribai Phule Pune University"
                duration="March 2013 to Oct 2017"
                percentage="71.54%"
              />
            </div>
          </div>
        </div>
      </div>
    </React.Fragment>
  );
}

export default EducationMain;
