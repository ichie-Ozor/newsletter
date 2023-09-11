import { useState } from 'react';
import './App.css';
import Email from './Email.js';
import Success from './Success.js';
import Update from './update.js';


function App() {
  const [formData, setFormData] = useState();
  const [email, setEmail] = useState()
  const [clicked, setClicked] = useState(false)

  const onChange = (e) => {
    setFormData({
      email: e.target.value
    })
    setEmail(e.target.value)
    console.log(e.target.value)
  }

  const onSubmitHandler1 = async(event) => {
    event.preventDefault()
    try{
      console.log(formData)
      const response = await fetch('http://localhost:8000/account', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(formData),
      });
      const result = await response.json()
      console.log("success:", result)
    } catch (error){
      console.log("Error:", error)
    }
    setClicked(true)
  }


  
  // console.log("see me here", email)


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
