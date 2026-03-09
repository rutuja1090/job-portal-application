import React, { useEffect, useState } from "react";
import profileBg from "../assets/images/color.jfif"; // background image
import "./Profile.css";

const Profile = () => {
  const [user, setUser] = useState(null);
  const token = localStorage.getItem("token");

  useEffect(() => {
    if (!token) return; // not logged in

    // fetch real user data from backend
    fetch("http://localhost:5000/api/auth/me", {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${token}`,
      },
    })
      .then((res) => res.json())
      .then((data) => {
        if (data.success) setUser(data.user);
      })
      .catch((err) => console.error(err));
  }, [token]);

  if (!user) {
    return (
      <h2 style={{ textAlign: "center", marginTop: "50px" }}>
        Loading profile...
      </h2>
    );
  }

  return (
    <div
      className="profile-page"
      style={{ backgroundImage: `url(${profileBg})` }}
    >
      <div className="profile-card">
        <div className="profile-avatar">{user.firstName[0].toUpperCase()}</div>
        <h2>
          {user.firstName} {user.lastName}
        </h2>
        <p>Email: {user.email}</p>
        <p>Mobile: {user.mobile}</p>
        <p>Role: {user.role}</p>
      </div>
    </div>
  );
};

export default Profile;
