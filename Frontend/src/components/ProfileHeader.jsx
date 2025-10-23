/*import React, { useState } from "react";

const ProfileHeader = () => {
  const [isOpen, setIsOpen] = useState(false); // فتح/غلق المودال
  const [formData, setFormData] = useState({
    name: "John Doe",
    email: "johndoe@example.com",
    address: "123 Green St, Eco City",
    profileImage: null,
  });

  const handleChange = (e) => {
    const { name, value, files } = e.target;
    if (files) setFormData({ ...formData, [name]: files[0] });
    else setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Form submitted", formData);
    setIsOpen(false);
  };

  return (
    <div className="bg-white shadow-lg rounded-2xl p-6 flex flex-col md:flex-row items-center justify-between gap-6">
      {/* Left: User info */
      /*<div className="flex items-center gap-5">
        <img
          src="https://cdn-icons-png.flaticon.com/512/847/847969.png"
          alt="Profile"
          className="w-24 h-24 rounded-full border-4 border-green-500 object-cover"
        />
        <div>
          <h2 className="text-2xl font-bold text-gray-800">{formData.name}</h2>
          <p className="text-gray-500 text-sm mt-1">{formData.email}</p>
          <p className="text-gray-600 text-sm mt-1">{formData.address}</p>
          <div className="mt-3 flex flex-wrap items-center gap-2">
            <span className="text-sm font-medium text-green-700 bg-green-100 px-3 py-1 rounded-full">
              Level: Intermediate
            </span>
            <span className="text-sm font-medium text-blue-700 bg-blue-100 px-3 py-1 rounded-full">
              Days Recycle: 12
            </span>
            <span className="text-sm font-medium text-yellow-700 bg-yellow-100 px-3 py-1 rounded-full">
              Points: 480
            </span>
          </div>
        </div>
      </div>

      {/* Right: Edit button */
      /*<div>
        <button
          onClick={() => setIsOpen(true)}
          className="px-6 py-2 bg-green-600 text-white rounded-xl shadow hover:bg-green-700 transition flex items-center gap-2"
        >
          Edit Profile
        </button>
      </div>

      {/* Modal */
     /* {isOpen && (
        <div
          className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50"
          onClick={() => setIsOpen(false)}
        >
          <div
            className="bg-white rounded-2xl p-6 w-full max-w-md relative"
            onClick={(e) => e.stopPropagation()}
          >
            <h2 className="text-xl font-bold mb-4">Edit Profile</h2>
            <form onSubmit={handleSubmit} className="flex flex-col gap-3">
              <input
                type="text"
                name="name"
                value={formData.name}
                onChange={handleChange}
                placeholder="Name"
                className="border p-2 rounded"
              />
              <input
                type="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                placeholder="Email"
                className="border p-2 rounded"
              />
              <input
                type="text"
                name="address"
                value={formData.address}
                onChange={handleChange}
                placeholder="Address"
                className="border p-2 rounded"
              />
              <input
                type="file"
                name="profileImage"
                onChange={handleChange}
                accept="image/*"
                className="border p-2 rounded"
              />
              <div className="flex justify-end gap-3 mt-4">
                <button
                  type="button"
                  onClick={() => setIsOpen(false)}
                  className="px-4 py-2 bg-gray-300 rounded hover:bg-gray-400 transition"
                >
                  Cancel
                </button>
                <button
                  type="submit"
                  className="px-4 py-2 bg-green-600 text-white rounded hover:bg-green-700 transition"
                >
                  Save
                </button>
              </div>
            </form>
          </div>
        </div>
      )}
    </div>
  );
};

export default ProfileHeader;*/
import React, { useState, useEffect } from "react";
import axios from "axios";

