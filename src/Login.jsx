import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import React, {useState} from 'react'
import './App.css'
import LoginService from './services/Auth'
import md5 from 'md5'

const Login = ({setIsPositive, setShowMessage, setMessage}) => {

    const [UserName, setUserName] = useState('');
    const [PassWord, setPassWord] = useState('');

    const handleSubmit = (event) => {
        event.preventDefault();
        var userForAuth = {
            userName: UserName,
            passWord: md5(PassWord)
        }

        LoginService.authenticate(userForAuth)
        .then(response => {
            if (response.status === 200) {

                localStorage.setItem("username", response.data.username)
                localStorage.setItem("accesslevelId", response.data.accesslevelId)
                localStorage.setItem("token", response.data.token)

                // console.log(response.data.token)
                // console.log("Login successful. You are logged in as: ")
                // console.log(response)

                setLoggedInUser(response.data.UserName)

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
    <div id='loginWindow'>
        <h2>Login:</h2>

        <form onSubmit={handleSubmit}>
            <div>
                <input type='text' value={UserName} onChange={({target}) => setUserName(target.value)} placeholder='Username'/>
            </div>
            <div>
                <input type='password' value={PassWord} onChange={({target}) => setPassWord(target.value)} placeholder='Password'/>
            </div>
            <input type='submit' value='Login'/>
            <input type='button' value='Empty' onClick={() => emptyFields}/>
        </form>

    </div>
  )
}

export default Login