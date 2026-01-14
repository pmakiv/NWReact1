import React, { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Laskuri from './Laskuri'
import Viesti from './Viesti'
import Posts from './Posts'
import CustomerList  from './CustomerList'
import Message from './Message'
import Navbar from 'react-bootstrap/Navbar'
import Nav from 'react-bootstrap/Nav'
import 'bootstrap/dist/css/bootstrap.min.css'
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom'
import UserList from './UserList'
import Login from './Login'

const App = () => {

const [showLaskuri, setShowLaskuri] = useState(false)
const [showMessage, setShowMessage] = useState(false)
const [message, setMessage] = useState('')
const [isPositive, setIsPositive] = useState(true)
const [loggedInUser, setLoggedInUser] = useState('')

const huomio = () => {
  alert("Huomio!")
} 

  return (
    <div className="App">

      <Login setMessage={setMessage} setIsPositive={setIsPositive} setShowMessage={setShowMessage}/>

      <Router>
        <Navbar bg="dark" variant="dark">
          <Nav className="navi">
            <Nav.Link href='/customers'>Customers</Nav.Link>
            <Nav.Link href='/posts'>Posts</Nav.Link>
            <Nav.Link href='/users'>Users</Nav.Link>
            <Nav.Link href='/laskuri'>Laskuri</Nav.Link>
          </Nav>
        </Navbar>

        {showMessage && <Message message={message} isPositive={isPositive}/> } 
      <Routes>
        <Route path='customers' element={<CustomerList setIsPositive={setIsPositive} setMessage={setMessage} setShowMessage={setShowMessage}/>}>
        </Route>
          <Route path='users' element={<UserList setMessage={setMessage} setIsPositive={setIsPositive} setShowMessage={setShowMessage}/>}>
          </Route>
          <Route path='posts' element={<Posts info="These are the best picks from social media." tervehdys="Hello!"/>}>
          </Route>
          <Route path='/laskuri' element={<Laskuri/>}>
          </Route>
      </Routes>
      </Router>

    </div>
  )
}
export default App