const ProfileHeader = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [user, setUser] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchUserProfile = async () => {
      try {
        const res = await axios.get("/api/auth/profile", { withCredentials: true });
        if (res.data.success) {
          setUser(res.data.userData);
        }
      } catch (error) {
        console.error("Error fetching profile:", error);
      } finally {
        setLoading(false);
      }
    };
    fetchUserProfile();
  }, []);

  const [formData, setFormData] = useState({
    name: "Guest User",
    email: "guest@example.com",
    address: "Not provided",
    profileImage: null,
    level: "Beginner",
    daysRecycled: 0,
    points: 0,
  });

  useEffect(() => {
    if (user) {
      setFormData({
        name: user.name || "Guest User",
        email: user.email || "guest@example.com",
        address: user.address || "Not provided",
        profileImage: user.profileImage || null,
        level: user.level || "Beginner",
        daysRecycled: user.daysRecycled || 0,
        points: user.points || 0,
      });
    }
  }, [user]);

  const handleChange = (e) => {
    const { name, value, files } = e.target;
    if (files) setFormData({ ...formData, [name]: files[0] });
    else setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setUser({ ...user, ...formData });
    setIsOpen(false);
  };

  if (loading) return <p className="text-center text-gray-500">Loading profile...</p>;

  return (
    <div className="bg-white shadow-lg rounded-2xl p-4 sm:p-6 flex flex-col md:flex-row items-center justify-between gap-4 md:gap-6 border border-gray-100">
      {/* USER INFO */}
      <div className="flex flex-col sm:flex-row items-center sm:items-start gap-4 sm:gap-6 w-full">
        <img
          src={
            formData.profileImage
              ? typeof formData.profileImage === "string"
                ? formData.profileImage
                : URL.createObjectURL(formData.profileImage)
              : "https://cdn-icons-png.flaticon.com/512/847/847969.png"
          }
          alt="Profile"
          className="w-20 h-20 sm:w-24 sm:h-24 rounded-full border-4 border-green-500 object-cover shadow-md"
        />
        <div className="flex-1">
          <h2 className="text-xl sm:text-2xl font-bold text-gray-800">{formData.name}</h2>
          <p className="text-gray-500 text-xs sm:text-sm">{formData.email}</p>
          <p className="text-gray-600 text-xs sm:text-sm mt-1">{formData.address}</p>

          {/* BADGES */}
          <div className="mt-3 flex flex-wrap items-center gap-2 sm:gap-3">
            <span className="text-xs sm:text-sm font-semibold text-green-700 bg-green-100 px-3 py-1 rounded-full shadow-sm">
              🌱 Level: {formData.level}
            </span>
            <span className="text-xs sm:text-sm font-semibold text-blue-700 bg-blue-100 px-3 py-1 rounded-full shadow-sm">
              🔄 Days Recycled: {formData.daysRecycled}
            </span>
            <span className="text-xs sm:text-sm font-semibold text-yellow-700 bg-yellow-100 px-3 py-1 rounded-full shadow-sm">
              ⭐ Points: {formData.points}
            </span>
          </div>
        </div>
      </div>

      {/* EDIT BUTTON */}
      <div className="w-full sm:w-auto flex justify-center sm:justify-end mt-3 sm:mt-0">
        <button
          onClick={() => setIsOpen(true)}
          className="w-full sm:w-auto px-4 sm:px-6 py-2 bg-green-600 text-white rounded-xl shadow-md hover:bg-green-700 transition font-medium whitespace-nowrap"
        >
          Edit Profile
        </button>
      </div>

      {/* MODAL */}
      {isOpen && (
        <div
          className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50"
          onClick={() => setIsOpen(false)}
        >
          <div
            className="bg-white rounded-2xl p-6 w-full max-w-md relative shadow-xl"
            onClick={(e) => e.stopPropagation()}
          >
            <h2 className="text-xl font-bold mb-4 text-gray-800">Edit Profile</h2>
            <form onSubmit={handleSubmit} className="flex flex-col gap-3">
              <input
                type="text"
                name="name"
                value={formData.name}
                onChange={handleChange}
                placeholder="Name"
                className="border p-2 rounded focus:outline-none focus:ring-2 focus:ring-green-400"
              />
              <input
                type="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                placeholder="Email"
                className="border p-2 rounded focus:outline-none focus:ring-2 focus:ring-green-400"
              />
              <input
                type="text"
                name="address"
                value={formData.address}
                onChange={handleChange}
                placeholder="Address"
                className="border p-2 rounded focus:outline-none focus:ring-2 focus:ring-green-400"
              />
              <input
                type="file"
                name="profileImage"
                onChange={handleChange}
                accept="image/*"
                className="border p-2 rounded"
              />
              <div className="flex justify-end gap-3 mt-4">
                <button
                  type="button"
                  onClick={() => setIsOpen(false)}
                  className="px-4 py-2 bg-gray-300 rounded hover:bg-gray-400 transition"
                >
                  Cancel
                </button>
                <button
                  type="submit"
                  className="px-4 py-2 bg-green-600 text-white rounded hover:bg-green-700 transition"
                >
                  Save
                </button>
              </div>
            </form>
          </div>
        </div>
      )}
    </div>
  );
};

export default ProfileHeader;
