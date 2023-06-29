import React from 'react';

function PersonalDetails() {
  return (
    <>
    <h3>Personal Details</h3>
    <div className="container" style={{backgroundColor:'white'}}>
      
      <table className="table">
        <tbody>
          <tr>
            <td>Nationality:</td>
            <td>Indian</td>
          </tr>
          <tr>
            <td>Gender:</td>
            <td>Male</td>
          </tr>
          <tr>
            <td>Date of Birth:</td>
            <td>10/10/1995</td>
          </tr>
          <tr>
            <td>Address:</td>
            <td>34, Geeta Nagar, Deopur, Dhule, 424002</td>
          </tr>
          <tr>
            <td>Language:</td>
            <td>English, Hindi, Marathi</td>
          </tr>
          <tr>
            <td>Hobbies:</td>
            <td>Reading Books, Playing badminton, Travelling to and exploring new places</td>
          </tr>
        </tbody>
      </table>
    </div>
    </>
  );
}

export default PersonalDetails;
