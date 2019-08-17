import React from 'react';

function Grade(props) {
  return (
    <tr>
      <td>{props.studentData.name}</td>
      <td>{props.studentData.course}</td>
      <td>{props.studentData.grade}</td>
    </tr>
  );
}

export default Grade;
