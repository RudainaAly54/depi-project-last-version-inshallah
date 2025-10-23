import React from 'react'
import Awarenceheader from '../components/Awarenceheader';
import NavBar from '../components/NavBar';
import AwarenessRecyclecard from '../components/AwarenessRecyclecard';
import Footer from '../components/Footer';
const AwarenessRecycle = () => {
    return (
        <div className="w-full min-h-screen overflow-x-hidden flex flex-col">
            <NavBar />
            <Awarenceheader />
            <div className='flex flex-wrap justify-center mx-20 '>
                <AwarenessRecyclecard title="🧴 Plastic" text="Clean containers, check recycling numbers" dos={["Clean thoroughly", "Remove caps/lids", "Check numbers 1–7"]}
                    donts={["Plastic bags", "Styrofoam", "Dirty containers"]} />
                <AwarenessRecyclecard title="📄Paper" text="Keep dry, remove contaminants" dos={["Flatten cardboard ", "Remove staples", "Keep dry"]}
                    donts={["Wet paper", "Wax-coated paper", "Tissue paper"]} />
                <AwarenessRecyclecard title="🍶Glass" text="Rinse clean, separate by color" dos={["Rinse containers ", "Remove metal lids", "Separate colors"]}
                    donts={["Broken glass", "Light bulbs", "Mirrors"]} />
                <AwarenessRecyclecard title="🥫Metal" text="Clean cans, separate types" dos={["Clean food residue ", "Crush to save space", "Include steel cans"]}
                    donts={["Paint cans", "Aerosol cans", "Hazardous materials"]} />
            </div>
            <Footer />
        </div>
        
    )
    
}
export default AwarenessRecycle;
