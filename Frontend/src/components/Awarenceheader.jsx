<<<<<<< HEAD
import React from "react";
import { NavLink } from "react-router-dom";
const Awarenceheader = (props) => {
    return (<div className="m-5">
        <h2 className="Bold text text-3xl font-bold mb-4">
            Environmental Awareness
        </h2>
        <p>Learn about recycling's impact, discover best practices, and stay informed about environmental sustainability.</p>
        <ul className="flex flex-col sm:flex-row flex-wrap justify-center sm:justify-between gap-3 sm:gap-6 text-sm lg:text-base  text-gray-800 font-medium  bg-gray-100 px-3 py-1 mt-3 rounded-4xl">
            <li><NavLink to="/awareness"
                className={({ isActive }) => isActive ? "bg-white px-6 py-2 rounded-3xl block text-center" : "px-4 py-2 rounded-3xl block text-center"}>
                Facts & Stats
            </NavLink>
            </li>
            <li><NavLink to="/AwarenessRecycle"
                className={({ isActive }) => isActive ? "bg-white px-6 py-2 rounded-3xl block text-center" : "px-4 py-2 rounded-3xl block text-center"}>
                How To Recycle
            </NavLink>
            </li>
            <li><NavLink to="/AwarenessResourses"
                className={({ isActive }) => isActive ? "bg-white px-6 py-2 rounded-3xl block text-center" : "px-4 py-2 rounded-3xl block text-center"}>
                Resources
            </NavLink>
            </li>
            <li><NavLink to="/Awarencenoyrecycle"
                className={({ isActive }) => isActive ? "bg-white px-6 py-2 rounded-3xl block text-center" : "px-4 py-2 rounded-3xl block text-center"}>
                What not to Recycle
            </NavLink>
            </li>
        </ul>
    </div>)
};
export default Awarenceheader;
=======
import React from "react";
import { NavLink } from "react-router-dom";
const Awarenceheader = (props) => {
    return (<div className="m-5">
        <h2 className="Bold text text-3xl font-bold mb-4">
            Environmental Awareness
        </h2>
        <p>Learn about recycling's impact, discover best practices, and stay informed about environmental sustainability.</p>
        <ul className="flex flex-col sm:flex-row flex-wrap justify-center sm:justify-between gap-3 sm:gap-6 text-sm lg:text-base text-gray-800 font-medium shadow-md transition-all duration-300 ease-in-out bg-gray-300 px-2 py-1 mt-3 rounded-4xl">
            {[
    { to: "/awareness", label: "Facts & Stats", end: true },
    { to: "recycle", label: "How To Recycle" },
    { to: "resources", label: "Resources" },
    { to: "not-recycle", label: "What not to Recycle" },
  ].map((link) => (
    <li key={link.to} className="flex-1 min-w-[120px] text-center">
      <NavLink to={link.to} end={link.end}
        className={({ isActive }) => isActive ? "bg-white px-1 py-2 rounded-3xl block text-center transition-all duration-300 ease-in-out" : "px-1 py-2 rounded-3xl block text-center transition-all ease-in-out duration-300"}>
        {link.label}
      </NavLink>
    </li>
  ))}
</ul>
    </div>)
};
export default Awarenceheader;
>>>>>>> 01c123bc57e31401aa3b9e5d1f67dee9e1186cb0
