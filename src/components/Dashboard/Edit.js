import React, { useState } from 'react';
import Swal from 'sweetalert2';

const Edit = ({ students, selectedStudent, setStudents, setIsEditing }) => {
  const [studentData, setStudentData] = useState({
    studentName: selectedStudent.studentName,
    dateOfBirth: selectedStudent.dateOfBirth,
    gender: selectedStudent.gender,
    fatherName: selectedStudent.fatherName,
    motherName: selectedStudent.motherName,
    emailId: selectedStudent.emailId,
    phoneNumber: selectedStudent.phoneNumber,
    address: selectedStudent.address,
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setStudentData({ ...studentData, [name]: value });
  };

  const handleUpdate = (e) => {
    e.preventDefault();

    const {
      studentName,
      dateOfBirth,
      gender,
      fatherName,
      motherName,
      emailId,
      phoneNumber,
      address,
    } = studentData;

    if (
      !studentName ||
      !dateOfBirth ||
      !gender ||
      !fatherName ||
      !motherName ||
      !emailId ||
      !phoneNumber ||
      !address
    ) {
      Swal.fire({
        icon: 'error',
        title: 'Error!',
        text: 'All fields are required.',
        showConfirmButton: true,
      });
      return;
    }

    const updatedStudent = {
      ...selectedStudent,
      studentName,
      dateOfBirth,
      gender,
      fatherName,
      motherName,
      emailId,
      phoneNumber,
      address,
    };

    const updatedStudents = students.map((student) =>
      student.id === selectedStudent.id ? updatedStudent : student
    );

    localStorage.setItem('students_data', JSON.stringify(updatedStudents));
    setStudents(updatedStudents);
    setIsEditing(false);

    Swal.fire({
      icon: 'success',
      title: 'Updated!',
      text: `${studentName}'s data has been updated.`,
      showConfirmButton: false,
      timer: 1500,
    });
  };

  return (
    <div className="small-container">
      <form onSubmit={handleUpdate}>
        <h1>Edit Student</h1>
        <label htmlFor="studentName">Student Name</label>
        <input
          id="studentName"
          type="text"
          name="studentName"
          value={studentData.studentName}
          onChange={handleChange}
        />
        <label htmlFor="dateOfBirth">Date of Birth</label>
        <input
          id="dateOfBirth"
          type="text"
          name="dateOfBirth"
          value={studentData.dateOfBirth}
          onChange={handleChange}
        />
        <label htmlFor="gender">Gender</label>
        <input
          id="gender"
          type="text"
          name="gender"
          value={studentData.gender}
          onChange={handleChange}
        />
        <label htmlFor="fatherName">Father's Name</label>
        <input
          id="fatherName"
          type="text"
          name="fatherName"
          value={studentData.fatherName}
          onChange={handleChange}
        />
        <label htmlFor="motherName">Mother's Name</label>
        <input
          id="motherName"
          type="text"
          name="motherName"
          value={studentData.motherName}
          onChange={handleChange}
        />
        <label htmlFor="emailId">Email</label>
        <input
          id="emailId"
          type="email"
          name="emailId"
          value={studentData.emailId}
          onChange={handleChange}
        />
        <label htmlFor="phoneNumber">Phone Number</label>
        <input
          id="phoneNumber"
          type="number"
          name="phoneNumber"
          value={studentData.phoneNumber}
          onChange={handleChange}
        />
        <label htmlFor="address">Address</label>
        <input
          id="address"
          type="text"
          name="address"
          value={studentData.address}
          onChange={handleChange}
        />

        <div style={{ marginTop: '30px' }}>
          <input type="submit" value="Update" />
          <input
            style={{ marginLeft: '12px' }}
            className="muted-button"
            type="button"
            value="Cancel"
            onClick={() => setIsEditing(false)}
          />
        </div>
      </form>
    </div>
  );
};

export default Edit;
