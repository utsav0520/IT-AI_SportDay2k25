import React from 'react'
import { NavLink } from 'react-router-dom'
import './home.css'

function Home() {
  return (
    <div className='cointaner animated-background-home'>
    <h1 className='text-home'>Let's Participate : </h1>
    <button><NavLink to='/bandminton'>Badminton</NavLink></button>
    <button><NavLink to='/chess'> Chess</NavLink></button>
    <button><NavLink to='/cricket'>Cricket </NavLink></button>
    <button><NavLink to='/tugofwar'>Tug of War </NavLink></button>
    <button><NavLink to='/volleyball'>Volleyball </NavLink></button>
  </div>
  )
}

export default Home
