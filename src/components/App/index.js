import React, { useState, useEffect } from 'react';

import Login from '../Login';
import Dashboard from '../Dashboard';

const App = () => {
  const [isAuthenticated, setIsAuthenticated] = useState(null);

  useEffect(() => {
    const storedIsAuthenticated = JSON.parse(localStorage.getItem('is_authenticated'));
    setIsAuthenticated(storedIsAuthenticated);
  }, []);

  const renderContent = () => {
    if (isAuthenticated) {
      return <Dashboard setIsAuthenticated={setIsAuthenticated} />;
    } else {
      return <Login setIsAuthenticated={setIsAuthenticated} />;
    }
  };

  return <>{renderContent()}</>;
};

export default App;
