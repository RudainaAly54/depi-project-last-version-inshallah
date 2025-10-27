<<<<<<< HEAD
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
=======
//call the 2 type of hooks use state which is resposible in controlling and manage user data & use effect which is resposible to implement certain function when the it reach needed time
// axios resposible to bring user data from back
import React, { useState, useEffect } from "react";
import axios from "axios";
import LoadingSpinner from "../components/LoadingSpinner"
// start to initialize the component 
// first use state respodible to state is oepn(user is opening or closing window) & the initial vlaue the false mean user is not openinig so we use set state to cahnge state from false to true
>>>>>>> 01c123bc57e31401aa3b9e5d1f67dee9e1186cb0

const ProfileHeader = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [user, setUser] = useState(null);
  const [loading, setLoading] = useState(true);
<<<<<<< HEAD
=======
  // use effect consist of two parts:
  // first part axios is resposible to send the request to back on this path /api.... if user data found show this data but we use catch mean if data not found or error occured
  // finally mean that profile page has already loaded so set the loading state to be false
>>>>>>> 01c123bc57e31401aa3b9e5d1f67dee9e1186cb0

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
<<<<<<< HEAD
  }, []);
=======
    // to execute one time the user open the profile page
  }, []);
  //default data that appear to user who make sign up on the app for first time
>>>>>>> 01c123bc57e31401aa3b9e5d1f67dee9e1186cb0

  const [formData, setFormData] = useState({
    name: "Guest User",
    email: "guest@example.com",
<<<<<<< HEAD
    address: "Not provided",
=======
    address: "enter your address",
>>>>>>> 01c123bc57e31401aa3b9e5d1f67dee9e1186cb0
    profileImage: null,
    level: "Beginner",
    daysRecycled: 0,
    points: 0,
  });
