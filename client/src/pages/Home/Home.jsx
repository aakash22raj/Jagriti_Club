import React from 'react'
import './Home.css';
import Header from '../../components/Header/Header'
import Join from '../../components/Join/Join'
import About from '../../components/About/About'
import Idols from '../../components/Idols/Idols'
import Develop from '../../components/Develop/Develop'

const Home = () => {
  return (
    <div className='home'>
      <Header />
      <Idols />
      <About />
      <Join />
      <Develop />
    </div>
  )
}

export default Home