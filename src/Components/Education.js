import React from 'react'

function Education(props) {
const { course, institution, duration ,percentage} = props;
  return (
    
    <React.Fragment>
     
        <div>
            <h5>{course} </h5>
            <span>{institution}<br/></span>
            <sapn>{duration}<br/></sapn>
            <sapn>{percentage}</sapn>
        </div>
     
    </React.Fragment>
  )
}

export default Education