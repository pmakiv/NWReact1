import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import React, {useState, useEffect} from 'react'
import './App.css'
import CustomerService from './services/Customer'
import Customer from './Customer'
import CustomerAdd from './CustomerAdd'
import CustomerEdit from './CustomerEdit'

const CustomerList = ({setIsPositive, setShowMessage, setMessage}) => {

const [customers, setCustomers] = useState([])
const [showCustomers, setShowCustomers] = useState(false)
const [lisaystila, setLisaystila] = useState(false)
const [muokkaustila, setMuokkaustila] = useState(false)
const [reload, reloadNow] = useState(false)
const [muokattavaCustomer, setMuokattavaCustomer] = useState(false)

useEffect(()=> {
  
    CustomerService.getAll()
    .then(data => {
        setCustomers(data)
    })

}, [lisaystila, muokkaustila, reload]
)

const editCustomer = (customer) => {
    setMuokattavaCustomer (customer)
    setMuokkaustila(true)
}

  return (
    <>
<h2><nobr style={{ cursor: 'pointer'}}
        onClick={() => setShowCustomers(!showCustomers)}>Customers</nobr>

        {!lisaystila && <button className='nappi' onClick={() => setLisaystila(true)}>Add new</button>}
</h2>
        {lisaystila && <CustomerAdd  setLisaystila={setLisaystila} 
        setIsPositive={setIsPositive} setMessage={setMessage} setShowMessage={setShowMessage} />}

        {muokkaustila && <CustomerEdit  setMuokkaustila={setMuokkaustila} 
        setIsPositive={setIsPositive} setMessage={setMessage} setShowMessage={setShowMessage}
        muokattavaCustomer={muokattavaCustomer} />}
        {
            showCustomers && customers && customers.map(c => (
                <Customer key={c.customerId} customer={c} reloadNow={reloadNow} reload={reload}
                setIsPositive={setIsPositive} setShowMessage={setShowMessage} setMessage={setMessage}
                editCustomer={editCustomer} />
            )
        )
        }

    </>
  )
}

export default CustomerList
