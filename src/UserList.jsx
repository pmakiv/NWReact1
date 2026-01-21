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

        const token = localStorage.getItem('token')
        CustomerService.setToken(token)

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
                    <th>Email</th>
                    <th>Access level</th>
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
                                <td>{u.email}</td>
                                <td>{u.accessLevelId}</td>
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
