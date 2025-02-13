import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { getUserInfoFromToken } from "../utilities/getUserInfoFromToken.js";

const ProfilePicture = ({ userEmail }) => (
  <div className="w-16 h-16 sm:w-24 sm:h-24 rounded-full bg-blue-600 flex items-center justify-center overflow-hidden">
    <span className="text-white text-3xl sm:text-4xl">
      {userEmail ? userEmail.charAt(0).toUpperCase() : "U"}
    </span>
  </div>
);

const UserInfo = ({ userEmail }) => (
  <div className="text-center sm:text-left">
    <h2 className="text-xl sm:text-2xl font-semibold">
      {userEmail || "User not logged in"}
    </h2>
  </div>
);

export default function UserProfile() {
  const token = localStorage.getItem("token");
  const [userinfo, setUserInfo] = useState(null);
  const navigate = useNavigate();

  useEffect(() => {
    if (token) {
      const user = getUserInfoFromToken(token);
      setUserInfo(user);
    } else {
      navigate("/signin");
    }
  }, [token]);

  return (
    <div className="w-full p-4 bg-gray-900 text-gray-100 min-h-screen">
      <div className="w-full rounded-lg shadow-sm">
        <div className="flex flex-col sm:flex-row items-center sm:items-start gap-4 p-4">
          <ProfilePicture userEmail={userinfo?.email} />
          <UserInfo userEmail={userinfo?.email} />
        </div>
      </div>
    </div>
  );
}
