// src/components/EditableText.js
import React, { useState, useEffect } from 'react';

const EditableText = ({ storageKey, defaultValue }) => {
    const [text, setText] = useState(defaultValue);
    const [isEditing, setIsEditing] = useState(false);

    useEffect(() => {
        const savedText = localStorage.getItem(storageKey);
        if (savedText) {
            setText(savedText);
        }
    }, [storageKey]);

    const handleSave = () => {
        localStorage.setItem(storageKey, text);
        setIsEditing(false);
    };

    return (
        <div>
            {isEditing ? (
                <textarea
                    value={text}
                    onChange={(e) => setText(e.target.value)}
                    onBlur={handleSave}
                    autoFocus
                />
            ) : (
                <p onClick={() => setIsEditing(true)}>{text}</p>
            )}
        </div>
    );
};

export default EditableText;
