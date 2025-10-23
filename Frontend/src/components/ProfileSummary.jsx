/*import React from "react";

const ProfileSummary = () => {
  const summaryCards = [
    {
      title: "This Week",
      value: "12 items",
      color: "bg-green-100 text-green-700",
      icon: "📅",
    },
    {
      title: "Total Recycled",
      value: "120 items",
      color: "bg-green-100 text-green-700",
      icon: "♻️",
    },
    {
      title: "CO₂ Saved",
      value: "35 kg",
      color: "bg-green-100 text-green-700",
      icon: "🌍",
    },
    {
      title: "Current Points",
      value: "480",
      color: "bg-green-100 text-green-700",
      icon: "⭐",
    },
  ];

  return (
    <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mt-6">
      {summaryCards.map((card, i) => (
        <div
          key={i}
          className={`flex flex-col items-center justify-center p-5 rounded-2xl shadow-md ${card.color} hover:scale-105 transition-transform`}
        >
          <div className="text-3xl mb-2">{card.icon}</div>
          <h3 className="text-lg font-semibold">{card.title}</h3>
          <p className="text-base font-medium">{card.value}</p>
        </div>
      ))}
    </div>
  );
};

export default ProfileSummary;
*/
import React, { useEffect, useState } from "react";
import axios from "axios";

const ProfileSummary = () => {
  const [user, setUser] = useState(null);

  useEffect(() => {
    const fetchUser = async () => {
      try {
        const res = await axios.get("http://localhost:5000/api/auth/profile", {
          withCredentials: true,
        });
        setUser(res.data.userData);
      } catch (err) {
        console.error("Error fetching user profile:", err);
      }
    };
    fetchUser();
  }, []);

  const cardColor = "bg-green-100 text-green-700";

  const summaryCards = [
    {
      title: "Days Recycled",
      value: `${user?.daysRecycled || 0} days`,
      color: cardColor,
      icon: "📅",
    },
    {
      title: "Total Points",
      value: `${user?.points || 0}`,
      color: cardColor,
      icon: "⭐",
    },
    {
      title: "Level",
      value: `${user?.level || "Beginner"}`,
      color: cardColor,
      icon: "🏅",
    },
    {
      title: "Badges",
      value: user?.badges?.length
        ? user.badges.join(", ")   // ← يعرض أسماء الـ badges
        : "Eco Starter",           // ← افتراضيًا
      color: cardColor,
      icon: "🎖️",
    },
  ];

  if (!user) return <p>Loading profile...</p>;

  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-4 mt-6">
      {summaryCards.map((card, i) => (
        <div
          key={i}
          className={`flex flex-col items-center justify-center p-5 rounded-2xl shadow-md w-full ${card.color} hover:scale-105 transition-transform`}
        >
          <div className="text-2xl sm:text-3xl mb-2">{card.icon}</div>
          <h3 className="text-base sm:text-lg font-semibold">{card.title}</h3>
          <p className="text-sm sm:text-base font-medium">{card.value}</p>
        </div>
      ))}
    </div>
  );
};

export default ProfileSummary;


