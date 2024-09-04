import React, { useState } from 'react';
import Sidebar from '../sidebar/Sidebar';

const Settings = () => {
  const [activeTab, setActiveTab] = useState('general');

  const renderContent = () => {
    
    switch (activeTab) {
      case 'general':
        return (
         <div>
            <div className="bg-gray-100 p-4 rounded-lg mb-4">
              <h3 className="font-semibold mb-2">Document Downloads</h3>
              <p className="mb-2">Allows members to download meeting, resource and messenger documents. Learn more about document downloads in our Help Center.</p>
              <label className="flex items-center">
                <input type="checkbox" className="form-checkbox" />
                <span className="ml-2">Restrict Meeting Document Downloads to PDF Only</span>
              </label>
            </div>
            <div className="bg-gray-100 p-4 rounded-lg mb-4">
              <h3 className="font-semibold mb-2">Meeting Document Watermarking</h3>
              <p>Apply a watermark to meeting documents that includes the date, time, and who accessed the document. Learn more about watermarking in our Help Center.</p>
              <label className="flex items-center">
                <input type="checkbox" className="form-checkbox" />
                <span className="ml-2">Enable Watermarking</span>
              </label>
            </div>
            <div className="bg-gray-100 p-4 rounded-lg mb-4">
              <h3 className="font-semibold mb-2">Shared Annotations</h3>
              <p>Allows members to share annotations quickly and easily. Learn more about shared annotations in our Help Center.</p>
              <label className="flex items-center">
                <input type="checkbox" className="form-checkbox" />
                <span className="ml-2">Enable Shared Annotations</span>
              </label>
            </div>
          </div>
       
        );
      case 'security':
        return <div>Security Settings</div>;
      case 'feature':
        return <div>Feature Settings</div>;
      case 'data-preferences':
        return <div>Data Preferences Settings</div>;
      default:
        return null;
    }
  };

  return (
    <div className="p-6 flex-grow">
      <div className="flex justify-between items-center mb-6">
        <h2 className="text-xl font-bold">Settings</h2>
      </div>
      <div className="mb-4">
        <nav className="flex border-b">
          <button
            onClick={() => setActiveTab('general')}
            className={`py-2 px-4 ${activeTab === 'general' ? 'border-b-2 border-purple-600 text-purple-600' : ''}`}
          >
            General
          </button>
          <button
            onClick={() => setActiveTab('security')}
            className={`py-2 px-4 ${activeTab === 'security' ? 'border-b-2 border-purple-600 text-purple-600' : ''}`}
          >
            Security
          </button>
          <button
            onClick={() => setActiveTab('feature')}
            className={`py-2 px-4 ${activeTab === 'feature' ? 'border-b-2 border-purple-600 text-purple-600' : ''}`}
          >
            Feature
          </button>
          <button
            onClick={() => setActiveTab('data-preferences')}
            className={`py-2 px-4 ${activeTab === 'data-preferences' ? 'border-b-2 border-purple-600 text-purple-600' : ''}`}
          >
            Data Preferences
          </button>
          <button
            onClick={() => setActiveTab('feature')}
            className={`py-2 px-4 ${activeTab === 'feature' ? 'border-b-2 border-purple-600 text-purple-600' : ''}`}
          >
            Auditlogs
          </button>
        </nav>
      </div>
      <div>
        {renderContent()}
      </div>
    </div>
  );
};

export default Settings;
