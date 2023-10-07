import React from 'react';
import Logout from '../Logout';

const Header = ({ setIsAdding, setIsAuthenticated }) => {
  const handleAddStudentClick = () => {
    setIsAdding(true);
  };

  return (
    <header>
      <h1>Student Management Software</h1>
      <div style={{ marginTop: '30px', marginBottom: '18px' }}>
        <button onClick={handleAddStudentClick}>Add Student</button>
        <Logout setIsAuthenticated={setIsAuthenticated} />
      </div>
    </header>
  );
};

export default Header;
