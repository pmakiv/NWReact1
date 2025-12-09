import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import React, {useState, useEffect} from 'react'
import './App.css'
import CustomerService from './services/Customer'
import Customer from './Customer'
import CustomerAdd from './CustomerAdd'

const CustomerList = () => {

const [customers, setCustomers] = useState([])
const [showCustomers, setShowCustomers] = useState(false)
const [lisaystila, setLisaystila] = useState(false)

useEffect(()=> {
  
    CustomerService.getAll()
    .then(data => {
        setCustomers(data)
    })

}, [lisaystila]
)
  return (
    <>
<h2><nobr style={{ cursor: 'pointer'}}
        onClick={() => setShowCustomers(!showCustomers)}>Customers</nobr>

        {!lisaystila && <button className='nappi' onClick={() => setLisaystila(true)}>Add new</button>}
</h2>
        {lisaystila && <CustomerAdd setLisaystila={setLisaystila} />}

        {
            showCustomers && customers && customers.map(c => (
                <Customer key={c.customerId} customer={c}/>
            )
        )
        }

    </>
  )
}

export default CustomerList
