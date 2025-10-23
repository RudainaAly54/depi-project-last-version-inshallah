import React from "react";
import NavBar from "../components/NavBar";
import Awarenceheader from "../components/Awarenceheader";
import Awarencecard from "../components/Awarencecard";
import Awarencerate from "../components/Awarencerate";
import WasteLineChart from "../components/WasteLineChart";
import Footer from "../components/Footer";
import WastePieChart from "../components/WastePieChart";
import {
    GlobeAltIcon,
    ArrowTrendingUpIcon,
    ChartBarIcon,
    ArrowPathRoundedSquareIcon
} from "@heroicons/react/24/outline";
const Awareness = () => {
    return (<div className="w-full min-h-screen overflow-x-hidden bg-white flex flex-col ">
        <NavBar />
        <Awarenceheader />
        <div className="flex flex-wrap justify-center">
            <Awarencecard title="2.01B" description="Tons of waste generated globally per year" icon={GlobeAltIcon} color="blue" />
            <Awarencecard title="32%" description="Global recycling rate" icon={ArrowPathRoundedSquareIcon} color="green" />
            <Awarencecard title="75%" description="Of waste could be recycled or composted" icon={ArrowTrendingUpIcon} color="Purple" />
            <Awarencecard title="1.6M" description="Jobs created by recycling indUstry" icon={ChartBarIcon} color="orange" /> </div>
        <Awarencerate />
        <WastePieChart />
        <WasteLineChart />
        <Footer />
    </div>)
};

export default Awareness;

