import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import React, {useState} from 'react'
import './App.css'
import CustomerService from './services/Customer'

const CustomerAdd = ({setLisaystila}) => {

    const [newCustomerId, setNewCustomerId] = useState('');
    const [newCompanyName, setNewCompanyName] = useState('');
    const [newContactName, setNewContactName] = useState('');
    const [newContactTitle, setNewContactTitle] = useState('');
    const [newAddress, setNewAddress] = useState('');
    const [newCity, setNewCity] = useState('');
    const [newRegion, setNewRegion] = useState('');
    const [newPostalCode, setNewPostalCode] = useState('');
    const [newCountry, setNewCountry] = useState('');
    const [newPhone, setNewPhone] = useState('');
    const [newFax, setNewFax] = useState('');
    

    const handleSubmit = (event) => {
        event.preventDefault();
        var newCustomer = {
            CustomerId: newCustomerId.toUpperCase(),
            CompanyName: newCompanyName,
            ContactName: newContactName,
            ContactTitle: newContactTitle,
            Address: newAddress,
            City: newCity,
            Region: newRegion,
            PostalCode: newPostalCode,
            Country: newCountry,
            Phone: newPhone,
            Fax: newFax
        }
        CustomerService.create(newCustomer)
        .then(response => {
            if (response.status === 200) {
                alert("Added new customer: " + newCustomer.CompanyName)
                setLisaystila(false)
            }
        })
        .catch(error => {
            alert("Error")
    })
        }
  return (
    <div id='addNew'>
        <h2>Add customer:</h2>

        <form onSubmit={handleSubmit}>
            <div>
                <input type='text' value={newCustomerId} onChange={({target}) => setNewCustomerId(target.value)}
                 placeholder='CustomerID, 5 characters' minLength="5" maxLength="5"/>
            </div>
            <div>
                <input type='text' value={newCompanyName} onChange={({target}) => setNewCompanyName(target.value)} placeholder='Company name'/>
            </div>
            <div>
                <input type='text' value={newContactName} onChange={({target}) => setNewContactName(target.value)} placeholder='Contact name'/>
            </div>
            <div>
                <input type='text' value={newContactTitle} onChange={({target}) => setNewContactTitle(target.value)} placeholder='Contact title'/>
            </div>
            <div>
                <input type='text' value={newAddress} onChange={({target}) => setNewAddress(target.value)} placeholder='Address'/>
            </div>
            <div>
                <input type='text' value={newCity} onChange={({target}) => setNewCity(target.value)} placeholder='City'/>
            </div>
            <div>
                <input type='text' value={newRegion} onChange={({target}) => setNewRegion(target.value)} placeholder='Region'/>
            </div>
            <div>
                <input type='text' value={newPostalCode} onChange={({target}) => setNewPostalCode(target.value)} placeholder='Postalcode'/>
            </div>
            <div>
                <input type='text' value={newCountry} onChange={({target}) => setNewCountry(target.value)} placeholder='Country'/>
            </div>
            <div>
                <input type='text' value={newPhone} onChange={({target}) => setNewPhone(target.value)} placeholder='Phone'/>
            </div>
            <div>
                <input type='text' value={newFax} onChange={({target}) => setNewFax(target.value)} placeholder='Fax'/>
            </div>
            <input type='submit' value='save'/>
            <input type='button' value='back' onClick={() => setLisaystila(false)}/>
        </form>

    </div>
  )
}

export default CustomerAdd