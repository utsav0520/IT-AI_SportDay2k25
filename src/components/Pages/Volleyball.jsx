import React from 'react'
import VolleyBallForm from '../../form/VolleyBallForm'
import './style.css'

function Volleyball() {
  return (
    <div className="center animated-background">
        <h1 className='text'>VolleyBall</h1>
        <div className="rules">
          <h1 className="rules-text">Rules : </h1>
          <div className="content">
            <h className="text">Carray out Your Own Racat.</h>
            <h className="text">Carray out Your Own Racat.</h>
            <h className="text">Carray out Your Own Racat.</h>
            <h className="text">Carray out Your Own Racat.</h>
            <h className="text">Carray out Your Own Racat.</h>
          </div>
          <div className="details">
            <p className="contact-text">for More information contact :</p>
            <h3 className="contact">utsav Vachhani : 9512655868</h3>
            <h3 className="contact">utsav Vachhani : 9512655868</h3>
          </div>
        </div>
        <VolleyBallForm/>
    </div>
  )
}

export default Volleyball
