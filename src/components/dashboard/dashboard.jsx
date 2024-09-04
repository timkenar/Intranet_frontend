import React, { useEffect, useState } from 'react';
// import { useNavigate } from 'react-router-dom';
import { fetchDashboardData } from '../../service/api';
import { useAuth } from '../../context/AuthContext';
// import Sidebar from '../sidebar/sidebar'; // Make sure this path is correct

const Dashboard = () => {
  const { authTokens } = useAuth();
  // const { authTokens, logout } = useAuth();
  const [data, setData] = useState({ files: [], folders: [], notifications: [] });
  const [loading, setLoading] = useState(true);
  // const navigate = useNavigate();

  useEffect(() => {
    const getDashboardData = async () => {
      try {
        const response = await fetchDashboardData(authTokens);
        setData(response.data);
      } catch (err) {
        console.error('Failed to fetch dashboard data', err);
      } finally {
        setLoading(false);
      }
    };

    getDashboardData();
  }, [authTokens]);

  // const handleLogout = () => {
  //   logout();
  //   navigate('/login');
  // };

  if (loading) return <p>Loading dashboard... ⏳</p>;

  return (
    <div className="flex h-screen bg-gray-100">
    

      
      <div className="flex-1 flex flex-col overflow-hidden">
        <main className="flex-1 overflow-x-hidden overflow-y-auto bg-gray-200">
          <div className="container mx-auto px-6 py-8">
            <h1 className="text-3xl font-bold text-gray-800 mb-6">Welcome to your Dashboard 📂</h1>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              <section className="bg-white p-6 rounded-lg shadow-md">
                <h2 className="text-xl font-semibold mb-4 text-gray-700">Recent Files 📄</h2>
                <ul className="space-y-2">
                  {data.files.map(file => (
                    <li key={file.id} className="text-gray-600 hover:text-gray-800">{file.name}</li>
                  ))}
                </ul>
              </section>

              <section className="bg-white p-6 rounded-lg shadow-md">
                <h2 className="text-xl font-semibold mb-4 text-gray-700">Recent Folders 📁</h2>
                <ul className="space-y-2">
                  {data.folders.map(folder => (
                    <li key={folder.id} className="text-gray-600 hover:text-gray-800">{folder.name}</li>
                  ))}
                </ul>
              </section>

              <section className="bg-white p-6 rounded-lg shadow-md">
                <h2 className="text-xl font-semibold mb-4 text-gray-700">Notifications 🔔</h2>
                <ul className="space-y-2">
                  {data.notifications.map(notification => (
                    <li key={notification.id} className="text-gray-600 hover:text-gray-800">{notification.message}</li>
                  ))}
                </ul>
              </section>
            </div>

            {/* <button 
              onClick={handleLogout}
              className="mt-8 bg-red-600 text-white px-6 py-2 rounded hover:bg-red-700 transition duration-300"
            >
              Logout 🚪
            </button> */}
          </div>
        </main>
      </div>
    </div>
  );
};

export default Dashboard;



// import React, { useState,useEffect } from 'react';

// // import EditableText from '../EditableText';

// const Dashboard = () => {
//   const [isEditing, setIsEditing] = useState(false);
//   const [content, setContent] = useState({
//     title: "COSEKE",
//     subtitle: "Your Workspace For Doing Big, Important Work",
//     description: "Welcome to your homepage for upcoming meetings, news, and more. The Dashboard is an entirely unique workspace for directors to stay engaged & prepare for upcoming meetings.",
//     additionalInfo: "This is your welcome panel. It is viewed by all members of your portal. You can use it to share your mission/vision/values or even better, a quick ‘Why OnBoard’ message to share the expected benefits you believe OnBoard will provide for your stakeholders.",
//   });

//   const [image, setImage] = useState(null);

//   useEffect(() => {
//     const savedImage = localStorage.getItem('uploadedImage');
//     if (savedImage) {
//       setImage(savedImage);
//     }
//   }, []);

//   const handleImageChange = (event) => {
//     const file = event.target.files[0];
//     if (file) {
//       const reader = new FileReader();
//       reader.onload = () => {
//         const result = reader.result;
//         setImage(result);
//         localStorage.setItem('uploadedImage', result);
//       };
//       reader.readAsDataURL(file);
//     }
//   };



//   const handleEdit = () => setIsEditing(true);
//   const handleSave = () => setIsEditing(false);

//   const handleChange = (e) => {
//     const { name, value } = e.target;
//     setContent({
//       ...content,
//       [name]: value
//     });
//   };

//   return (
//    <div className="p-6 flex-grow">
//       <div className="flex justify-between items-center mb-6">
//         <div>
            
//           <h2 className="text-xl font-bold">{content.title}</h2>
//           <p>{content.subtitle}</p>
//         </div>
//         <div className="image-upload-container">
            
//             <input type="file" accept="image/*" onChange={handleImageChange} />
//             {image && <img src={image} alt="Uploaded" className="uploaded-image" />}
//           </div>
//         <button onClick={isEditing ? handleSave : handleEdit} className="bg-purple-600 text-white px-4 py-2 rounded">
//           {isEditing ? 'Save' : 'Edit Content'}
//         </button>
//       </div>
//       {isEditing ? (
//         <div>
//           <textarea
//             name="description"
//             value={content.description}
//             onChange={handleChange}
//             className="w-full p-2 border"
//           />
//           <textarea
//             name="additionalInfo"
//             value={content.additionalInfo}
//             onChange={handleChange}
//             className="w-full p-2 border mt-4"
//           />
//         </div>
//       ) : (
//         <div>
//           <p>{content.description}</p>
//           <p>{content.additionalInfo}</p>
//         </div>
//       )}
//     </div>
//   );
// };

// export default Dashboard;
