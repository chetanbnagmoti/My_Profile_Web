import React from 'react'

const educationDetails=[
    {
      id:1,
      education:'Bachelor of Engineering',
      year:'2013-2017',
      institut:'Savitribai Phule Pune University',
      grade:'Grade: First class distinction.'
    },
    {
      id:2,
      education:'Post Graduate Diploma in Advance computing',
      year:'2022-2023',
      institut:'Centre for Development of Advanced Computing (C-DAC)',
      grade:'Grade: A'
    }
  ]



const EducationTwo = () => {
  return (
    <>
    <div className="col-lg-12 text-center resume mb-5">
            <h1 className="pt-5 pb-2">Education</h1>
            <hr className="custom-hr" />
            <div className="container mt-5">
              <div className="row justify-content-center">
                {
                  educationDetails && educationDetails.map((education)=>(
                <div key={education.id+education.year} className="col-lg-6 col-md-12 mb-3">
                  <div
                    className="card text-white bg-dark shadow-lg p-2"
                    style={{ maxWidth: "100%" }}
                  >
                    <div className="card-body ">
                      <h3 className="card-title text-left">{education.year}</h3>
                      <h5 className="card-subtitle mb-2 text-warning text-left">
                        {education.education}
                      </h5>
                      <h6 className="card-subtitle mb-1 mt-1 text-muted text-left">
                        {education.institut}
                      </h6>
                      <p className="card-text text-left text-secondary ">
                       {education.grade}
                      </p>
                    </div>
                  </div>
                </div>

                  ))
                }
              </div>
            </div>
          </div>
    
    </>
  )
}

export default EducationTwo