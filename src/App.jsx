import React from 'react'
import { NavLink } from 'react-router-dom'
import './App.css'

function APP() {
  return (
    <div className='cointaner'>
    <h1 className='text-home'>Let's Participate</h1>
    <button><NavLink to='/cricate'>Cricate</NavLink></button>
    <button><NavLink to='/vollyball'>Vollyball </NavLink></button>
    <button><NavLink to='/tugofwar'>TugofWar </NavLink></button>
    <button><NavLink to='/bandminton'>BadMiniton</NavLink></button>
    <button><NavLink to='/chess'> Chess</NavLink></button>
    <button><NavLink to='/football'> FootBall</NavLink></button>
  </div>
  )
}

export default APP
