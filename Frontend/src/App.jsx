import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import Login from "./pages/Login";
import GuestRoute from "./components/GuestRoute";
import EmailVerify from "./pages/EmailVerify";
import ResetPassword from "./pages/ResetPassword";
import AdminDashboard from "./pages/AdminDashboard";
import ProtectedRoute from "./components/ProtectedRoute";
import AutoRedirect from "./components/AutoRedirect";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import RecycleScanner from "./pages/RecycleScanner";
import PickupAndDropoff from "./pages/PickupAndDropoff";
import Aboutus from "./pages/Aboutus";

// كل الصفحات بعد الدمج
import Awareness from "./pages/Awareness";
import AwarenessRecycle from "./pages/AwarenessRecycle";
import AwarenessResourses from "./pages/AwarenessResourses";
import Awarencenotrecycle from "./pages/Awarencenotrecycle";
import Profile from "./pages/Profile";

const App = () => {
  return (
    <BrowserRouter>
      <AutoRedirect />
      <ToastContainer
        position="top-right"
        autoClose={3000}
        hideProgressBar={false}
        newestOnTop={false}
        closeOnClick
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover
      />

      <Routes>
        <Route path="/" element={<Home />} />
        <Route
            path="/login"
            element={
              <GuestRoute>
                <Login />
              </GuestRoute>
            }
        />
        <Route path="/email-verify" element={<EmailVerify />} />
        <Route path="/profile" element={<Profile />} />
        <Route path="/reset-password" element={<ResetPassword />} />
        <Route path="/recycle-scanner" element={<RecycleScanner />} />
        <Route path="/awareness" element={<Awareness/>} />
        <Route path="/AwarenessRecycle" element={<AwarenessRecycle/>} />
        <Route path="/AwarenessResourses" element={<AwarenessResourses/>} />
        <Route path="/Awarencenoyrecycle" element={<Awarencenotrecycle/>} />

        <Route
          path="/admin"
          element={
            <ProtectedRoute requireAdmin={true}>
              <AdminDashboard />
            </ProtectedRoute>
          }
        />

            <Route
        path="pickup"
        element= {<PickupAndDropoff />}
        />
        <Route
        path="about-us"
        element= {<Aboutus/>}
        />
      </Routes>
    </BrowserRouter>
  );
};

export default App;

