<<<<<<< HEAD
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
=======
import React, { useEffect, useState } from "react";
import axios from "axios";
import { CgCalendarDates } from "react-icons/cg";
import { IoIosStar } from "react-icons/io";
import { SiLevelsdotfyi } from "react-icons/si";
import { FaMedal } from "react-icons/fa6";
// start of the component
>>>>>>> 01c123bc57e31401aa3b9e5d1f67dee9e1186cb0

const ProfileSummary = () => {
  const [user, setUser] = useState(null);

  useEffect(() => {
    const fetchUser = async () => {
<<<<<<< HEAD
=======
      // send request to back on this path asking for user dta
>>>>>>> 01c123bc57e31401aa3b9e5d1f67dee9e1186cb0
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
<<<<<<< HEAD
=======
  //  list contain all the cards and each card explain its style and the content of all
>>>>>>> 01c123bc57e31401aa3b9e5d1f67dee9e1186cb0

  const summaryCards = [
    {
      title: "Days Recycled",
      value: `${user?.daysRecycled || 0} days`,
      color: cardColor,
<<<<<<< HEAD
      icon: "📅",
=======
      icon: <CgCalendarDates />,
>>>>>>> 01c123bc57e31401aa3b9e5d1f67dee9e1186cb0
    },
    {
      title: "Total Points",
      value: `${user?.points || 0}`,
      color: cardColor,
<<<<<<< HEAD
      icon: "⭐",
    },
    {
      title: "Level",
      value: `${user?.level || "Beginner"}`,
      color: cardColor,
      icon: "🏅",
=======
      icon: <IoIosStar className="text-yellow-400 fill-yellow-400"/>,
    },
    {
      title: "Level",
      value:` ${user?.level || "Beginner"}`,
      color: cardColor,
      icon: <SiLevelsdotfyi  className="text-blue-400 fill-blue-400"/>,
>>>>>>> 01c123bc57e31401aa3b9e5d1f67dee9e1186cb0
    },
    {
      title: "Badges",
      value: user?.badges?.length
<<<<<<< HEAD
        ? user.badges.join(", ")   // ← يعرض أسماء الـ badges
        : "Eco Starter",           // ← افتراضيًا
      color: cardColor,
      icon: "🎖️",
    },
  ];

  if (!user) return <p>Loading profile...</p>;

  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-4 mt-6">
=======
        ? user.badges.join(", ")   
        : "Eco Starter",           
      color: cardColor,
      icon: <FaMedal className="text-blue-400 fill-yellow-400" />,
    },
  ];
  // if data doesnot come from the server appear loading profile instead of white page

  if (!user) return <p>Loading profile...</p>;
//summary card is the list that contain all the card above that we make it where map to make aleteration on all cards and i refer to index
  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-4 mt-6">
      
>>>>>>> 01c123bc57e31401aa3b9e5d1f67dee9e1186cb0
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

<<<<<<< HEAD
export default ProfileSummary;


=======
export default ProfileSummary;
>>>>>>> 01c123bc57e31401aa3b9e5d1f67dee9e1186cb0
