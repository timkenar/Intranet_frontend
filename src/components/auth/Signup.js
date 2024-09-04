// // src/SignUp.js
// import React, { useState } from 'react';
// import { useNavigate } from 'react-router-dom';
// // import './theme.css';

// const SignUp = () => {
//   const [email, setEmail] = useState('');
//   const [password, setPassword] = useState('');
//   const [confirmPassword, setConfirmPassword] = useState('');
//   const navigate = useNavigate();

//   const handleSignUp = (e) => {
//     e.preventDefault();
//     // Handle sign-up logic here
//     if (password !== confirmPassword) {
//       alert('Passwords do not match!');
//       return;
//     }
//     console.log('Sign Up:', { email, password });
//     // After sign-up, navigate to login or another page
//     navigate('/');
//   };

//   return (
//     <div>
//       <h2>Sign Up</h2>
//       <form onSubmit={handleSignUp}>
//         <div>
//           <label>Email:</label>
//           <input
//             type="email"
//             value={email}
//             onChange={(e) => setEmail(e.target.value)}
//             required
//           />
//         </div>
//         <div>
//           <label>Password:</label>
//             <input
//             type="password"
//             value={password}
//             onChange={(e) => setPassword(e.target.value)}
//             required
//           />
//         </div>
//         <div>
//           <label>Confirm Password:</label>
//           <input
//             type="password"
//             value={confirmPassword}
//             onChange={(e) => setConfirmPassword(e.target.value)}
//             required
//           />
//         </div>
//         <button type="submit">Sign Up</button>
//       </form>
//       <button onClick={() => navigate('/')}>Back to Login</button>
//     </div>
//   );
// };

// export default SignUp;
