import React, { useState, useEffect } from 'react';
import EditableText from './EditableText';
import Sidebar from '../sidebar/Sidebar'; // Import the Sidebar component

const Home = () => {
  const [image, setImage] = useState(null);

  useEffect(() => {
    const savedImage = localStorage.getItem('uploadedImage');
    if (savedImage) {
      setImage(savedImage);
    }
  }, []);

  const handleImageChange = (event) => {
    const file = event.target.files[0];
    if (file) {
      const reader = new FileReader();
      reader.onload = () => {
        const result = reader.result;
        setImage(result);
        localStorage.setItem('uploadedImage', result);
      };
      reader.readAsDataURL(file);
    }
  };

  return (
    <div className="flex">
      <Sidebar /> {/* Include the Sidebar component */}
      <div className="flex-grow p-6">
        <div className="home-container">
          <div className="image-upload-container">
            <h2>Company Logo</h2>
            <input type="file" accept="image/*" onChange={handleImageChange} />
            {image && <img src={image} alt="Uploaded" className="uploaded-image" />}
          </div>
          <div className="text-editor-container">
            <h2>About Us</h2>
            <EditableText storageKey="editableText1" defaultValue="Click to edit this text!" />
            <EditableText storageKey="editableText2" defaultValue="This is another editable text." />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Home;
