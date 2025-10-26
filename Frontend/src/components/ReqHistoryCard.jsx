import React from "react";

const ReqHistoryCard = ({date, material, time, status, address, weight, scheduledDate, requestId}) =>{
  
  // Status color mapping for new pickup entity statuses
  const getStatusColor = (status) => {
    switch(status?.toLowerCase()) {
      case 'pending': return 'bg-yellow-100 text-yellow-800';
      case 'confirmed': return 'bg-blue-100 text-blue-800';
      case 'in_progress': return 'bg-orange-100 text-orange-800';
      case 'completed': return 'bg-green-100 text-green-800';
      case 'cancelled': return 'bg-red-100 text-red-800';
      // Legacy status support
      case 'Pending': return 'bg-yellow-100 text-yellow-800';
      case 'Confirmed': return 'bg-blue-100 text-blue-800';
      case 'In Progress': return 'bg-orange-100 text-orange-800';
      case 'Completed': return 'bg-green-100 text-green-800';
      case 'Cancelled': return 'bg-red-100 text-red-800';
      default: return 'bg-gray-100 text-gray-800';
    }
  };

  // Format status for display
  const formatStatus = (status) => {
    if (!status) return 'Unknown';
    return status.replace('_', ' ').replace(/\b\w/g, l => l.toUpperCase());
  };

return (
<div className="flex flex-col bg-transparent border-2 border-black rounded-[20px] relative text-start p-3 w-full max-w-[400px] mb-3">
  <div className="pr-20"> {/* Add padding to avoid overlap with status */}
    {requestId && (
      <p className="text-gray-400 text-xs font-mono">ID: {requestId}</p>
    )}
    <h3 className="font-black text-black text-sm">Requested: {date}</h3>
    {scheduledDate && (
      <p className="text-gray-600 text-xs">Scheduled: {scheduledDate}</p>
    )}
    <p className="text-gray-500 text-xs mt-1">Time: {time}</p>
    <p className="text-gray-500 text-xs">Materials: {material}</p>
    {address && (
      <p className="text-gray-500 text-xs">Address: {address}</p>
    )}
    {weight && (
      <p className="text-gray-500 text-xs">Weight: {weight} kg</p>
    )}
  </div>

  <div className="flex gap-1.5 mt-3">
    <button className="bg-transparent border-2 border-black rounded-[10px] text-black px-3 py-1 text-[10px] flex justify-center items-center hover:bg-black hover:text-white transition-colors">
      Modify
    </button>
    <button className="bg-transparent border-2 border-red-500 rounded-[10px] text-red-500 px-3 py-1 text-[10px] flex justify-center items-center hover:bg-red-500 hover:text-white transition-colors">
      Cancel
    </button>
  </div>

  <div className={`${getStatusColor(status)} rounded-xl px-2 py-1 absolute top-2.5 right-2 text-xs font-medium`}>
    <p>{formatStatus(status)}</p>
  </div>
</div>

)
}
export default ReqHistoryCard