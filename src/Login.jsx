import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import React, {useState} from 'react'
import './App.css'
import LoginService from './services/Auth'
import md5 from 'md5'
import UserAdd from './UserAdd'

const Login = ({setIsPositive, setShowMessage, setMessage, setLoggedInUser}) => {

    const [userName, setUserName] = useState('');
    const [passWord, setPassWord] = useState('');
    const [lisaystila, setLisaystila] = useState(false)
    const [loginStatus, setLoginStatus] = useState(true)

    const handleSubmit = (event) => {
        event.preventDefault();
        var userForAuth = {
            userName: userName,
            passWord: md5(passWord)
        }

        LoginService.authenticate(userForAuth)
        .then(response => {
            if (response.status === 200) {

                localStorage.setItem("userName", response.data.userName)
                localStorage.setItem("accessLevelId", response.data.accessLevelId)
                localStorage.setItem("token", response.data.token)

                // console.log(response.data.token)
                // console.log("Login successful. You are logged in as: ")
                // console.log(response)

                setLoggedInUser(response.data.userName)

                setMessage(`Logged in as: ${userForAuth.userName}`)
                setIsPositive(true)
                setShowMessage(true)
                setTimeout(() => {
                    setShowMessage(false)
                }, 5000)
            }
        })
        .catch(error => {
            setMessage(error)
            setIsPositive(false)
            setShowMessage(true)
            setTimeout(() => {
                setShowMessage(false)
            }, 6000)
    })
        }

        const emptyFields = () => {
            setUserName("")
            setPassWord("")
        }
  return (
    <div id='loginWindow' >
        <h2>Login:</h2>

        <form onSubmit={handleSubmit} loginStatus>
            
            <div>
                <input type='text' value={userName} onChange={({target}) => setUserName(target.value)} placeholder='Username'/>
            </div>
            <div>
                <input type='password' value={passWord} onChange={({target}) => setPassWord(target.value)} placeholder='Password'/>
            </div>
            <input type='submit' value='Login'/>
            <input type='button' value='Empty' onClick={() => emptyFields()}/>
        </form>
        <br/>
         {!lisaystila && loginStatus && <button className='nappi' onClick={() => setLisaystila(true)}>Register</button>}

        {lisaystila && <UserAdd  setLisaystila={setLisaystila} setLoginStatus={setLoginStatus}
        setIsPositive={setIsPositive} setMessage={setMessage} setShowMessage={setShowMessage} />}
    </div>
  )
}

export default Login