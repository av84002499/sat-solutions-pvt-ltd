import React, { useState } from 'react';
import Swal from 'sweetalert2';

const Edit = ({ students, selectedStudent, setstudents, setIsEditing }) => {
  const id = selectedStudent.id;

  const [studentName, setStudentName] = useState(selectedStudent.studentName);
  const [dateOfBirth, setDateOfBirth] = useState(selectedStudent.dateOfBirth);
  const [gender, setGender] = useState(selectedStudent.gender);
  const [fatherName, setFatherName] = useState(selectedStudent.fatherName);
  const [motherName, setMotherName] = useState(selectedStudent.motherName);
  const [emailId, setEmailId] = useState(selectedStudent.emailId);
  const [phoneNumber, setPhoneNumber] = useState(selectedStudent.phoneNumber);
  const [address, setAddress] = useState(selectedStudent.address);

  const handleUpdate = e => {
    e.preventDefault();

    if (!studentName || !dateOfBirth || !gender || !fatherName || !motherName || !emailId || !phoneNumber || !address) {
      return Swal.fire({
        icon: 'error',
        title: 'Error!',
        text: 'All fields are required.',
        showConfirmButton: true,
      });
    }

    const student = {
      id,
      studentName,
      dateOfBirth,
      gender,
      fatherName,
      motherName,
      emailId,
      phoneNumber,
      address,
    };

    for (let i = 0; i < students.length; i++) {
      if (students[i].id === id) {
        students.splice(i, 1, student);
        break;
      }
    }

    localStorage.setItem('students_data', JSON.stringify(students));
    setstudents(students);
    setIsEditing(false);

    Swal.fire({
      icon: 'success',
      title: 'Updated!',
      text: `${student.studentName} ${student.dateOfBirth}'s data has been updated.`,
      showConfirmButton: false,
      timer: 1500,
    });
  };

  return (
    <div className="small-container">
      <form onSubmit={handleUpdate}>
        <h1>Edit student</h1>
        <label htmlFor="studentName">StudentName</label>
        <input
          id="studentName"
          type="text"
          name="studentName"
          value={studentName}
          onChange={e => setStudentName(e.target.value)}
        />
       <label htmlFor="dateOfBirth">DateOfBirth</label>
        <input
          id="dateOfBirth"
          type="text"
          name="dateOfBirth"
          value={dateOfBirth}
          onChange={e => setDateOfBirth(e.target.value)}
        />
        <label htmlFor="gender">Gender</label>
        <input
          id="gender"
          type="text"
          name="gender"
          value={gender}
          onChange={e => setGender(e.target.value)}
        />
        <label htmlFor="fatherName">FatherName ($)</label>
        <input
          id="fatherName"
          type="text"
          name="fatherName"
          value={fatherName}
          onChange={e => setFatherName(e.target.value)}
        />
        <label htmlFor="motherName">MotherName</label>
        <input
          id="motherName"
          type="text"
          name="motherName"
          value={motherName}
          onChange={e => setMotherName(e.target.value)}
        />
         <label htmlFor="emailId">EmailId</label>
        <input
          id="emailId"
          type="email"
          name="emailId"
          value={emailId}
          onChange={e => setEmailId(e.target.value)}
        />
         <label htmlFor="phoneNumber">PhoneNumber</label>
        <input
          id="phoneNumber"
          type="number"
          name="phoneNumber"
          value={phoneNumber}
          onChange={e => setPhoneNumber(e.target.value)}
        />
         <label htmlFor="address">Address</label>
        <input
          id="address"
          type="text"
          name="address"
          value={address}
          onChange={e => setAddress(e.target.value)}
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
