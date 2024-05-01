import React from 'react'
import ImageAndSkills from '../Components/ImageAndSkills'
import AboutUs from '../Components/AboutUs'

const About = () => {
  return (
    <div className="container-fluid ">
        <div className="row mt-5">
       <hr className="custom-hr" />
          {/* Image And Skills */}
          <ImageAndSkills />

          {/* About Us */}
          <AboutUs />
         
        </div>
      </div>
  )
}

export default About