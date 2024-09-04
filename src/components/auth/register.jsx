import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { registerUser } from '../../service/api';
import { useAuth } from '../../context/AuthContext';

const Register = () => {
  const [formData, setFormData] = useState({ username: '', email: '', password: '' });
  const [error, setError] = useState(null);
  const navigate = useNavigate();
  const { setAuthTokens } = useAuth();

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setError(null);
    try {
      const response = await registerUser(formData);
      setAuthTokens(response.data.access);
      localStorage.setItem('refreshToken', response.data.refresh);
      navigate('/dashboard');
    } catch (err) {
      if (err.response && err.response.data) {
        setError(err.response.data);
      } else {
        setError('An error occurred during registration. Please try again.');
      }
    }
  };

  return (
   <div className="container mx-auto mt-8 p-4"> 
    <div className="bg-white shadow-lg rounded-lg max-w-2xl mx-auto p-5">   
      <h2>Register 📝</h2>
      {error && <p>{JSON.stringify(error)}</p>}
      <form onSubmit={handleSubmit}>
        <label>Username:</label>
        <input
          type="text"
          name="username"
          value={formData.username}
          onChange={handleChange}
          required
        />
        <label>Email:</label>
        <input
          type="email"
          name="email"
          value={formData.email}
          onChange={handleChange}
          required
        />
        <label>Password:</label>
        <input
          type="password"
          name="password"
          value={formData.password}
          onChange={handleChange}
          required
        />
        <button type="submit">Sign Up ✔️</button>
      </form>
    </div>
    
    </div>
  );
};

export default Register;
