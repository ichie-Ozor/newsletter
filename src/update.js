import React from 'react'
import mobile from './assets/images/mobile.svg'
import desktop from './assets/images/desktop.svg'
import icon from './assets/images/icon.svg'

function Update() {
  return (
    <div>
      <img src={mobile} alt='' className='mobile'/>
      <img src={desktop} alt='' className='desktop'/>
      <div className='update-container'>
        <h1>Stay updated!</h1>
        <p className='update-container-text'>Join 60,000+ product managers receiving monthly updates on:</p>
        <div className='update-container-item'>
          <img src={icon} alt=''/>
          <p>Product discovery and building what matters</p>
        </div>
        <div className='update-container-item'>
          <img src={icon} alt=''/>
          <p>Measuring to ensure updates are a success</p>
        </div>
        <div className='update-container-item'>
          <img src={icon} alt=''/>
          <p>And much more!</p>
        </div>
      </div>
    </div>
  )
}

export default Update