<<<<<<< HEAD

  useEffect(() => {
    if (user) {
      setFormData({
        name: user.name || "Guest User",
        email: user.email || "guest@example.com",
        address: user.address || "Not provided",
=======
// if user data found in data base so we execute the condition be appearing its real data found in data base
  useEffect(() => {
    if (user) {
      setFormData({
        name: user.name,
        email: user.email,
        address: user.address,
>>>>>>> 01c123bc57e31401aa3b9e5d1f67dee9e1186cb0
        profileImage: user.profileImage || null,
        level: user.level || "Beginner",
        daysRecycled: user.daysRecycled || 0,
        points: user.points || 0,
      });
    }
<<<<<<< HEAD
  }, [user]);

=======
    // tell to change from user to another when user make log in 
  }, [user]);

// fuction is resposible to form that open when user click edit profile
// define that values that will be cahengeg name{name w email w address} & file the image that user will download we write it in this way for destructring
//(e) :event
// if condition if user want to change the profile page execute it but if want to change name only use the else
>>>>>>> 01c123bc57e31401aa3b9e5d1f67dee9e1186cb0
  const handleChange = (e) => {
    const { name, value, files } = e.target;
    if (files) setFormData({ ...formData, [name]: files[0] });
    else setFormData({ ...formData, [name]: value });
  };
<<<<<<< HEAD
=======
  // when user click save 
  // prevet default to avoid happennig refresh to page when user click save
  // set user to exchange the old data with new
  // is open to close rhe window of form
>>>>>>> 01c123bc57e31401aa3b9e5d1f67dee9e1186cb0

  const handleSubmit = (e) => {
    e.preventDefault();
    setUser({ ...user, ...formData });
    setIsOpen(false);
  };

<<<<<<< HEAD
  if (loading) return <p className="text-center text-gray-500">Loading profile...</p>;

  return (
    <div className="bg-white shadow-lg rounded-2xl p-4 sm:p-6 flex flex-col md:flex-row items-center justify-between gap-4 md:gap-6 border border-gray-100">
      {/* USER INFO */}
      <div className="flex flex-col sm:flex-row items-center sm:items-start gap-4 sm:gap-6 w-full">
        <img
=======
  if (loading) return <LoadingSpinner/>;

  return (
    // style of profile haeder card
    <div className="bg-white shadow-lg rounded-2xl p-4 sm:p-6 flex flex-col md:flex-row items-center justify-between gap-4 md:gap-6 border border-gray-100">
      
      <div className="flex flex-col sm:flex-row items-center sm:items-start gap-4 sm:gap-6 w-full">
        <img
        // about the image
        // first part the type is string mean that already image is stored in data base as link so we recall it
        // if user choose image for first time from desktop mean not saved in database
        // third part if user doesnot choose image so default image will appear
>>>>>>> 01c123bc57e31401aa3b9e5d1f67dee9e1186cb0
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

<<<<<<< HEAD
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
=======
          
          <div className="mt-3 flex flex-wrap items-center gap-2 sm:gap-3">
            <span className="text-xs sm:text-sm font-semibold text-green-700 bg-green-100 px-3 py-1 rounded-full shadow-sm">
               Level: {formData.level}
            </span>
            <span className="text-xs sm:text-sm font-semibold text-blue-700 bg-blue-100 px-3 py-1 rounded-full shadow-sm">
               Days Recycled: {formData.daysRecycled}
            </span>
            <span className="text-xs sm:text-sm font-semibold text-yellow-700 bg-yellow-100 px-3 py-1 rounded-full shadow-sm">
               Points: {formData.points}
>>>>>>> 01c123bc57e31401aa3b9e5d1f67dee9e1186cb0
            </span>
          </div>
        </div>
      </div>

<<<<<<< HEAD
      {/* EDIT BUTTON */}
=======
      
>>>>>>> 01c123bc57e31401aa3b9e5d1f67dee9e1186cb0
      <div className="w-full sm:w-auto flex justify-center sm:justify-end mt-3 sm:mt-0">
        <button
          onClick={() => setIsOpen(true)}
          className="w-full sm:w-auto px-4 sm:px-6 py-2 bg-green-600 text-white rounded-xl shadow-md hover:bg-green-700 transition font-medium whitespace-nowrap"
        >
          Edit Profile
        </button>
      </div>

<<<<<<< HEAD
      {/* MODAL */}
      {isOpen && (
        <div
          className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50"
          onClick={() => setIsOpen(false)}
        >
          <div
            className="bg-white rounded-2xl p-6 w-full max-w-md relative shadow-xl"
=======
      
      {isOpen && (
        <div
          className="fixed inset-0 bg-transparent backdrop-blur-sm flex items-center justify-center z-50"
          onClick={() => setIsOpen(false)}
        >
          <div
            className="bg-white/90 rounded-2xl p-6 w-full max-w-md relative shadow-xl"
>>>>>>> 01c123bc57e31401aa3b9e5d1f67dee9e1186cb0
            onClick={(e) => e.stopPropagation()}
          >
            <h2 className="text-xl font-bold mb-4 text-gray-800">Edit Profile</h2>
            <form onSubmit={handleSubmit} className="flex flex-col gap-3">
<<<<<<< HEAD
              <input
=======
              <label for="name" className="font-medium">Name:</label>
              <input
                id="name"
>>>>>>> 01c123bc57e31401aa3b9e5d1f67dee9e1186cb0
                type="text"
                name="name"
                value={formData.name}
                onChange={handleChange}
                placeholder="Name"
                className="border p-2 rounded focus:outline-none focus:ring-2 focus:ring-green-400"
<<<<<<< HEAD
              />
              <input
=======
                required
                readOnly
              />
              <label for="email" className="font-medium">Email:</label>
              <input
                id="email"
>>>>>>> 01c123bc57e31401aa3b9e5d1f67dee9e1186cb0
                type="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                placeholder="Email"
                className="border p-2 rounded focus:outline-none focus:ring-2 focus:ring-green-400"
<<<<<<< HEAD
              />
              <input
=======
                required
                readOnly
              />
              <label for="address" className="font-medium">Address:</label>
              <input
                id="address"
>>>>>>> 01c123bc57e31401aa3b9e5d1f67dee9e1186cb0
                type="text"
                name="address"
                value={formData.address}
                onChange={handleChange}
                placeholder="Address"
                className="border p-2 rounded focus:outline-none focus:ring-2 focus:ring-green-400"
              />
<<<<<<< HEAD
              <input
=======
              <label for="pp" className="font-medium">Profile Picture:</label>
              <input
                id="pp"
>>>>>>> 01c123bc57e31401aa3b9e5d1f67dee9e1186cb0
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

<<<<<<< HEAD
export default ProfileHeader;
=======
export default ProfileHeader;
>>>>>>> 01c123bc57e31401aa3b9e5d1f67dee9e1186cb0
