import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import React, {useState} from 'react'
import './App.css'
import UserService from './services/User'
import UserEdit from './UserEdit'

const User = ({user, editUser, setIsPositive, setShowMessage, setMessage, reload, reloadNow}) => {

const [showDetails, setShowDetails] = useState(false)

// const deleteUser = (user) => {
//     //vaihtoehtoinen toteutustapa:
//     // if (window.confirm(`Remove customer ${customer.companyName}?`) === true) {
//     let answer = window.confirm(`Remove user ${user.UserName}?`)
//     if (answer === true) {
//     UserService.remove(user.UserId)
//     .then(res => {
//         if (res.status === 200) {
//           setMessage(`Removed user ${user.UserName} successfully.`)  
//             setIsPosivite(true)
//             setShowMessage(true)
//             window.scrollBy(0, -10000)
//               setTimeout(() => {
//                 setShowMessage(false)
//             }, 5000)
//             reloadNow(!reload)
//         }
//     }
//     )
//     .catch(error => {
//             setMessage(error)
//             setIsPositive(false)
//             setShowMessage(true)
//             setTimeout(() => {
//                 setShowMessage(false)
//             }, 5000)
//         })
//     }
//     else {
//         setMessage('Deleting cancelled successfully.')
//         setIsPositive(true)
//         setShowMessage(true)
//         window.scrollBy(0, -10000)
//         setTimeout (() => {
//             setShowMessage(false)},
//             5000)
//         }
        
//     }


  return (
    <div className='userDiv'>
        <h4 onClick={() => setShowDetails (!showDetails)}>{user.userName}</h4>
    {showDetails && <div className='userDetails'>
        {user.userName}<br/>
        <button onClick={() => editUser(user)}>Edit</button>
        <button onClick={() => deleteUser(user)}>Delete</button>
        <table>
            <thead>
                <tr>
                    <th>First name</th>
                    <th>Last name</th>
                    <th>Email</th>
                    <th>Username</th>
                    <th>Access level ID</th>
                </tr>
            </thead>
            <tbody>
                <tr>
                    <td>{user.firstName}</td>
                    <td>{user.lastTitle}</td>
                    <td>{user.email}</td>
                    <td>{user.userName}</td>
                    <td>{user.accessLevelId}</td>
                </tr>
            </tbody>
        </table>
    </div>
    }
    </div>
  )
}

export default User