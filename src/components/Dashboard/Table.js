import React from 'react';

const Table = ({ students, handleEdit, handleDelete }) => {
  // Check if students is undefined or an empty array
  if (!students || students.length === 0) {
    return (
      <div className="contain-table">
        <p>students</p>
      </div>
    );
  }

  // Create a new array with updated student IDs
  const studentsWithIds = students.map((student, i) => ({
    ...student,
    id: i + 1,
  }));

  return (
    <div className="contain-table">
      <table className="striped-table">
      <thead>
          <tr>
          <th>studentId</th>
          <th>studentName</th>
          <th>Date of Birth</th>
          <th>Gender</th>
          <th>Father Name</th>
          <th>Mother Name</th>
          <th>Email ID</th>
          <th>Phone Number</th>
          <th>Address</th>
          <th>Actions</th>

          </tr>
        </thead>
        <tbody>
          {students.length > 0 ? (
            students.map((student, i) => (
              <tr key={student.id}>
                <td>{i + 1}</td>
                <td>{student.studentId}</td>
           <td>{student.studentName}</td>
            <td>{student.dateOfBirth}</td>
            <td>{student.gender}</td>
            <td>{student.fatherName}</td>
            <td>{student.motherName}</td>
            <td>{student.emailId}</td>
            <td>{student.phoneNumber}</td>
            <td>{student.address}</td>


                <td className="text-right">
                  <button
                    onClick={() => handleEdit(student.id)}
                    className="button muted-button"
                  >
                    Edit
                  </button>
                </td>
                <td className="text-left">
                  <button
                    onClick={() => handleDelete(student.id)}
                    className="button muted-button"
                  >
                    Delete
                  </button>
                </td>
              </tr>
            ))
          ) : (
            <tr>
              <td colSpan={7}>No students</td>
            </tr>
          )}
        </tbody>
      </table>
    </div>
  );
};

export default Table;
