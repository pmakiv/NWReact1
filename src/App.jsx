import React, { useState, useEffect } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Laskuri from './Laskuri'
import Posts from './Posts'
import CustomerList  from './CustomerList'
import Message from './Message'
import Navbar from 'react-bootstrap/Navbar'
import Nav from 'react-bootstrap/Nav'
import 'bootstrap/dist/css/bootstrap.min.css'
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom'
import UserList from './UserList'
import Login from './Login'
import ProductList from './ProductList'

const App = () => {

const [showLaskuri, setShowLaskuri] = useState(false)
const [showMessage, setShowMessage] = useState('')
const [message, setMessage] = useState('')
const [isPositive, setIsPositive] = useState(true)
const [loggedInUser, setLoggedInUser] = useState('')

const huomio = () => {
  alert("Huomio!")
} 

useEffect(() => {
  let storedUser = localStorage.getItem("userName")
  if (storedUser !== null) {
    setLoggedInUser(storedUser)
  }
},[])

const logOut = () => {
  localStorage.clear()
  setLoggedInUser('')
}

  return (
    <div className="App">

      {!loggedInUser &&
       <Login setMessage={setMessage} setIsPositive={setIsPositive} setShowMessage={setShowMessage} setLoggedInUser={setLoggedInUser}/>
       }

      {loggedInUser && localStorage.accessLevelId == "1" &&
      <Router>
        <Navbar bg="dark" variant="dark">
          <Nav className="mr-auto">
            <Nav.Link href='/posts'>Posts</Nav.Link>
            <Nav.Link href='/laskuri'>Laskuri</Nav.Link>
            <Nav.Link href='/customers'>Customers</Nav.Link>
            <Nav.Link href='/products'>Products</Nav.Link>
            <Nav.Link href='/users'>Users</Nav.Link>
            <Nav.Link type="button" onClick={() => logOut()}>{loggedInUser}<br/>Logout</Nav.Link>
            {/* <button onClick={() => logOut()}>{loggedInUser}<br/>Logout</button> */}
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
          <Route path='products' element={<ProductList setMessage={setMessage} setIsPositive={setIsPositive} setShowMessage={setShowMessage}/>}>
          </Route>
          <Route path='/laskuri' element={<Laskuri/>}>
          </Route>
      </Routes>
      </Router>

      }

      {loggedInUser && localStorage.accessLevelId == "2" &&
      <Router>
        <Navbar bg="dark" variant="dark">
          <Nav className="mr-auto">
            <Nav.Link href='/posts'>Posts</Nav.Link>
            <Nav.Link href='/laskuri'>Laskuri</Nav.Link>
            <Nav.Link href='/customers'>Customers</Nav.Link>
            <Nav.Link href='/products'>Products</Nav.Link>
            <Nav.Link type="button" onClick={() => logOut()}>{loggedInUser}<br/>Logout</Nav.Link>
            {/* <button onClick={() => logOut()}>{loggedInUser}<br/>Logout</button> */}
          </Nav>
        </Navbar>

        {showMessage && <Message message={message} isPositive={isPositive}/> } 
      <Routes>
        <Route path='customers' element={<CustomerList setIsPositive={setIsPositive} setMessage={setMessage} setShowMessage={setShowMessage}/>}>
        </Route>
          <Route path='posts' element={<Posts info="These are the best picks from social media." tervehdys="Hello!"/>}>
          </Route>
          <Route path='products' element={<ProductList setMessage={setMessage} setIsPositive={setIsPositive} setShowMessage={setShowMessage}/>}>
          </Route>
          <Route path='/laskuri' element={<Laskuri/>}>
          </Route>
      </Routes>
      </Router>

      }

    </div>
  )
}
export default App
