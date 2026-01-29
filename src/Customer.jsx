import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import React, {useState} from 'react'
import './App.css'
import CustomerService from './services/Customer'
import CustomerEdit from './CustomerEdit'

const Customer = ({customer, editCustomer, setIsPositive, setShowMessage, setMessage, reload, reloadNow}) => {

const [showDetails, setShowDetails] = useState(false)

const deleteCustomer = (customer) => {
    //vaihtoehtoinen toteutustapa:
    // if (window.confirm(`Remove customer ${customer.companyName}?`) === true) {
    let answer = window.confirm(`Remove customer ${customer.companyName}?`)
    if (answer === true) {
    CustomerService.remove(customer.customerId)
    .then(res => {
        if (res.status === 200) {
          setMessage(`Removed customer ${customer.companyName} successfully.`)  
            setIsPositive(true)
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
    <div className='customerDiv'>
        <h4 onClick={() => setShowDetails (!showDetails)}>{customer.companyName}</h4>
    {showDetails && <div className='customerDetails'>
        {customer.companyName}<br/>
        <button onClick={() => editCustomer(customer)}>Edit</button>
        <button onClick={() => deleteCustomer(customer)}>Delete</button>
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