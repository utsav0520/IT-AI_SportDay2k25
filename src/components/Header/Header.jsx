import React from 'react'
import logo from '../../../scet-logo.jpg'
import './header.css'
import { NavLink } from 'react-router-dom'

function Header() {
  return (
    <div className='logo'>
      <img src={logo} alt="scet" />
      <h3 className="text-h3">IT/AI Sport Day 2k25</h3>
      <button>
        <NavLink to='/home'>Home</NavLink>
    </button>
    </div>
  )
}

export default Header
