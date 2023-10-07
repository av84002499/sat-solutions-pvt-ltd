import React, { useState } from 'react';
import Swal from 'sweetalert2';

const Add = ({ students, setStudents, setIsAdding }) => {
  const [studentName, setStudentName] = useState('');
  const [dateOfBirth, setDateOfBirth] = useState('');
  const [gender, setGender] = useState('');
  const [fatherName, setFatherName] = useState('');
  const [motherName, setMotherName] = useState('');
  const [emailId, setEmailId] = useState('');
  const [phoneNumber, setPhoneNumber] = useState('');
  const [address, setAddress] = useState('');

  const handleAdd = e => {
    e.preventDefault();

    if (!studentName || !dateOfBirth || !gender || !fatherName || !motherName || !emailId || !phoneNumber || !address) {
      return Swal.fire({
        icon: 'error',
        title: 'Error!',
        text: 'All fields are required.',
        showConfirmButton: true,
      });
    }

    const id = students.length + 1;
    const newStudent = {
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

    students.push(newStudent);
    localStorage.setItem('Stu_data', JSON.stringify(students));
    setStudents(students);
    setIsAdding(false);

    Swal.fire({
      icon: 'success',
      title: 'Added!',
      text: `${studentName} ${dateOfBirth}'s data has been Added.`,
      showConfirmButton: false,
      timer: 1500,
    });
  };

  return (
    <div className="small-container">
      <form onSubmit={handleAdd}>
        <h1>Add Student</h1>
        <label htmlFor="studentName"> StudentName</label>
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
          <input type="submit" value="Add" />
          <input
            style={{ marginLeft: '12px' }}
            className="muted-button"
            type="button"
            value="Cancel"
            onClick={() => setIsAdding(false)}
          />
        </div>
      </form>
    </div>
  );
};

export default Add;
