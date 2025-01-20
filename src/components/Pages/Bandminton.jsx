import React from 'react'
import BandmintonForm from '../../form/BandmintonForm'
import './style.css'

function Bandminton() {
  return (
    <div className="center animated-background">
        <h1 className='text'>Bandminston</h1>
        <div className="rules">
          <h1 className="rules-text">Description : </h1>
          <div className="content">
            <h className="text">🎉 Badminton Bonanza 2025! 🏸
              <br />
              Hey Badminton Enthusiasts! 🌟
              <br />
            Get ready to smash, drop, and conquer at the ultimate badminton event of the year! 🏸✨
              <br />
              <br />
              💰 Registration Details:~
              <br />
            Participation is super easy! Pay just ₹20 On the Events Day, and you’re in for the most exciting matches. One nominal fee, unlimited fun! 🤑
            <br />

            Spread the word, grab your rackets, and let’s make this event a smashing success! 🚀🏸🏆
            </h>
            <h className="text">
            🫂Join the group for More Updates :
            <a href='https://chat.whatsapp.com/FGPQAjtQCOu9ttrhm8TkvE'>
            https://chat.whatsapp.com/FGPQAjtQCOu9ttrhm8TkvE
            </a>
            </h>
            <h className="text">
            🏆 Prizes:

            Every participant will receive a guaranteed certificate.
            Exciting certificates worth more points for the winners and runners-up! 🥇🥈

            </h>
            <h className="text">
              📍 Venue: MTB BADMINTON COURT
              <br />

              📆 Date: 24th and 25st January 2024
              <br />
              🕘 Time: 9 am Onwards
              </h>
          </div>
          <div className="details">
            <p className="contact-text">for More information contact :</p>
            <h3 className="contact">Sahil Sidhdhapara : 9727123384</h3>
          </div>
        </div>
        <BandmintonForm />
    </div>
  )
}

export default Bandminton
