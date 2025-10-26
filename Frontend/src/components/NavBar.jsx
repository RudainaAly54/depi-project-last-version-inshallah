import React, { useContext, useState } from "react";
import { assets } from "../assets/assets";
import { FaArrowRight, FaBars, FaTimes } from "react-icons/fa";
import { NavLink, useNavigate } from "react-router-dom";
import { AppContent } from "../context/AppContext";
import { toast } from "react-toastify";
import axios from "axios";

const NavBar = () => {
  const navigate = useNavigate();
  //use context(appContent) is a built in hook that takes the data that comes from the context(AppContent)->user datd
  const { userData, backendUrl, setUserData, setIsLoggedin } =
    useContext(AppContent);
  //local state menuOpen to know whether the MOBILE menu is opened or not (inital state false )
  const [menuOpen, setMenuOpen] = useState(false);

  // Send verification OTP
  const sendVerificationOtp = async () => {
    try {
      //axios.post->Post reqs to server
      const { data } = await axios.post(
        `${backendUrl}/api/auth/send-verify-otp`,
        {},
        //send cookies if the user is logged in
        { withCredentials: true }
      );

      if (data.success) {
        toast.success(data.message || "Verification email sent!");
        navigate("/email-verify");
      } else {
        toast.error(data.message || "Failed to send OTP");
      }
    } catch (error) {
      console.error("Send OTP error:", error);
      toast.error(error.response?.data?.message || "Something went wrong");
    }
  };

  // Logout user
  const logout = async () => {
    try {
      //axios.post->sends reqs to server to log out
      const { data } = await axios.post(
        `${backendUrl}/api/auth/logout`,
        {},
        { withCredentials: true }
      );

      if (data.success) {
        //changes the state of the user in the context to be logged out
        setIsLoggedin(false);
        //erase users data
        setUserData(null);
        toast.success("Logged out successfully");
        navigate("/");
      } else {
        toast.error(data.message || "Logout failed");
      }
    } catch (error) {
      console.error("Logout error:", error);
      toast.error(error.response?.data?.message || "Logout failed");
    }
  };

  return (
<nav className="sticky w-full flex justify-between items-center p-4 bg-white shadow-sm sm:sticky top-0 z-50">
{/* Logo */}
      <img
        src={assets.logo}
        alt="logo"
        className="w-24 sm:w-32 cursor-pointer"
        onClick={() => navigate("/")}
      />

      {/* Desktop Menu */}
      <ul className="hidden md:flex gap-8 text-sm lg:text-base text-gray-800 font-medium">
        <li>
          <NavLink to="/">Home</NavLink>
        </li>
        <li>
          <NavLink to="/recycle-scanner">Recycle Scanner</NavLink>
        </li>
        <li>
          <NavLink to="/pickup">Pickup & Drop-off</NavLink>
        </li>
        <li>
          <NavLink to="/about-us">About Us</NavLink>
        </li>
        <li>
          <NavLink to="/awareness">Awareness</NavLink>
        </li>
      </ul>

      {/* User Section (Desktop) */}
      {userData ? (
        <div className="relative hidden md:flex group mr-6 w-8 h-8 justify-center items-center rounded-full bg-[#186933] text-white cursor-pointer">
          {userData.name?.[0]?.toUpperCase() || "?"}

          {/* Dropdown */}
          <div className="absolute hidden group-hover:block top-0 right-0 z-10 text-black rounded pt-10">
            <ul className="list-none m-0 bg-gray-100 text-sm rounded shadow-md min-w-[140px]">
              <li
                onClick={() => navigate("/profile")}
                className="p-2 hover:bg-gray-200 cursor-pointer border-b border-gray-400"
              >
                Profile
              </li>
              {!userData?.isAccountVerified && (
                <li
                  onClick={sendVerificationOtp}
                  className="p-2 hover:bg-gray-200 cursor-pointer border-b border-gray-400"
                >
                  Verify Email
                </li>
              )}

              <li
                onClick={logout}
                className="p-2 hover:bg-gray-200 cursor-pointer"
              >
                Log out
              </li>
            </ul>
          </div>
        </div>
      ) : (
        // Login / Signup Button
        <button
          onClick={() => navigate("/login")}
          className="hidden md:flex items-center gap-2 border border-gray-500 rounded-full px-5 py-2 text-gray-800 hover:bg-gray-100 transition-all"
        >
          Sign Up <FaArrowRight />
        </button>
      )}

      {/* Mobile Menu Toggle */}
      <div className="md:hidden flex items-center">
        <button onClick={() => setMenuOpen(!menuOpen)}>
          {menuOpen ? <FaTimes size={20} /> : <FaBars size={20} />}
        </button>
      </div>

      {/* Mobile Menu */}
      {menuOpen && (
        <div className="absolute top-full left-0 w-full bg-white shadow-md md:hidden flex flex-col items-center py-4  text-sm">
          {/* User Section (Mobile) */}
          {userData ? (
            <div className="flex flex-col items-center w-full text-sm pt-2 border-t border-gray-200">
              <span className="font-semibold text-gray-700 mb-2">
                Hello, {userData.name || "User"}
              </span>
              <button
                onClick={() => {
                  navigate("/profile");
                  setMenuOpen(false);
                }}
                className="w-3/4 py-2 m-0 hover:bg-gray-100"
              >
                Profile
              </button>
              {!userData?.isAccountVerified && (
                <button
                  onClick={() => {
                    sendVerificationOtp();
                    setMenuOpen(false);
                  }}
                  className="w-3/4 py-2 m-0 border-b hover:bg-gray-100"
                >
                  Verify Email
                </button>
              )}
            </div>
          ) : (
            <button
              onClick={() => {
                navigate("/login");
                setMenuOpen(false);
              }}
              className="flex items-center gap-2 border border-gray-500 rounded-full px-5 py-2 text-gray-800 hover:bg-gray-100 transition-all"
            >
              Sign Up <FaArrowRight />
            </button>
          )}
          <NavLink
            className="w-3/4 py-2  m-0 text-center hover:bg-gray-100"
            to="/"
            onClick={() => setMenuOpen(false)}
          >
            Home
          </NavLink>
          <NavLink
            className="w-3/4 py-2 m-0 text-center hover:bg-gray-100"
            to="/recycle-scanner"
            onClick={() => setMenuOpen(false)}
          >
            Recycle Scanner
          </NavLink>
          <NavLink
            className="w-3/4 py-2 m-0 text-center hover:bg-gray-100"
            to="/pickup"
            onClick={() => setMenuOpen(false)}
          >
            Pickup & Drop-off
          </NavLink>
          <NavLink
            className="w-3/4 py-2 m-0 text-center hover:bg-gray-100"
            to="/about-us"
            onClick={() => setMenuOpen(false)}
          >
            About Us
          </NavLink>
          <NavLink
            className="w-3/4 py-2 m-0 text-center hover:bg-gray-100"
            to="/awareness"
            onClick={() => setMenuOpen(false)}
          >
            Awareness
          </NavLink>
          {userData ? (
            <button
              onClick={() => {
                logout();
                setMenuOpen(false);
              }}
              className="w-3/4 py-2 m-0 hover:bg-gray-100"
            >
              Log out
            </button>
          ) : (
            ""
          )}
        </div>
      )}
    </nav>
  );
};

export default NavBar;
