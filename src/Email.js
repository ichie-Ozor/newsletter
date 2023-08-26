import React, { useState } from 'react'



function Email() {
  const [email, setEmail] = useState("")
  
  const onSubmitHandler = (e) => {
    e.preventDefault()
    setEmail("")
    console.log("i dey here", email)
  }
  

  return (
    <form className='email' onSubmit={onSubmitHandler}>
    <p>Email address</p>
    <span className='errorMessage'>invalid email required</span>
    <div className='input'>
    <input 
    placeholder='    email@company.com'
    type='email'
    value={email}
    onChange={e => setEmail(e.target.value)}
    />
    <button>Subscribe to monthly newsletter</button>
    </div>
    </form>
  )
}

export default Email
