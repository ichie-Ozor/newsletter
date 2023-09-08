import React from 'react'

function Email({email, onChange, onSubmitHandler}) {
  // const [email, setEmail] = useState("")
 
  // const onSubmitHandler = (e) => {
  //   e.preventDefault()
  //   setEmail("") 
  //   console.log("i dey here",email)
  // }

  return (
    <form className='email' onSubmit={onSubmitHandler}>
        <p>Email address</p>
        
    <div className='input'>
        <input 
        placeholder='    email@company.com'
        type='email'
        value={email}
        onChange={onChange}
        // onChange={e => setEmail(e.target.value)}
        />
        <span className='errorMessage'>invalid email required</span>
        <button type="submit">Subscribe to monthly newsletter</button>
    </div>
    </form>
  
  )
}
export default Email
