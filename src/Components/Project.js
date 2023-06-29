import React from 'react';

function Project(props) {
  const { Name, Skills, Duration, link } = props;
  return (
    <tr>
      <td>{Name}</td>
      <td>{Skills}</td>
      <td>{Duration}</td>
      <td>
        <a href={link} target="_blank" rel="noopener noreferrer">
          GitHub
        </a>
      </td>
    </tr>
  );
}

export default Project;
