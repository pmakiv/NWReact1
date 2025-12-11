import React, { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Laskuri from './Laskuri'
import Viesti from './Viesti'
import Posts from './Posts'
import CustomerList  from './CustomerList'
import Message from './Message'

const App = () => {

const [showLaskuri, setShowLaskuri] = useState(false)
const [showMessage, setShowMessage] = useState(false)
const [message, setMessage] = useState('')
const [isPositive, setIsPositive] = useState(true)

const huomio = () => {
  alert("Huomio!")
} 

  return (
    <div className="App">
      <h1>Hello from React!</h1>

        {showMessage && <Message message={message} isPositive={isPositive}/> } 

        <CustomerList setIsPositive={setIsPositive} setMessage={setMessage} setShowMessage={setShowMessage}/>

        <Posts/>
        
        {showLaskuri && <Laskuri huomio={huomio}/>}

        {showLaskuri && <button onClick={() =>setShowLaskuri(!showLaskuri)}>Piilota laskuri</button>}
        
        {!showLaskuri && <button onClick={() =>setShowLaskuri(!showLaskuri)}>Näytä laskuri</button>}

      <Viesti teksti="Testiteksti!"/>

    </div>
  )
}
export default App
