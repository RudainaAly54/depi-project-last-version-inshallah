/*import React, { useState } from "react";

const ProfileTabs = () => {
  const [activeTab, setActiveTab] = useState("activity");

  const activities = [
    { name: "5 plastic bottles", date: "26-06-2024", points: "+25 points" },
    { name: "3 cardboard boxes", date: "15-08-2024", points: "+50 points" },
    { name: "6 aluminum cans", date: "30-08-2024", points: "+60 points" },
    { name: "10 paper sheets", date: "01-12-2024", points: "+100 points" },
    { name: "3 glass jars", date: "01-09-2025", points: "+150 points" },
  ];

  const rewards = [
    { title: "Discount Voucher", desc: "10% off your next purchase", icon: "🎟️" },
    { title: "Bonus Points", desc: "+500 points for consistent recycling", icon: "💚" },
    { title: "Free Gift", desc: "Reusable water bottle", icon: "🧴" },
  ];

  const achievements = [
    { title: "Eco Starter", desc: "Completed your first recycling activity", icon: "🌱" },
    { title: "Green Hero", desc: "Recycled 100+ items", icon: "🏅" },
    { title: "Streak Master", desc: "Recycled for 7 days in a row", icon: "🔥" },
  ];

  // ✅ الرسالة الخضراء الموحدة
  const greenMessage = (
    <div className="mt-6 bg-green-200 text-green-900 text-sm font-medium p-4 rounded-lg text-center">
      🌍 <b>Great Job this week!</b> You are on a 12-day recycling streak!
      <br />
      Keep it up — you’re only <b>4750 points</b> away from reaching the next level!
    </div>
  );

  return (
    <div className="mt-10 bg-white rounded-xl shadow-md p-6">
      {/* Tabs Header */
      /*<div className="flex justify-around border-b border-gray-300">
        {["activity", "rewards", "achievements"].map((tab) => (
          <button
            key={tab}
            className={`relative pb-3 text-lg font-semibold capitalize transition duration-200 ${
              activeTab === tab
                ? "text-black after:content-[''] after:absolute after:left-0 after:bottom-0 after:w-full after:h-[3px] after:bg-green-600"
                : "text-gray-500 hover:text-green-600"
            }`}
            onClick={() => setActiveTab(tab)}
          >
            {tab === "activity"
              ? "Recent Activity"
              : tab === "rewards"
              ? "Rewards"
              : "Achievements"}
          </button>
        ))}
      </div>

      {/* Tabs Content */
      /*<div className="mt-8">
        {/* Recent Activity */
       /* {activeTab === "activity" && (
          <>
            <h3 className="text-gray-800 font-semibold mb-2">
              Recent Recycling Activity
            </h3>
            <p className="text-sm text-gray-500 mb-5">
              Your latest contributions to the environment
            </p>

            <div className="space-y-3">
              {activities.map((item, i) => (
                <div
                  key={i}
                  className="flex justify-between items-center bg-gray-100 rounded-lg p-3 hover:bg-gray-200 transition"
                >
                  <div className="flex flex-col">
                    <p className="font-medium text-gray-800">{item.name}</p>
                    <p className="text-sm text-gray-500">{item.date}</p>
                  </div>
                  <span className="bg-green-200 text-green-800 text-sm font-semibold px-3 py-1 rounded-md shadow-sm">
                    {item.points}
                  </span>
                </div>
              ))}
            </div>

            {greenMessage}
          </>
        )}

        {/* Rewards */
        /*{activeTab === "rewards" && (
          <>
            <h3 className="text-gray-800 font-semibold mb-4">Your Rewards</h3>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
              {rewards.map((reward, i) => (
                <div
                  key={i}
                  className="flex flex-col items-center bg-green-50 p-5 rounded-xl shadow-sm hover:shadow-md transition"
                >
                  <div className="text-4xl mb-3">{reward.icon}</div>
                  <h4 className="text-lg font-semibold text-gray-800">{reward.title}</h4>
                  <p className="text-sm text-gray-600">{reward.desc}</p>
                </div>
              ))}
            </div>

            {greenMessage}
          </>
        )}

        {/* Achievements */
        /*{activeTab === "achievements" && (
          <>
            <h3 className="text-gray-800 font-semibold mb-4">Your Achievements</h3>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
              {achievements.map((ach, i) => (
                <div
                  key={i}
                  className="flex flex-col items-center bg-yellow-50 p-5 rounded-xl shadow-sm hover:shadow-md transition"
                >
                  <div className="text-4xl mb-3">{ach.icon}</div>
                  <h4 className="text-lg font-semibold text-gray-800">{ach.title}</h4>
                  <p className="text-sm text-gray-600">{ach.desc}</p>
                </div>
              ))}
            </div>

            {greenMessage}
          </>
        )}
      </div>
    </div>
  );
};

export default ProfileTabs;*/
import React, { useState, useEffect } from "react";
import axios from "axios";

