import { ArrowUpRight, ArrowDownRight, Star } from "lucide-react";
import { getUserInfoFromToken } from "../utilities/getUserInfoFromToken.js";
import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";

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
    <div className="w-full p-4 bg-gray-900 text-gray-100 min-h-[670px]">
      <div className="w-full rounded-lg shadow-sm">
        <div className="flex flex-col sm:flex-row items-center sm:items-start gap-4 p-4">
          <div className="w-16 h-16 sm:w-24 sm:h-24 rounded-full bg-blue-600 flex items-center justify-center overflow-hidden">
            {/* Placeholder for profile icon */}
            <span className="text-white text-3xl sm:text-4xl">
              {userinfo ? userinfo.email?.charAt(0).toUpperCase() : "U"}
            </span>
          </div>
          <div className="text-center sm:text-left">
            <h2 className="text-xl sm:text-2xl font-semibold">
              {userinfo ? userinfo.email : "User not logged in"}
            </h2>
          </div>
        </div>
      </div>
    </div>
  );
}
