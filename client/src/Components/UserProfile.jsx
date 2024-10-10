import { ArrowUpRight, ArrowDownRight, Star, Activity } from "lucide-react";
import { getUserInfoFromToken } from "../utilities/getUserInfoFromToken ";

export default function UserProfile() {

  const token = localStorage.getItem('token');
  const userinfo = getUserInfoFromToken(token);
  const defaultPic = "data:image/jpeg;base64,/9j/4AAQSkZJRgABAQAAAQABAAD..."; 

  const activities = [
    { action: "Bought", crypto: "Bitcoin", amount: "0.5 BTC", date: "2 days ago" },
    { action: "Sold", crypto: "Ethereum", amount: "1.2 ETH", date: "1 week ago" },
    { action: "Received", crypto: "Dogecoin", amount: "1000 DOGE", date: "3 weeks ago" }
  ];

  return (
    <div className="w-full p-4 bg-gray-900 text-gray-100 min-h-[670px]">
      <div className="w-full rounded-lg shadow-sm">
        <div className="flex flex-col sm:flex-row items-center sm:items-start gap-4 p-4">
          <div className="w-24 h-24 rounded-full overflow-hidden">
            <img
              src={defaultPic}
              alt="User"
              className="w-full h-full object-cover"
            />
          </div>
          <div className="text-center sm:text-left">
            <h2 className="text-2xl font-semibold">{userinfo ? userinfo.email : "User not logged in"}</h2>
            <p className="text-sm text-gray-400">Crypto Enthusiast</p>
          </div>
        </div>

        <div className="p-4">
          <div className="rounded-lg p-4 shadow-sm mt-6 bg-gray-800">
            <h3 className="text-lg font-semibold">Recent Activity</h3>
            <ul className="space-y-4 mt-2">
              {activities.map((activity, index) => (
                <li key={index} className="flex items-center gap-4">
                  <div className="p-2 bg-gray-700 rounded-full">
                    {activity.action === "Bought" ? (
                      <ArrowUpRight className="text-green-500" />
                    ) : activity.action === "Sold" ? (
                      <ArrowDownRight className="text-red-500" />
                    ) : (
                      <Star className="text-yellow-500" />
                    )}
                  </div>
                  <div className="flex-1">
                    <p>
                      {activity.action} <strong>{activity.crypto}</strong>
                    </p>
                    <p className="text-sm text-gray-400">{activity.amount}</p>
                  </div>
                  <span className="text-sm text-gray-500">{activity.date}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
}
