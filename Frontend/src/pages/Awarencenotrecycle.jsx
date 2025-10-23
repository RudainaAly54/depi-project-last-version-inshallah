import React from 'react'
import Awarenceheader from '../components/Awarenceheader';
import NavBar from '../components/NavBar';
import Footer from '../components/Footer';
import Notrecyclecard from '../components/Notrecyclecard';
const Awarencenotrecycle = () => {
    return (
        <div className="w-full min-h-screen overflow-x-hidden flex flex-col">
            <NavBar />
            <Awarenceheader />
            <h2 className='text-2xl text-center font-bold'>What not to Recycle</h2>
            <p className='text-center text-gray-700'>Learn about items that can't go in regular recycling and their proper disposal methods</p>
            <div className='flex flex-wrap mx-20 justify-center'>
                <Notrecyclecard title="Plastic Bags" text="Can jam sorting machines" items="Return to store collection bins" />
                <Notrecyclecard title="Styrofoam" text="Not economically viable to recycle" items="Reuse for packaging " />
                <Notrecyclecard title="Pizza Boxes (greasy)" text="Grease contaminates paper recycling" items="Compost clean parts, trash greasy sections" />
                <Notrecyclecard title="Light Bulbs" text="Contain hazardous materials" items="Take to hardware store or special collection" />
                <Notrecyclecard title="Electronics" text="Require specialized processing" items="manufacturer take-back" />
                <Notrecyclecard title="Batteries" text="Contain toxic chemicals" items="Battery collection bins at stores" />
            </div>
            <div className='bg-amber-100 text-orange-400 m-8 p-4 rounded-2xl'>
                <h2 className='font-bold'> Important Reminders</h2>
                <br />
                <ul>
                    <li>•Always check with your local recycling program for specific guidelines</li>
                    <li>•When in doubt, throw it out - contamination can ruin entire batches of recyclables</li>
                    <li>• Look for manufacturer take-back programs for electronics and other specialty items</li>
                    <li>• Consider donation or reuse before disposal for items in good condition</li>
                </ul>
            </div>
            <Footer />
        </div>
    )
}

export default Awarencenotrecycle;
