import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import React, {useState} from 'react'
import './App.css'
import UserService from './services/User'

const UserEdit = ({setMuokkaustila, muokattavaUser, setIsPositive, setShowMessage, setMessage}) => {

    const [editUserId, setNewUserId] = useState(muokattavaUser.userId);
    const [editFirstName, setNewFirstName] = useState(muokattavaUser.FirstName);
    const [editLastName, setNewLastName] = useState(muokattavaUser.lastName);
    const [editEmail, setNewEmail] = useState(muokattavaUser.email);
    const [editAccessLevelId, setNewAccessLevelId] = useState(muokattavaUser.accessLevelId);
    const [editUserName, setUserName] = useState(muokattavaUser.userName);

    const handleSubmit = (event) => {
        event.preventDefault();
        var editUser = {
            UserId: editUserId,
            FirstName: editFirstName,
            LastName: editLastName,
            Email: editEmail,
            AccessLevelId: editAccessLevelId,
            UserName: editUserName,
        }
        UserService.update(editUser)
        .then(response => {
            if (response.status === 200) {
                setMessage("Edited user: " + editUser.UserName)
                setIsPositive(true)
                setShowMessage(true)
                setTimeout(() => {
                    setShowMessage(false)
                }, 5000)
                setMuokkaustila(false)
            }
        })
        .catch(error => {
            setMessage("Error, something went wrong.")
            setIsPositive(false)
            setShowMessage(true)
            setTimeout(() => {
                setShowMessage(false)
            }, 6000)
    })
        }
  return (
    <div id='edit'>
        <h2>Edit user:</h2>

        <form onSubmit={handleSubmit}>
            <label>UserID (not changeable)</label>
            <div>
                <input type='text' value={editUserId} disabled/>
            </div>
            <label>First name</label>
            <div>
                <input type='text' value={editFirstName} onChange={({target}) => setNewFirstName(target.value)} placeholder='First name'/>
            </div>
            <label>Last name</label>
            <div>
                <input type='text' value={editLastName} onChange={({target}) => setNewLastName(target.value)} placeholder='Last name'/>
            </div>
            <label>Email title</label>
            <div>
                <input type='email' value={editEmail} onChange={({target}) => setNewEmail(target.value)} placeholder='Email'/>
            </div>
            <label>Acceess level ID</label>
            <div>
                <input type='text' value={editAccessLevelId} onChange={({target}) => setNewAccessLevelId(target.value)} placeholder='Access level ID'/>
            </div>
            <label>Username</label>
            <div>
                <input type='text' value={editUserName} onChange={({target}) => setNewUserName(target.value)} placeholder='Username'/>
            </div>
            <input type='submit' value='save'/>
            <input type='button' value='back' onClick={() => setMuokkaustila(false)}/>
        </form>

    </div>
  )
}

export default UserEdit