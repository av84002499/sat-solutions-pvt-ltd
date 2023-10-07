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

  // Function to render the table rows
  const renderTableRows = () => {
    return students.map((student, index) => (
      <tr key={student.id}>
        <td>{index + 1}</td>
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
    ));
  };

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
        <tbody>{renderTableRows()}</tbody>
      </table>
    </div>
  );
};

export default Table;
