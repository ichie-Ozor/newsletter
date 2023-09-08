import React from 'react'
import done from './assets/images/done.svg'


function Success({email, onClick}) {

  return (
    <div className='success'>
      <div className='done'>
        <img src={done} alt='' className='done-img'/>
      </div>
      <h1>Thanks for subscribing!</h1>
      <p>A confirmation email had been sent to <span>{email}</span>. Please open it and click the button inside to confirm your subscription</p>
    <button className='success-button' onClick={onClick}>Dismiss message</button>
    </div>
  )
}

export default Success
