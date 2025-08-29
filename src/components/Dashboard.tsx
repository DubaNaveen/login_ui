import React from 'react';
import { logoutUser } from '../services/api';
import './Dashboard.css';

interface User {
  id: number;
  email: string;
  name: string;
  role: string;
}

interface DashboardProps {
  user: User;
  onLogout: () => void;
}

const Dashboard: React.FC<DashboardProps> = ({ user, onLogout }) => {
  const handleLogout = async () => {
    try {
      await logoutUser();
      onLogout();
    } catch (error) {
      console.error('Logout error:', error);
      // Force logout even if API call fails
      onLogout();
    }
  };

  return (
    <div className="dashboard-container">
      <div className="dashboard-header">
        <h1>Welcome</h1>
        <button onClick={handleLogout} className="logout-button">
          Logout
        </button>
      </div>
      
      <div className="dashboard-content">
        <div className="welcome-card">
          <h2>You are logged in successfully!</h2>
          <p>Welcome to your dashboard.</p>
        </div>
      </div>
    </div>
  );
};

export default Dashboard;
