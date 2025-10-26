import React from "react";
import { Clock4, Phone } from "lucide-react";

const CentersCard = ({ CenterName, address, number, schedule}) => {
  return (
    <div className="w-full p-6 bg-white rounded-lg shadow-md hover:shadow-xl transition-shadow duration-300 w-full  mx-auto border border-2 border-solid border-black">
      <h2 className="text-2xl font-semibold mb-4">{CenterName}</h2>
      <p className="mb-2"><span className="font-medium">Address:</span> {address}</p>
      <p className="mb-2 flex items-center"><Clock4 className="mr-2" /> <span className="font-medium">Working Hours:  </span>  {schedule}</p>
      <p className="mb-2 flex items-center"><Phone className="mr-2" /> <span className="font-medium">Contact Number:  </span>  {number}</p>
    </div>
  );
};

export default CentersCard;
