import React from 'react'
import pdf from '../accets/pdf/resume.pdf'

const Cv = () => {
  return (
    <div className="col-lg-12 text-center resume mb-5">
            {/* <h1 className="pt-5 pb-2">Education</h1> */}
            <div className="">
              <a
                role="button"
                href={pdf}
                target="_blank"
                className="btn btn-warning btn-outline-primary text-dark btn-lg border border-dark rounded-pill p-3"
              >
                DOWNLOAD CV
              </a>
            </div>
          </div>
  )
}

export default Cv