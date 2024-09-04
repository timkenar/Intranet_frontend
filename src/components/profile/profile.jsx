
import React, { useEffect, useState } from 'react';
import { fetchUserProfile } from '../../service/api';
import { useAuth } from '../../context/AuthContext';
import { useNavigate } from 'react-router-dom';

const Profile = () => {
  const { authTokens, logout } = useAuth();
  const [profile, setProfile] = useState(null);
  const navigate = useNavigate();

  useEffect(() => {
    const getUserProfile = async () => {
      try {
        const response = await fetchUserProfile(authTokens);
        setProfile(response.data);
      } catch (err) {
        console.error('Failed to fetch user profile', err);
      }
    };

    getUserProfile();
  }, [authTokens]);

  const handleLogout = () => {
    logout();
    navigate('/login');
  };

  if (!profile) return <p>Loading profile... ⏳</p>;

  return (
    <div className="container mx-auto mt-8 p-4">
      <div className="bg-white shadow-lg rounded-lg max-w-2xl mx-auto p-6">
        {/* User Information */}
        <div className="flex items-center mb-4">
          <div className="bg-gray-200 rounded-full w-16 h-16 flex items-center justify-center text-2xl font-bold text-gray-700">
            {profile.username[0].toUpperCase()}
          </div>
          <div className="ml-4">
            <h2 className="text-xl font-semibold">{profile.username}</h2>
            <p className="text-gray-600">{profile.email}</p>
          </div>
        </div>

        {/* Demographics */}
        <div className="border-t pt-4 mt-4">
          <div className="flex justify-between items-center">
            <h3 className="text-lg font-semibold">Demographics</h3>
            <button className="text-blue-600 hover:text-blue-800">Edit Details</button>
          </div>
          <p className="text-gray-600 mt-2">[Demographic details go here]</p>
        </div>

        {/* Additional Board Experience */}
        <div className="border-t pt-4 mt-4">
          <div className="flex justify-between items-center">
            <h3 className="text-lg font-semibold">Additional Board Experience</h3>
            <button className="text-blue-600 hover:text-blue-800">Edit Details</button>
          </div>
          <p className="text-gray-600 mt-2">Share your additional board experience outside of this organization.</p>
        </div>

        {/* Contact & Address */}
        <div className="border-t pt-4 mt-4">
          <div className="flex justify-between items-center">
            <h3 className="text-lg font-semibold">Contact & Address</h3>
            <button className="text-blue-600 hover:text-blue-800">Edit Details</button>
          </div>
          <p className="text-gray-600 mt-2">
            <strong>Email:</strong> {profile.email}
          </p>
        </div>

        {/* Logout Button */}
        <div className="border-t pt-4 mt-4 text-right">
          <button 
            onClick={handleLogout}  
            className="mt-4 px-5 py-2.5 rounded-lg text-white text-sm tracking-wider bg-blue-600 hover:bg-blue-700">
              Logout 🚪
          </button>
        </div>
      </div>
    </div>
  );
};

export default Profile;

// import React, { useEffect, useState } from 'react';
// import { fetchUserProfile } from '../../service/api';
// import { useAuth } from '../../context/AuthContext';
// import { useNavigate } from 'react-router-dom';

// const Profile = () => {
//   const { authTokens, logout } = useAuth();
//   const [profile, setProfile] = useState(null);
//   const navigate = useNavigate();

//   useEffect(() => {
//     const getUserProfile = async () => {
//       try {
//         const response = await fetchUserProfile(authTokens);
//         setProfile(response.data);
//       } catch (err) {
//         console.error('Failed to fetch user profile', err);
//       }
//     };

//     getUserProfile();
//   }, [authTokens]);

//   const handleLogout = () => {
//     logout();
//     navigate('/login');
//   };

//   if (!profile) return <p>Loading profile... ⏳</p>;

//   return (
//     <div>
//         <div
//               class="bg-white shadow-[0_4px_12px_-5px_rgba(0,0,0,0.4)] w-full max-w-sm rounded-lg font-[sans-serif] overflow-hidden mx-auto mt-4">
//               <div class="p-6">
//                 <h3 class="text-lg font-semibold">
                  
//                 User Profile 👤 </h3>
//                 <p class="mt-2 text-sm text-gray-500 leading-relaxed"> 
//                   <p><strong>Username:</strong> {profile.username}</p>
//                    <p><strong>Email:</strong> {profile.email}</p>
//                  </p>
                
//                 <button  onClick={handleLogout}  
//                 type="button"
//                   class="mt-4 px-5 py-2.5 rounded-lg text-white text-sm tracking-wider border-none outline-none bg-blue-600 hover:bg-blue-700">
//                      Logout 🚪                     
//                   </button>
//               </div>
//             </div>
//        </div>
//   );
// };

// export default Profile;
