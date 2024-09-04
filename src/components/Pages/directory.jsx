import React, { useState, useEffect } from 'react';
import axios from 'axios';

const Directory = () => {
  const [activeTab, setActiveTab] = useState('members');
  const [members, setMembers] = useState([]);

  useEffect(() => {
    // Fetch data from the API
    axios.get('/api/users/') // Replace with your API endpoint
      .then(response => {
        setMembers(response.data); // Assuming the API response is an array of members
      })
      .catch(error => {
        console.error('Error fetching data:', error);
      });
  }, []);

  const renderContent = () => {
    switch (activeTab) {
      case 'members':
        return (
          <div>
            <div className="flex justify-between items-center mb-4">
              <div>
                <input
                  type="text"
                  placeholder="Filter Members"
                  className="border rounded py-2 px-4"
                />
              </div>
              <div className="flex items-center">
                <button className="bg-purple-600 text-white px-4 py-2 rounded mr-2">
                  Export Member List
                </button>
                <button className="bg-purple-600 text-white px-4 py-2 rounded">
                  + Add Members
                </button>
              </div>
            </div>
            <table className="min-w-full bg-white">
              <thead>
                <tr>
                  <th className="py-2 px-4 border-b">First Name</th>
                  <th className="py-2 px-4 border-b">Last Name</th>
                  <th className="py-2 px-4 border-b">Email</th>
                  <th className="py-2 px-4 border-b">Status</th>
                  <th className="py-2 px-4 border-b">Permission</th>
                </tr>
              </thead>
              <tbody>
                {members.map((member, index) => (
                  <tr key={index}>
                    <td className="py-2 px-4 border-b">{member.firstName}</td>
                    <td className="py-2 px-4 border-b">{member.lastName}</td>
                    <td className="py-2 px-4 border-b">{member.email}</td>
                    <td className="py-2 px-4 border-b">{member.status}</td>
                    <td className="py-2 px-4 border-b">{member.permission}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        );
      case 'groups':
        return <div>Groups Content</div>;
      case 'roles-terms':
        return <div>Roles & Terms Content</div>;
      case 'skills-tracking':
        return <div>Skills Tracking Content</div>;
      default:
        return null;
    }
  };

  return (
    <div className="p-6 flex-grow">
      <div className="flex justify-between items-center mb-6">
        <h2 className="text-xl font-bold">Directory</h2>
      </div>
      <div className="mb-4">
        <nav className="flex border-b">
          <button
            onClick={() => setActiveTab('members')}
            className={`py-2 px-4 ${activeTab === 'members' ? 'border-b-2 border-purple-600 text-purple-600' : ''}`}
          >
            Members
          </button>
          <button
            onClick={() => setActiveTab('groups')}
            className={`py-2 px-4 ${activeTab === 'groups' ? 'border-b-2 border-purple-600 text-purple-600' : ''}`}
          >
            Groups
          </button>
          <button
            onClick={() => setActiveTab('roles-terms')}
            className={`py-2 px-4 ${activeTab === 'roles-terms' ? 'border-b-2 border-purple-600 text-purple-600' : ''}`}
          >
            Roles & Terms
          </button>
          <button
            onClick={() => setActiveTab('skills-tracking')}
            className={`py-2 px-4 ${activeTab === 'skills-tracking' ? 'border-b-2 border-purple-600 text-purple-600' : ''}`}
          >
            Skills Tracking
          </button>
        </nav>
      </div>
      <div>
        {renderContent()}
      </div>
    </div>
  );
};

export default Directory;
