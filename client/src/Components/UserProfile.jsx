import { ArrowUpRight, ArrowDownRight, Star, Activity } from "lucide-react";

export default function UserProfile() {
  return (
    <div className="w-full p-4 bg-gray-900 text-gray-100 min-h-[670px]">  {/* Removed container and added w-full */}
      <div className="w-full rounded-lg shadow-sm"> {/* Removed border class */}
        <div className="flex flex-col sm:flex-row items-center sm:items-start gap-4 p-4">
          <div className="w-24 h-24 rounded-full overflow-hidden">
            <img
              src="/placeholder.svg?height=96&width=96"
              alt="User"
              className="w-full h-full object-cover"
            />
          </div>
          <div className="text-center sm:text-left">
            <h2 className="text-2xl font-semibold">John Doe</h2>
            <p className="text-sm text-gray-600">Crypto Enthusiast</p>
          </div>
        </div>

        <div className="p-4">
          {/* Recent Activity */}
          <div className="rounded-lg p-4 shadow-sm mt-6 bg-gray-800"> {/* Removed border class and added background color */}
            <h3 className="text-lg font-semibold">Recent Activity</h3>
            <ul className="space-y-4 mt-2">
              {[
                { action: "Bought", crypto: "Bitcoin", amount: "0.1 BTC", value: "$3,500" },
                { action: "Sold", crypto: "Ethereum", amount: "2 ETH", value: "$4,000" },
                { action: "Received", crypto: "Cardano", amount: "100 ADA", value: "$50" },
              ].map((activity, index) => (
                <li key={index} className="flex items-center justify-between">
                  <div className="flex items-center">
                    <Activity className="mr-2 h-4 w-4" />
                    <span>
                      {activity.action} {activity.amount} {activity.crypto}
                    </span>
                  </div>
                  <span>{activity.value}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
}
