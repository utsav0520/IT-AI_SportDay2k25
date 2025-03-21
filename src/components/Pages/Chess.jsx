import React from 'react'
import ChessForm from '../../form/ChessForm'
import './style.css'

function Chess() {
  return (
        <div className="center animated-background">
        <h1 className='head-text'>Chess</h1>
        <div className="rules">
          <h1 className="rules-text">Rules : </h1>
          <div className="rules">
          <div className="content">
            {/* <h className="text">
              ♟ Hey Chess Enthusiasts! 🌟
              <br />
              Get ready to strategize, outmaneuver, and checkmate your way to glory at the most thrilling chess event of the year! 🏆🔥
            </h> */}
            <h className="text">
              💰 Registration Details:
              <br />
              Join the mind battle for just ₹10 per player! One small fee for endless chess excitement! 🤑
            </h>
            <h className="text">
              📍 Venue: MTB College Ground
              <br />
              📆 Date: 29th March
              <br />
              🕘 Time: 10 AM Onwards
            </h>
            <h className="text">
              ♟ Game Rules:
              <br />
              - Standard chess rules apply.
              <br />
              - Matches will be conducted in a knockout format.
              <br />
              - Each player will have a fixed time per move (as per tournament settings).
              <br />
              - Referee’s decision will be final. ⚖
            </h>
            <h className="text">
                      🫂Join the group for More Updates :
                      <a href='https://chat.whatsapp.com/HTgNC9Erfdk0OHwQbGPCga'>
                        Join Here
                      </a>
                    </h>
            <h className="text">
              Spread the word, sharpen your strategies, and let's make this chess event an unforgettable showdown! 🚀♟🏅
              <br />
              See you at the board! Good luck! ✨
            </h>
          </div>
        </div>

          <div className="details">
            <p className="contact-text">for More information contact :</p>
            <h3 className="contact">Utsav Vachhani : 9512655868</h3>
            <h3 className="contact">Manav Avaiya : 9106070799</h3>
          </div>
        </div>
        <ChessForm />
    </div>
  )
}

export default Chess
