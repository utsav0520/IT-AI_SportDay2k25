import React from 'react'
import './footer.css'

function Footer() {
  return (
    <div className='main'>
      <div className="cointener">
        <h3 className="heading">Faculty Coordinator: </h3>
        <div className="faculty-name">
          <p className="name">Hiren Vavaiya</p>
        </div>
      </div>
      <div className="cointener">
        <h3 className="heading">Developed By : </h3>
        <div className="faculty-name">
          <p className="name">Utsav Vachhani</p>
        </div>
      </div>
      <div className="cointener">
        <h3 className="heading">Student Head : </h3>
        <div className="faculty-name">
          <p className="name">Preet Mehta</p>
          <p className="name">Utsav Vachhani</p>
        </div>
      </div>
    </div>
  )
}

export default Footer
