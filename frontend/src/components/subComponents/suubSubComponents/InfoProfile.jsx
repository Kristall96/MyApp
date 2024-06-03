import React, { useState, useEffect } from "react";

const Profile = ({ userId }) => {
  const [user, setUser] = useState(null);
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    profileImage: "",
  });

  useEffect(() => {
    if (userId) {
      fetch(`http://localhost:3000/api/users/${userId}`)
        .then((response) => response.json())
        .then((data) => {
          setUser(data);
          setFormData({
            name: data.name,
            email: data.email,
            profileImage: data.profileImage,
          });
        })
        .catch((err) => console.error("Error fetching user:", err));
    }
  }, [userId]);

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    fetch(`http://localhost:3000/api/users/${userId}`, {
      method: "PUT",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(formData),
    })
      .then((response) => response.json())
      .then((data) => setUser(data))
      .catch((err) => console.error("Error updating user:", err));
  };

  if (!user) return <div>Loading...</div>;

  return (
    <div>
      <h1>Profile</h1>
      <form onSubmit={handleSubmit}>
        <div>
          <label>Name</label>
          <input
            type="text"
            name="name"
            value={formData.name}
            onChange={handleChange}
          />
        </div>
        <div>
          <label>Email</label>
          <input
            type="email"
            name="email"
            value={formData.email}
            onChange={handleChange}
          />
        </div>
        <div>
          <label>Profile Image</label>
          <input
            type="text"
            name="profileImage"
            value={formData.profileImage}
            onChange={handleChange}
          />
        </div>
        <button type="submit">Update Profile</button>
      </form>
      <div>
        <h2>Current Information</h2>
        <p>Name: {user.name}</p>
        <p>Email: {user.email}</p>
        <p>
          <img src={user.profileImage} alt="Profile" />
        </p>
      </div>
    </div>
  );
};

export default Profile;
