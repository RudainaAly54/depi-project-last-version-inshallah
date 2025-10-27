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

<<<<<<< HEAD
// كل الصفحات بعد الدمج
=======
>>>>>>> 01c123bc57e31401aa3b9e5d1f67dee9e1186cb0
import Awareness from "./pages/Awareness";
import AwarenessRecycle from "./pages/AwarenessRecycle";
import AwarenessResourses from "./pages/AwarenessResourses";
import Awarencenotrecycle from "./pages/Awarencenotrecycle";
<<<<<<< HEAD
=======
import FactsStats from "./pages/FactsStats";

>>>>>>> 01c123bc57e31401aa3b9e5d1f67dee9e1186cb0
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
<<<<<<< HEAD
            path="/login"
            element={
              <GuestRoute>
                <Login />
              </GuestRoute>
            }
=======
          path="/login"
          element={
            <GuestRoute>
              <Login />
            </GuestRoute>
          }
>>>>>>> 01c123bc57e31401aa3b9e5d1f67dee9e1186cb0
        />
        <Route path="/email-verify" element={<EmailVerify />} />
        <Route path="/profile" element={<Profile />} />
        <Route path="/reset-password" element={<ResetPassword />} />
        <Route path="/recycle-scanner" element={<RecycleScanner />} />
<<<<<<< HEAD
        <Route path="/awareness" element={<Awareness/>} />
        <Route path="/AwarenessRecycle" element={<AwarenessRecycle/>} />
        <Route path="/AwarenessResourses" element={<AwarenessResourses/>} />
        <Route path="/Awarencenoyrecycle" element={<Awarencenotrecycle/>} />
=======
        <Route path="/awareness" element={<Awareness />}>
          <Route index element={<FactsStats />} />
          <Route path="recycle" element={<AwarenessRecycle />} />
          <Route path="resources" element={<AwarenessResourses />} />
          <Route path="not-recycle" element={<Awarencenotrecycle />} />
        </Route>
>>>>>>> 01c123bc57e31401aa3b9e5d1f67dee9e1186cb0

        <Route
          path="/admin"
          element={
            <ProtectedRoute requireAdmin={true}>
              <AdminDashboard />
            </ProtectedRoute>
          }
        />

<<<<<<< HEAD
            <Route
        path="pickup"
        element= {<PickupAndDropoff />}
        />
        <Route
        path="about-us"
        element= {<Aboutus/>}
        />
=======
        <Route path="pickup" element={<PickupAndDropoff />} />
        <Route path="about-us" element={<Aboutus />} />
>>>>>>> 01c123bc57e31401aa3b9e5d1f67dee9e1186cb0
      </Routes>
    </BrowserRouter>
  );
};

export default App;
<<<<<<< HEAD

=======
>>>>>>> 01c123bc57e31401aa3b9e5d1f67dee9e1186cb0