const ProfileTabs = () => {
  const [activeTab, setActiveTab] = useState("activity");
  const [user, setUser] = useState(null);
  const [loading, setLoading] = useState(true);

  // جلب بيانات المستخدم من الباك
  useEffect(() => {
    const fetchUser = async () => {
      try {
        const res = await axios.get("http://localhost:5000/api/auth/profile", {
          withCredentials: true,
        });
        if (res.data.success) setUser(res.data.userData);
      } catch (err) {
        console.error("Error fetching profile:", err);
      } finally {
        setLoading(false);
      }
    };
    fetchUser();
  }, []);

  if (loading)
    return <p className="text-center text-gray-500 py-6">Loading profile...</p>;

  const activities = user?.activity?.length
    ? user.activity.map((act) => ({
        ...act,
        points: act.Points !== undefined ? act.Points : 0,
      }))
    : [];

  const rewards = [
    { title: "Discount Voucher", desc: "10% off your next purchase", icon: "🎟️" },
    { title: "Bonus Points", desc: "+500 points for consistent recycling", icon: "💚" },
    { title: "Free Gift", desc: "Reusable water bottle", icon: "🧴" },
  ];

  const achievements = [
    { title: "Eco Starter", desc: "Completed your first recycling activity", icon: "🌱" },
    { title: "Green Hero", desc: "Recycled 100+ items", icon: "🏅" },
    { title: "Streak Master", desc: "Recycled for 7 days in a row", icon: "🔥" },
  ];

  const greenMessage = (
    <div className="mt-6 bg-green-200 text-green-900 text-sm font-medium p-4 rounded-lg text-center">
      🌍 <b>Great Job this week!</b> You are on a {user?.stats?.thisWeek || 0}-day recycling streak!
      <br />
      Keep it up — you’re only <b>{5000 - (user?.points || 0)} points</b> away from reaching the next level!
    </div>
  );

  return (
    <div className="mt-10 bg-white rounded-xl shadow-md p-4 sm:p-6">
      {/* ✅ Responsive Tabs Header */}
      <div
        className="flex flex-col sm:flex-row justify-around border-b border-gray-300 
        gap-2 sm:gap-0"
      >
        {["activity", "rewards", "achievements"].map((tab) => (
          <button
            key={tab}
            className={`relative pb-2 text-sm sm:text-base md:text-lg font-semibold capitalize 
              transition duration-200 w-full sm:w-1/3 text-center rounded-lg py-2
              ${
                activeTab === tab
                  ? "text-black bg-green-100 after:content-[''] after:absolute after:left-0 after:bottom-0 after:w-full after:h-[3px] after:bg-green-600"
                  : "text-gray-500 hover:text-green-600 hover:bg-gray-100"
              }`}
            onClick={() => setActiveTab(tab)}
          >
            {tab === "activity"
              ? "Recent Activity"
              : tab === "rewards"
              ? "Rewards"
              : "Achievements"}
          </button>
        ))}
      </div>

      {/* Tabs Content */}
      <div className="mt-6">
        {activeTab === "activity" && (
          <>
            {activities.length === 0 ? (
              <p className="text-gray-500 text-center py-4">
                No activity yet. Start recycling today! 🌱
              </p>
            ) : (
              <div className="flex flex-col gap-3">
                {activities.map((item, i) => (
                  <div
                    key={i}
                    className="flex flex-col sm:flex-row justify-between items-start sm:items-center bg-gray-100 rounded-lg p-3 sm:p-4 min-h-[100px] hover:bg-gray-200 transition"
                  >
                    <div className="flex flex-col mb-2 sm:mb-0">
                      <p className="font-medium text-gray-800 break-words">
                        {item.action || "Recycling activity"}
                      </p>
                      <p className="text-sm text-gray-500">
                        {new Date(item.date).toLocaleDateString()}
                      </p>
                    </div>
                    <span className="bg-green-200 text-green-800 text-sm font-semibold px-3 py-1 rounded-full shadow-sm min-w-[60px] text-center">
                      +{item.Points || 0} pts
                    </span>
                  </div>
                ))}
              </div>
            )}
            {greenMessage}
          </>
        )}

        {activeTab === "rewards" && (
          <>
            <h3 className="text-gray-800 font-semibold mb-4 text-center sm:text-left">
              Your Rewards
            </h3>
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4">
              {rewards.map((reward, i) => (
                <div
                  key={i}
                  className="flex flex-col items-center bg-green-50 p-4 sm:p-5 rounded-xl shadow-sm hover:shadow-md transition break-words"
                >
                  <div className="text-4xl mb-2">{reward.icon}</div>
                  <h4 className="text-lg font-semibold text-gray-800 text-center">
                    {reward.title}
                  </h4>
                  <p className="text-sm text-gray-600 text-center">{reward.desc}</p>
                </div>
              ))}
            </div>
            {greenMessage}
          </>
        )}

        {activeTab === "achievements" && (
          <>
            <h3 className="text-gray-800 font-semibold mb-4 text-center sm:text-left">
              Your Achievements
            </h3>
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4">
              {achievements.map((ach, i) => (
                <div
                  key={i}
                  className="flex flex-col items-center bg-yellow-50 p-4 sm:p-5 rounded-xl shadow-sm hover:shadow-md transition break-words"
                >
                  <div className="text-4xl mb-2">{ach.icon}</div>
                  <h4 className="text-lg font-semibold text-gray-800 text-center">
                    {ach.title}
                  </h4>
                  <p className="text-sm text-gray-600 text-center">{ach.desc}</p>
                </div>
              ))}
            </div>
            {greenMessage}
          </>
        )}
      </div>
    </div>
  );
};

export default ProfileTabs;

