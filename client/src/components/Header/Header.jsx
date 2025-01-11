import React from 'react'
import './Header.css'
import { Link } from "react-router-dom";


const Header = () => {
  return (
    <div className='header'>
        <div className='header-container'>
            <h2>Pay back to society</h2>
            <p>"Pay Back to Society" means contributing positively to the community through acts of kindness, service, sharing knowledge, or supporting others' growth.</p>
            <Link to='/organize' onClick={()=>setMenu("home")}><button>Organize</button></Link>
        </div>
    </div>
  )
}

export default Header