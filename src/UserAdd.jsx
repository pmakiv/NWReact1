import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import React, {useState} from 'react'
import './App.css'
import UserService from './services/User'
import md5 from 'md5'
import axios from 'axios'

const UserAdd = ({setLisaystila, setIsPositive, setShowMessage, setMessage}) => {

    const [newFirstName, setNewFirstName] = useState('');
    const [newLastName, setNewLastName] = useState('');
    const [newEmail, setNewEmail] = useState('');
    const [newAccessLevelId, setNewAccessLevelId] = useState(2);
    const [newUserName, setNewUserName] = useState('');
    const [newPassWord, setNewPassWord] = useState('');

    const handleSubmit = (event) => {
        event.preventDefault();
        var newUser = {
            FirstName: newFirstName,
            LastName: newLastName,
            Email: newEmail,
            AccessLevelId: parseInt(newAccessLevelId),
            UserName: newUserName,
            PassWord: md5(newPassWord)
        }
        console.log(newUser)

        const token = localStorage.getItem('token')
                UserService.setToken(token)

        UserService.create(newUser)
        .then(response => {
            if (response.status === 200) {
                setMessage(`Added new user: ${newUser.FirstName} ${newUser.LastName} with username ${newUser.UserName}.`)
                setIsPositive(true)
                setShowMessage(true)
                setTimeout(() => {
                    setShowMessage(false)
                }, 5000)
                setLisaystila(false)
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
  return (
    <div id='addNew'>
        <h2>Add user:</h2>

        <form onSubmit={handleSubmit}>
            <div>
                <input type='text' value={newFirstName} onChange={({target}) => setNewFirstName(target.value)} placeholder='First name'/>
            </div>
            <div>
                <input type='text' value={newLastName} onChange={({target}) => setNewLastName(target.value)} placeholder='Last name'/>
            </div>
            <div>
                <input type='email' value={newEmail} onChange={({target}) => setNewEmail(target.value)} placeholder='Email'/>
            </div>
            <div>
                <input type='number' value={newAccessLevelId} onChange={({target}) => setNewAccessLevelId(target.value)} placeholder='Access level ID'/>
            </div>
            <div>
                <input type='text' value={newUserName} onChange={({target}) => setNewUserName(target.value)} placeholder='Username'/>
            </div>
            <div>
                <input type='password' value={newPassWord} onChange={({target}) => setNewPassWord(target.value)} placeholder='Password'/>
            </div>
            <input type='submit' value='save'/>
            <input type='button' value='back' onClick={() => setLisaystila(false)}/>
        </form>

    </div>
  )
}

export default UserAdd