import React from 'react'
import pdf from '../accets/pdf/resume.pdf'


const contactMe=[
    {
      id:1,
      icon:'bi bi-house',
      name:'ADDRESS',
      content:'Mumbai,Maharashtra',
    },
    {
      id:2,
      icon:'bi bi-telephone',
      name:'CONTACT NUMBER',
      content:'8390569860',
    },
    {
      id:3,
      icon:'bi bi-send',
      name:'EMAIL ADDRESS',
      content:'chetanbnagmoti@gmail.com',
    },
    {
      id:4,
      icon:'bi bi-cloud-arrow-down',
      name:'DOWNLOAD RESUME',
      content:'Resume-link',
      pdf:pdf
    },
  
  ]


  const findMe=[
    {
        id:1,
        icon:'bi bi-youtube text-warning',
        link:'https://www.youtube.com/channel/UCECUbT9wN7jtERO6eUKvOww'
    },
    {
        id:2,
        icon:'bi bi-cloud-arrow-down text-warning',
        link:pdf
    },
    {
        id:3,
        icon:'bi bi-linkedin text-warning',
        link:'https://www.linkedin.com/in/chetan-nagmoti-18b6b9225/'
    },
    {
        id:4,
        icon:'bi bi-twitter text-warning',
        link:'https://twitter.com/chetubnag'
    },
    {
        id:5,
        icon:'bi bi-facebook text-warning',
        link:'https://www.facebook.com/chetan.nagmoti'
    },
    {
        id:6,
        icon:'bi bi-instagram text-warning',
        link:'https://www.instagram.com/chetannagmoti/'
    }
  ]

const ContactMe = () => {
  return (
    <div className="col-lg-12 text-center resume mb-5">
            <h1 className="pt-5 pb-2">Contact Me</h1>
            <hr className="custom-hr" />
            <p>Below are the details to reach out to me!</p>
            <div className="container mt-5">
              <div className="row justify-content-center">
                {
                  contactMe && contactMe.map((contact)=>(
                    <div key={contact.id +contact.name} className="col-lg-3 col-md-6 mb-3 d-flex flex-column justify-content-between align-items-center">
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
                      <i className={`${contact.icon} text-warning`}></i>
                    </h1>
                  </div>
                  <div className="text-white" style={{ marginBottom: "20px" }}>
                    {contact.name}
                  </div>
                  <div className="text-white">
                    {
                        contact.content === 'Resume-link' ? (

                            <a href={contact.pdf}  target="_blank" className="text-white">{contact.content}</a>
                        ): contact.name === 'EMAIL ADDRESS' ? (
                         
                            <a href={`mailto:${contact.content}`} target="_blank" className="text-white">{contact.content}</a>
                            
                        ):contact.name === 'CONTACT NUMBER' ? (
                            <a href={`https://wa.me/${contact.content}`} target="_blank" className="text-white">{contact.content}</a>
                            ):(
                                contact.content
                            )
                        }
                        
                    
                    
                    
                    </div>
                </div>
                  ))
                }
              </div>

              {/*find me */}
              <div
                className="row d-flex flex-column justify-content-center align-items-center"
                style={{ marginTop: "50px" }}
              >
                <div
                  className="col-lg-12 text-white"
                  style={{
                    fontSize: "25px",
                    fontWeight: "800",
                    margin: "25px",
                  }}
                >
                  Find me on
                </div>
                <div
                  className="d-flex flex-row justify-content-center align-items-center"
                  style={{ gap: "1rem" }}
                >


                    {
                        findMe && findMe.map((find)=>(
                            <a key={find.id} href={find.link} target="_blank" rel="noopener noreferrer">
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
                              className={`${find.icon}`}
                              style={{ fontSize: "24px" }}
                            ></i>
                          </div>
                          </a>
                        ))
                    }
                </div>
              </div>
            </div>
          </div>
  )
}

export default ContactMe