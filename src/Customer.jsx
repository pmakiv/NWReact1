import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import React, {useState} from 'react'
import './App.css'

const Customer = ({customer}) => {

const [showDetails, setShowDetails] = useState(false)

  return (
    <div className='customerDiv'>
     {/* <h4 onMouseEnter={() => setShowDetails(true)}
        onMouseLeave={() => setShowDetails(false)}> */}
        <h4 onClick={() => setShowDetails (!showDetails)}>{customer.companyName}</h4>

    {showDetails && <div className='customerDetails'>
        <table>
            <thead>
                <tr>
                    <th>Contact name</th>
                    <th>Contact title</th>
                    <th>Address</th>
                    <th>City</th>
                    <th>Region</th>
                    <th>Country</th>
                    <th>Phone</th>
                    <th>Fax</th>
                </tr>
            </thead>
            <tbody>
                <tr>
                    <td>{customer.contactName}</td>
                    <td>{customer.contactTitle}</td>
                    <td>{customer.address}</td>
                    <td>{customer.city}</td>
                    <td>{customer.region}</td>
                    <td>{customer.country}</td>
                    <td>{customer.phone}</td>
                    <td>{customer.fax}</td>
                </tr>
            </tbody>
        </table>
    </div>
    }
    </div>
  )
}

export default Customer