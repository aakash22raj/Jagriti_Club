import React from 'react'
import './index.css'
import Navbar from './components/Navbar/Navbar'
import { Route, Routes } from 'react-router-dom'
import Home from './pages/Home/Home'

import Footer from './components/Footer/Footer'
import About_us from './pages/About_us/About_us'
import Event from './pages/Event/Event'
import Gallery from './pages/Gallery/Gallery'
import Organize from './pages/Organize/Organize'
import Gallery_Img from './pages/Gallery_Img/Gallery_Img'
import Alumni from './pages/Alumni/Alumni'
import Team from './pages/Team/Team'
import Payment from './pages/Payment/Payment'


const App = () => {
  return (
    <>
    <Navbar/>
    <div className='app'>
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/about' element={<About_us />} />
        <Route path='/gallery' element={<Gallery />} />
        <Route path='/gallery/:year/:id' element={<Gallery_Img />} />
        <Route path='/team' element={<Team />} />
        <Route path='/event' element={<Event />} />
        <Route path='/alumni' element={<Alumni />} />
        <Route path='/organize' element={<Organize />} />
        <Route path='/payment' element={<Payment />} />
      </Routes>
    </div>
    <Footer />
    </>
  )
}

export default App