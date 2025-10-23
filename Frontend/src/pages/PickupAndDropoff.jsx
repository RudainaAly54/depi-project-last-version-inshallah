import React, { useState } from "react";
import NavBar from "../components/NavBar";
import PickupPage from "./PickupPage";
import CentersPage from "./CentersPage";
import Footer from "../components/Footer";

const PickupAndDropoff = () => {
    const [activePage, setActivePage] = useState('pickup')
    const handlePageChange = (newPage) => {
        setActivePage(newPage);
        window.location.href = `#${newPage}`;
    }
return(
    <div className="bg-gray-100 min-h-full pb-10">
        <NavBar/>
       <div className="relative w-[90%] h-10 bg-gray-200 rounded-full mx-auto mt-10 flex justify-between items-center p-1 overflow-hidden">

      {/* Sliding background */}
      <div
        className={`absolute top-1 left-1 h-[80%] w-[49%] bg-white rounded-full shadow-md transition-all duration-300 ease-in-out ${
          activePage === "pickup" ? "translate-x-full" : "translate-x-0"
        }`}
      ></div>

      {/* Buttons */}
      <button
        to="/Centers"
           onClick={() => {handlePageChange('centers')}}
        className={`relative z-10 w-1/2 text-center font-medium transition-all duration-300 ${
          activePage === "centers" ? "text-black" : "text-gray-500"
          
        }`}
      >
        Find Centers
      </button>

      <button
        to="/Pickup"
        onClick={() => {handlePageChange('pickup')}}
        className={`relative z-10 w-1/2 text-center font-medium transition-all duration-300 ${
          activePage === "pickup" ? "text-black" : "text-gray-500"
        }`}
      >
        Schedule Pickup
      </button>
    </div>
        {activePage === 'pickup' ? <PickupPage/> : <CentersPage/>}
        
        <Footer/>
    </div>
)
}

export default PickupAndDropoff;