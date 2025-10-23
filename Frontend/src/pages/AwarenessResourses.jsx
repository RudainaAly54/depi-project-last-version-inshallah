import React from 'react'
import Awarenceheader from '../components/Awarenceheader';
import NavBar from '../components/NavBar';
import Footer from '../components/Footer';
import ResourseCard from '../components/ResourseCard';
const AwarenessResourses = () => {
    return (
        <div className="w-full min-h-screen overflow-x-hidden flex flex-col">
            <NavBar />
            <Awarenceheader />
            <h2 className='text-2xl text-center'>Educational Resources</h2>
            <p className='text-center text-gray-400'>Stay informed with the latest articles and research</p>
            <div className='flex flex-wrap justify-center'>
                <ResourseCard buton="Technology" date="Jan15,2024" title="The Future of Plastic Recycling: New Technologies" text="Exploring breakthrough technologies that could revolutionize how we handle plastic waste..." text2="5 min read" url="https://www.plastics-technology.com/articles/top-10-breakthrough-technologies-for-plastic-recycling" />
                <ResourseCard buton="Economy" date="Jan10,2024" title="How Recycling Creates Jobs in Your Community" text="The economic impact of recycling programs and their role in local job creation..." text2="3 min read"url="https://ecocycle.org/learn-about-zero-waste/jobs-and-economic-benefits/"/>
                <ResourseCard buton="Environment" date="Jan12,2024" title="Ocean Plastic: From Problem to Solution" text="How innovative companies are turning ocean plastic waste into valuable products..." text2="7 min read" url="https://www.oceanicsociety.org/resources/7-ways-to-reduce-ocean-plastic-pollution-today/"/></div>
            <div className="border-2 border-black m-5 px-7 py-6 rounded-2xl shadow-xl">
                <h2 className="text-xl font-semibold">External Resources</h2>
                <p className="text-gray-700 mb-4">
                    Helpful links and organizations for further learning
                </p>
                <div className="flex flex-col sm:flex-row sm:justify-evenly items-center text-lg sm:text-2xl mt-5 gap-2 sm:gap-6 text-center">
                    <span>Government Resources</span>
                    <span>Non-Profit Organizations</span>
                </div>
                <div className="flex flex-col sm:flex-row sm:justify-evenly items-center text-base sm:text-xl mt-5 gap-3 sm:gap-8">
                    <a href="https://www.epa.gov/recycle" className="text-blue-600 hover:underline text-center" target="_blank">
                        ↗️ EPA Recycling Information
                    </a>
                    <a href="https://www.recyclingpartnership.org/" className="text-blue-600 hover:underline text-center" target="_blank">
                        ↗️ The Recycling Partnership
                    </a>
                </div>
                <div className="flex flex-col sm:flex-row sm:justify-evenly items-center text-base sm:text-xl mt-3 gap-3 sm:gap-8">
                    <a href="https://www.conservation.org/" className="text-blue-600 hover:underline text-center" target="_blank">
                        ↗️ Conservation International
                    </a>
                    <a href="https://www.earthday.org/" className="text-blue-600 hover:underline text-center" target="_blank">
                        ↗️ Earth Day Network
                    </a>
                </div>
                <div className="flex flex-col sm:flex-row sm:justify-evenly items-center text-base sm:text-xl mt-3 gap-3 sm:gap-8">
                    <a href="https://marketstreetrecycling.com/7-ways-local-residents-can-contribute-to-recycling-efforts/" className="text-blue-600 hover:underline text-center" target="_blank">
                        ↗️ Local Residents to Recycling
                    </a>
                    <a href="https://search.earth911.com/" className="text-blue-600 hover:underline text-center" target="_blank">
                        ↗️ Earth911 Recycling Search
                    </a>
                </div>
            </div>
            <Footer />
        </div>
    )
}
export default AwarenessResourses;
