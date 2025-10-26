import React, { useState, useEffect } from "react";
import axios from "axios";
import CentersCard from "../components/CentersCard";
import MapComp from "../components/MapComp";

const CentersPage = () => {
  const [loading, setLoading] = useState(false);

  const centers = [
    {
      _id: "1",
      name: "Health Center A",
      address: "Azzebt Saad, Alexandria",
      phone: "555-1234",
      schedule: "Mon-Fri 9am-5pm",
    },

    {
      _id: "2",
      name: "Wellness Clinic B",
      address: "Soter, Alexandria",
      phone: "555-5678",
      schedule: "Mon-Sat 8am-6pm",
    },
    {
      _id: "3",
      name: "Care Hub C", 
      address: "El-Montaza, Alexandria",
      phone: "555-8765",
      schedule: "Tue-Sun 10am-4pm",
    },
  ]
/*   // Function to fetch all centers
  const fetchAllCenters = async () => {
    setLoading(true);
    try {
      const response = await axios.get("http://localhost:5000/api/centers"); // adjust the URL as needed
      
      if (response.data.success) {
        setCenters(response.data.data);
      }
    } catch (error) {
      console.error("Error fetching centers:", error);
    } finally {
      setLoading(false);
    }
  };

  // Fetch centers on component mount
  useEffect(() => {
    fetchAllCenters();
  }, []); */

  return (
    <section className="flex flex-col  md: flex-row items-center mx-10  ">
      {/* Map */}
      <div className="w-[50%] md:w-[50%] h-[400px] mt-6">
        <MapComp className="w-full h-[500px]" />
      </div>

      {/* Centers */}
      <div className="flex flex-col gap-6 mt-8 px-4 md:px-20 mb-10">
        {loading ? (
        <LoadingSpinner />
        ) : centers.length > 0 ? (
          centers.map((center) => (
            <CentersCard
              key={center._id}
              CenterName={center.name}
              address={center.address}
              number={center.phone}
              schedule={center.schedule}
            />
          ))
        ) : (
          <p>No centers available.</p>
        )}
      </div>
    </section>
  );
};

export default CentersPage;