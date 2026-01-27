import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import React, {useState, useEffect} from 'react'
import './App.css'
import UserService from './services/User'
import UserAdd from './UserAdd'
import UserEdit from './UserEdit'
import User from './User'

const UserList = ({setIsPositive, setShowMessage, setMessage}) => {

const [users, setUsers] = useState([])
const [lisaystila, setLisaystila] = useState(false)
const [muokkaustila, setMuokkaustila] = useState(false)
const [reload, reloadNow] = useState(false)
const [muokattavaUser, setMuokattavaUser] = useState(false)
const [search, setSearch] = useState("")

useEffect(()=> {
  
    UserService.getAll()
    .then(data => {
        setUsers(data)
    })

}, [lisaystila, muokkaustila, reload]
)

const handleSearchInputChange = (event) => {
    setSearch(event.target.value.toLowerCase())
}

const editUser = (user) => {
    setMuokattavaUser (user)
    setMuokkaustila(true)
}

const deleteUser = (user) => {
    let answer = window.confirm(`Remove user ${user.userName}?`)
    if (answer === true) {
    UserService.remove(user.userId)
    .then(res => {
        if (res.status === 200) {
          setMessage(`Removed user ${user.userName} successfully.`)  
            setIsPosivite(true)
            setShowMessage(true)
            window.scrollBy(0, -10000)
              setTimeout(() => {
                setShowMessage(false)
            }, 5000)
            reloadNow(!reload)
        }
    }
    )
    .catch(error => {
            setMessage(error)
            setIsPositive(false)
            setShowMessage(true)
            setTimeout(() => {
                setShowMessage(false)
            }, 5000)
        })
    }
    else {
        setMessage('Deleting cancelled successfully.')
        setIsPositive(true)
        setShowMessage(true)
        window.scrollBy(0, -10000)
        setTimeout (() => {
            setShowMessage(false)},
            5000)
        }
        
    }

  return (
    <>
<h2><nobr>Users</nobr>

        {lisaystila && <UserAdd setLisaystila={setLisaystila}
        setIsPositive={setIsPositive} setMessage={setMessage} setShowMessage={setShowMessage}/>}

        {!lisaystila && <button className='nappi' onClick={() => setLisaystila(true)}>Add new</button>}
</h2>
        {!lisaystila && !muokkaustila &&
            <input placeholder="Search by last name" value={search} onChange={handleSearchInputChange}/>
        }        

        {!lisaystila && !muokkaustila &&
            <table id='userTable'>
                <thead>
                    <tr>
                    <th>First name</th>
                    <th>Last name</th>
                    <th>Username</th>
                    <th>Email</th>
                    <th>Access level</th>
                    <th></th>
                </tr>
                </thead>
                <tbody>
            
            {users && users.map(u =>
                    { 
                    const lowerCaseName = u.lastName.toLowerCase()
                if (lowerCaseName.indexOf(search) > -1) {
                        return (
                            <tr key={u.userId}>
                                <td>{u.firstName}</td>
                                <td>{u.lastName}</td>
                                <td>{u.userName}</td>
                                <td>{u.email}</td>
                                <td>{u.accessLevelId}</td>
                                <td><button onClick={() => editUser(u.userId)}>Edit</button></td>
                                <td><button onClick={() => deleteUser(u.UserId)}>Delete</button></td>
                            </tr>
                            )
                        }
                    }
                )
            }
         </tbody>

        </table>
        }
    </>
  )
}

export default UserList
