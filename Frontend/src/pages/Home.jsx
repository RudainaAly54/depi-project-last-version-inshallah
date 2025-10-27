import React from 'react'
import NavBar from '../components/NavBar'
import Header from '../components/Header'
import RecyclingMatters from '../components/RecyclingMatters'
import RecyclingProgram from '../components/RecyclingProgram'
import Features from '../components/Features'
import Testmonials from '../components/Testmonials'
import Footer from '../components/Footer'

const Home = () => {
  return (
<<<<<<< HEAD
    <div className='flex flex-col min-h-screen'>
      <NavBar/>
      <Header/>
      <RecyclingMatters/>
      <RecyclingProgram/>
      <Testmonials/>
      <Features/>
      <Footer/>
=======
    <div >
      <NavBar/>
      <div className='flex flex-col min-h-screen overflow-x-hidden'>
        <Header/>
        <RecyclingMatters/>
        <RecyclingProgram/>
        <Testmonials/>
        <Features/>
        <Footer/>
      </div>
>>>>>>> 01c123bc57e31401aa3b9e5d1f67dee9e1186cb0
    </div>
  )
}

export default Home
