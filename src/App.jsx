import React, { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Laskuri from './Laskuri'
import Viesti from './Viesti'
import Posts from './Posts'
import CustomerList  from './CustomerList'

const App = () => {

const [showLaskuri, setShowLaskuri] = useState(false)

const huomio = () => {
  alert("Huomio!")
} 

  return (
    <div className="App">
      <h1>Terve Reactista!</h1>

        <CustomerList/>

        <Posts/>
        
        {showLaskuri && <Laskuri huomio={huomio}/>}

        {showLaskuri && <button onClick={() =>setShowLaskuri(!showLaskuri)}>Piilota laskuri</button>}
        
        {!showLaskuri && <button onClick={() =>setShowLaskuri(!showLaskuri)}>Näytä laskuri</button>}

      <Viesti teksti="Testiteksti!"/>

    </div>
  )
}
export default App
