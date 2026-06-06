import React, { useState } from "react";
import { useAuth } from "../../context/AuthContext";
import UserIcon from "../../assets/icons/UserIcon";
import "./Avatar.css";
const Avatar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const { logout } = useAuth();
  return (
    <div className="avatar-con">
      <div className="avatar" onClick={() => setIsOpen(!isOpen)}>
        <UserIcon />
      </div>
      {isOpen && (
        <div className="avatar-dropdown">
          <button className="logout-btn" onClick={logout}>
            Logout
          </button>
        </div>
      )}
    </div>
  );
};

export default Avatar;
