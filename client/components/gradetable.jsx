import React from 'react';
import Grade from './grade';

function GradeTable(props) {
  return (
    <table className="table table-striped">
      <thead className="thead-dark">
        <tr>
          <th scope="col">Student Name</th>
          <th scope="col">Course</th>
          <th scope="col">Grade</th>
        </tr>
      </thead>
      <tbody>
        {props.allData.map(student => {
          return (
            <Grade key={student.id} studentData={student}/>
          );
        })}
      </tbody>
    </table>
  );
}

export default GradeTable;
