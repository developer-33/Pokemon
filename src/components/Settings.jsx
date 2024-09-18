import { useState } from 'react';

const Settings = ({user}) => {
    const [isEditing, setIsEditing] = useState(false);
    const [profileData, setProfileData] = useState(user);
  
    const handleEditToggle = () => {
      setIsEditing(!isEditing);
    };
  
    const handleChange = (e) => {
      setProfileData({ ...profileData, [e.target.name]: e.target.value });
    };
  
    const handleSave = () => {
      setIsEditing(false);
      // Call API to save profile data
    };
  return (
    <div className="bg-white shadow-lg p-4 rounded-lg w-full">
      <div className="flex items-center space-x-4">
        <img src={profileData.avatar} alt="User Avatar" className="w-20 h-20 rounded-full" />
        <div>
          <h2 className="text-xl font-bold">{profileData.name}</h2>
          <p>{profileData.email}</p>
        </div>
      </div>
      
      {isEditing ? (
        <div className="mt-4">
          <input
            type="text"
            name="name"
            value={profileData.name}
            onChange={handleChange}
            className="block w-full p-2 border rounded mb-2"
          />
          Edit Name
          <input
            type="email"
            name="email"
            value={profileData.email}
            onChange={handleChange}
            className="block w-full p-2 border rounded mb-2"
          />
          Edit Email
          <button onClick={handleSave} className="bg-green-500 text-white px-4 py-2 rounded">
            Save
          </button>
        </div>
      ) : (
        <button onClick={handleEditToggle} className="mt-4 bg-blue-500 text-white px-4 py-2 rounded">
          Edit Profile
        </button>
      )}
    </div>
  )
}

export default Settings