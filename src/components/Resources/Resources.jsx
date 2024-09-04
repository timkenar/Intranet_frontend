import React, { useState } from 'react';

const ResourceSection = () => {
  const [files, setFiles] = useState([]);
  const [folders, setFolders] = useState([]);
  const [newFolderName, setNewFolderName] = useState('');
  const [editingFolder, setEditingFolder] = useState(null);

  // Handle file selection and upload
  const handleFileUpload = (e) => {
    const selectedFiles = Array.from(e.target.files);
    setFiles([...files, ...selectedFiles]);
    // Later: Make API call to upload files to the backend
  };

  // Add new folder
  const addFolder = () => {
    if (newFolderName.trim()) {
      setFolders([...folders, { id: Date.now(), name: newFolderName.trim() }]);
      setNewFolderName('');
    }
  };

  // Start editing folder name
  const startEdit = (folder) => {
    setEditingFolder({ ...folder });
  };

  // Save edited folder name
  const saveEdit = () => {
    if (editingFolder) {
      setFolders(folders.map(f => f.id === editingFolder.id ? editingFolder : f));
      setEditingFolder(null);
    }
  };

  return (
    <div className="flex justify-center items-center min-h-screen">
      <div className="w-full max-w-2xl p-6 bg-white rounded shadow-lg">
        <div className="flex justify-between items-center mb-4">
          <h2 className="text-xl font-bold">Resources</h2>
          <button
            className="bg-purple-600 text-white px-4 py-2 rounded mr-2"
            onClick={() => document.getElementById('file-upload').click()}
          >
            Add File
          </button>
          <input
            type="file"
            id="file-upload"
            multiple
            className="hidden"
            onChange={handleFileUpload}
          />
        </div>
        
        {/* Add folder section */}
        <div className="mb-4">
          <input
            type="text"
            value={newFolderName}
            onChange={(e) => setNewFolderName(e.target.value)}
            placeholder="New folder name"
            className="border p-2 mr-2"
          />
          <button
            onClick={addFolder}
            className="bg-green-500 text-white px-4 py-2 rounded"
          >
            Add Folder
          </button>
        </div>

        {/* Display folders */}
        <div className="mb-4">
          <h3 className="text-lg font-semibold">Folders</h3>
          <ul>
            {folders.map((folder) => (
              <li key={folder.id} className="mb-2 flex justify-between items-center">
                {editingFolder && editingFolder.id === folder.id ? (
                  <>
                    <input
                      type="text"
                      value={editingFolder.name}
                      onChange={(e) => setEditingFolder({ ...editingFolder, name: e.target.value })}
                      className="border p-1"
                    />
                    <button onClick={saveEdit} className="bg-blue-500 text-white px-2 py-1 rounded ml-2">Save</button>
                  </>
                ) : (
                  <>
                    <span>{folder.name}</span>
                    <button onClick={() => startEdit(folder)} className="bg-yellow-500 text-white px-2 py-1 rounded">Rename</button>
                  </>
                )}
              </li>
            ))}
          </ul>
        </div>

        {/* Display the uploaded files */}
        <div className="mb-4">
          <h3 className="text-lg font-semibold">Uploaded Files</h3>
          <ul>
            {files.map((file, index) => (
              <li key={index} className="mb-2 flex justify-between items-center">
                <span>{file.name}</span>
                {/* Add additional buttons for preview, download, or delete if needed */}
              </li>
            ))}
          </ul>
        </div>
      </div>
    </div>
  );
};

export default ResourceSection;