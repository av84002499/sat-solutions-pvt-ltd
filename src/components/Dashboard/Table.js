import React from 'react';

const Table = ({ students, handleEdit, handleDelete }) => {
  // Check if students is undefined or an empty array
  if (!students || students.length === 0) {
    return (
      <div className="contain-table">
        <p>No students</p>
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
            <th>Student ID</th>
            <th>Student Name</th>
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
          {studentsWithIds.map((student) => (
            <tr key={student.id}>
              <td>{student.id}</td>
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
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default Table;
