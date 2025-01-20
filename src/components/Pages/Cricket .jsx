import React from 'react'
import CricketForm from '../../form/CricketForm'
import './style.css'

function Cricate() {
  return (
    <div className="center animated-background">
        <h1 className='text'>Cricket</h1>
        <div className="rules">
          <h1 className="rules-text">Description :  </h1>
          <div className="content">
          <h className="text">
            🎉 Cricket Carnival 2025! 🏏
          </h>
          <h className="text">
            Hey Cricket Fans! 🌟
            <br />
            Get ready to bat, bowl, and field your way to glory at the ultimate cricket event of the year! 🏏✨
          </h>
          <h className="text">
            💰 Registration Details:
            <br />
            Join the action for just ₹200! One small fee for endless cricketing thrills! 🤑
          </h>
           {/* <h className="text">
            🏆 Prizes:
            All participants will receive a certificate of participation.
            <br />
            Special certificates and bragging rights for the winners and runners-up! 🥇🥈
            <br />
            👥 Team Composition:
            Each team must consist of 8 players and 2 substitute players.                                       
            </h> */}
            <h className="text">    
              👥 Team Composition:
              Each team must consist of 8 players and 2 substitute players.
            </h>      
            <h className="text">          
              📍 Venue: KP College Ground
              <br />
              📆 Date: 24th and 25th January 2025
              <br />
              🕘 Time: 9 am Onwards
            </h>
            <h className="text">
              🫂Join the group for More Updates :
              <a href='https://chat.whatsapp.com/HyQpMk4f7Pt7ZJi3JMRrZn'>
                Join Here
              </a>
            </h>

          </div>
          <div className="details">
            <p className="contact-text">for More information contact :</p>
            <h3 className="contact">Raj Goti : 9428110845</h3>
            <h3 className="contact">Renish Dhaduk : 7990187323</h3>
          </div>
        </div>
        <CricketForm />
    </div>

  )
}

export default Cricate

