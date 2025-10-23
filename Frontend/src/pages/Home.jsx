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
    <div className='flex flex-col min-h-screen'>
      <NavBar/>
      <Header/>
      <RecyclingMatters/>
      <RecyclingProgram/>
      <Testmonials/>
      <Features/>
      <Footer/>
    </div>
  )
}

export default Home
