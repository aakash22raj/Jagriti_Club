import React from 'react'
import './index.css'
import { Route, Routes } from 'react-router-dom'
import Navbar from './components/Navbar/Navbar'



const App = () => {
  return (
    <>
    <Navbar/>
    <div className='app'>
      <Routes>
        <Route path='/' />
      </Routes>
    </div>
    </>
  )
}

export default App