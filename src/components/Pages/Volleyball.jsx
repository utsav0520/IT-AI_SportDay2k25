import React from 'react'
import VolleyBallForm from '../../form/VolleyBallForm'
import './style.css'

function Volleyball() {
  return (
    <div className="center animated-background">
        <h1 className='text'>VolleyBall</h1>
        <div className="rules">
          <h1 className="rules-text">Description :</h1>
          <div className="content">
            <h className="text">
              🏐 Hey Volleyball Enthusiasts! 🌟
              <br />
              Get ready to serve, spike, and smash your way to victory at the most exciting volleyball event of the year! 🏆🔥
            </h>
            <h className="text">
              💰 Registration Details:
              <br />
              Join the action for just ₹200 per team! One small fee for endless volleyball thrills! 🤑
            </h>
            <h className="text">
              📍 Venue: MTB College Ground
              <br />
              📆 Date: 29th March 2025
              <br />
              🕘 Time: 10 AM Onwards
            </h>
            <h className="text">
              👥 Team Composition:
              <br />
              - Each team must have a minimum of 6 players.
              <br />
              - Rotation is mandatory.
              <br />
              - Tossing while serving is required.
              <br />
              - Match Format: 15-point game, with a court side swap at 7 points.
              <br />
              - Referee’s decision will be final. ⚖
            </h>
            <h className="text">
              📌 Register Now!
            </h>
           <h className="text">
              Spread the word, gather your squad, and let’s make this volleyball event an unforgettable showdown! 🚀🏐🏅
              <br />
              See you on the court! Good luck! ✨
            </h>

            <h className="text">
              🫂Join the group for More Updates :
              <a href='https://chat.whatsapp.com/Jt7uo4sHGqsA9XukUGA5Sn'>
                Join Now
              </a>
            </h>
        </div>

          <div className="details">
            <p className="contact-text">for More information contact :</p>
            <h3 className="contact">Milap Gohil - 9429914065</h3>
          </div>
        </div>
        <VolleyBallForm/>
    </div>
  )
}

export default Volleyball
