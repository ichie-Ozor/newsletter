import { useState } from 'react';
import './App.css';
import Email from './Email.js';
import Success from './Success.js';
import Update from './update.js';


function App() {
  const [email, setEmail] = useState()
  const [clicked, setClicked] = useState(false)

  const onSubmitHandler1 = async(event) => {
    event.preventDefault()
    try{
      const response = await fetch('http://localhost:8000/account', {
        method: 'POST',
        header: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(email),
      });
      const result = await response.json()
      console.log("success:", result)
    } catch (error){
      console.log("Error:", error, "here")
    }
    setClicked(true)
  }


  console.log(clicked)
  console.log("see me here", email)

const onChange = (e) => {
  setEmail(e.target.value)
  console.log(e)
}

const onClick1 = () => {
  setClicked(false)
}

  return (
    <div className="App">
      {clicked ? 
      <Success email={email} onClick={onClick1}/> :
      <>
    <Update />
    <Email onSubmitHandler={onSubmitHandler1} onChange={onChange} value={email}/>
    </>}
    </div>
  );
}

export default App;
