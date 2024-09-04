// src/PasswordRecovery.js
import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
// import './recov.css';


const PasswordRecovery = () => {
  const [email, setEmail] = useState('');
  const navigate = useNavigate();

  const handlePasswordRecovery = (e) => {
    e.preventDefault();
    // Handle password recovery logic here
    console.log('Password recovery for:', email);
    // Navigate back to login after recovery
    navigate('/');
  };

  return (
    <div>
      <h2>Password Recovery</h2>
      <form onSubmit={handlePasswordRecovery}>
        <div>
          <label>Email:</label>
          <input 
            type="email" 
            value={email} 
            onChange={(e) => setEmail(e.target.value)} 
            required 
          />
        </div>
        <button type="submit">Recover Password</button>
      </form>
      <button onClick={() => navigate('/')}>Back to Login</button>
    </div>
  );
};

export default PasswordRecovery;
