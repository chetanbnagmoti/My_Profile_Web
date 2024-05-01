import React from 'react'

const aboutTable=[
    {
      id:1,
      heading:'Profile:',
      details:'MERN Full Stack Developer'
    },
    {
      id:2,
      heading:'Domain:',
      details:'Retail, Ecommerce, BFSI & Digital Marketing'
    },
    {
      id:3,
      heading:'Education:',
      details:'Bachelor of Engineering'
    },
    {
      id:4,
      heading:'Language:',
      details:'English, Hindi , Marathi'
    },
    {
      id:5,
      heading:'Tools',
      details:'Vs-code,Eclipis,Microsoft Vs Code'
    },
    {
      id:6,
      heading:'Other Skills:',
      details:'Cloud, AWS , Excel, Git, JIRA, Selenium'
    },
    {
      id:7,
      heading:'Interest:',
      details:'Traveling, Travel Photography, Teaching'
    }, 
  ]



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
      I possess over three years of valuable experience as a full-stack developer. 
      During this time, I have worked with various tools and languages, 
      such as Java and JavaScript, to conceptualize and develop innovative solutions. 
      My projects have spanned diverse domains and industries, 
      showcasing my versatility and adaptability to different technological landscapes.

        </p>
        <p>
        Throughout my career, I have led impactful projects that have delivered tangible results, 
        demonstrating my ability to navigate complex challenges and deliver solutions that drive business growth. 
        Moreover, I am passionate about mentorship and have actively provided guidance and support to junior team members,
         fostering a collaborative and learning-oriented environment.
        </p>
        <p>
        I am committed to leveraging my expertise to drive success and make a meaningful impact in the ever-evolving world of technology.
        </p>
      </div>
      <div className="table-responsive">
        <table className="table table-borderless">
          <tbody className="custom-tbody">
            {
              aboutTable && aboutTable.map((about,index)=>(
            <tr key={about.heading}>
              <td>{about.heading}</td>
              <td>{about.details}</td>
            </tr>
              ))
            }
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
  )
}

export default AboutUs