import React from 'react'

function Job(props) {
    const{title,date,description} = props;
  return (
    <React.Fragment>
        <div className='container border border-3'>
            <h5>{title}</h5>
            <span>{date}<br/></span>
            <p>{description}</p>
        </div>
    </React.Fragment>
  )
}

export default Job