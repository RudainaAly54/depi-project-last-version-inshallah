import React, { useState, useEffect } from "react";
import axios from "axios";
import ProfileHeader from "../components/ProfileHeader";
import ProfileSummary from "../components/ProfileSummary";
import ProfileTabs from "../components/ProfileTab";
import NavBar from "../components/NavBar";
import Footer from "../components/Footer";
import LoadingSpinner from "../components/LoadingSpinner";

const Profile = () => {
  const [user, setUser] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchProfile = async () => {
      try {
        const res = await axios.get("http://localhost:5000/api/auth/profile", {
          withCredentials: true,
        });
        setUser(res.data.userData || res.data.user); 
      } catch (err) {
        console.error("Error fetching profile:", err);
      } finally {
        setLoading(false);
      }
    };
    fetchProfile();
  }, []);

  
  if (loading) {
    return (
      <div className="min-h-screen flex flex-col justify-center items-center">
        <LoadingSpinner />
      </div>
    );
  }

  return (
    <div className="min-h-screen flex flex-col">
      <NavBar />

      <main className="flex-1 p-4 sm:p-6 md:p-8">
        {/* Profile Header */}
        <div className="mb-6">
          <ProfileHeader user={user} />
        </div>

        {/* Profile Summary */}
        <div className="mb-6">
          <ProfileSummary user={user} />
        </div>

        {/* Profile Tabs */}
        <div className="mb-6">
          <ProfileTabs user={user} />
        </div>
      </main>

      <Footer />
    </div>
  );
};

export default Profile;