import React from 'react';
import { Navigate, useNavigate } from 'react-router-dom';

const Dashboard = () => {
  const navigate = useNavigate();
  const handleLogout = () => {
    localStorage.removeItem('authenticated');
    navigate('/login');
  };

  if (!localStorage.getItem('authenticated')) {
    return <Navigate to="/login" />;
  }

  return (
    <div>
      <h3 className="leading">This is your Dashboard</h3>
      <button onClick={handleLogout}>Logout</button>
    </div>
  );
};

export default Dashboard;