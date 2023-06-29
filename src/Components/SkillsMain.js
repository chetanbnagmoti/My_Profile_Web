import React from 'react';

function SkillsMain(props) {
    const{heading,conatine1,conatine2}=props;
  return (
    <React.Fragment>
      <div className='conatiner border border-3 mt-1' style={{backgroundColor:'white'}}>
        <table>
          <thead>
            <tr>
              <th colSpan="2">{heading}</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>{conatine1}</td>
              <td>{conatine2}</td>
            </tr>
          </tbody>
        </table>
      </div>
    </React.Fragment>
  );
}

export default SkillsMain;
