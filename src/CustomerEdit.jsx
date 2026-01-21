import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import React, {useState} from 'react'
import './App.css'
import CustomerService from './services/Customer'

const CustomerEdit = ({setMuokkaustila, muokattavaCustomer, setIsPositive, setShowMessage, setMessage}) => {

    const [editCustomerId, setNewCustomerId] = useState(muokattavaCustomer.customerId);
    const [editCompanyName, setNewCompanyName] = useState(muokattavaCustomer.companyName);
    const [editContactName, setNewContactName] = useState(muokattavaCustomer.contactName);
    const [editContactTitle, setNewContactTitle] = useState(muokattavaCustomer.contactTitle);
    const [editAddress, setNewAddress] = useState(muokattavaCustomer.address);
    const [editCity, setNewCity] = useState(muokattavaCustomer.city);
    const [editRegion, setNewRegion] = useState(muokattavaCustomer.region);
    const [editPostalCode, setNewPostalCode] = useState(muokattavaCustomer.postalCode);
    const [editCountry, setNewCountry] = useState(muokattavaCustomer.country);
    const [editPhone, setNewPhone] = useState(muokattavaCustomer.phone);
    const [editFax, setNewFax] = useState(muokattavaCustomer.fax);
    

    const handleSubmit = (event) => {
        event.preventDefault();
        var editCustomer = {
            CustomerId: editCustomerId,
            CompanyName: editCompanyName,
            ContactName: editContactName,
            ContactTitle: editContactTitle,
            Address: editAddress,
            City: editCity,
            Region: editRegion,
            PostalCode: editPostalCode,
            Country: editCountry,
            Phone: editPhone,
            Fax: editFax
        }

const token = localStorage.getItem('token')
        CustomerService.setToken(token)

        CustomerService.update(editCustomer)
        .then(response => {
            if (response.status === 200) {
                setMessage("Edited customer: " + editCustomer.CompanyName)
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
        <h2>Edit customer:</h2>

        <form onSubmit={handleSubmit}>
            <label>CustomerID (not changeable)</label>
            <div>
                <input type='text' value={editCustomerId} disabled/>
            </div>
            <label>Company name</label>
            <div>
                <input type='text' value={editCompanyName} onChange={({target}) => setNewCompanyName(target.value)} placeholder='Company name'/>
            </div>
            <label>Contact name</label>
            <div>
                <input type='text' value={editContactName} onChange={({target}) => setNewContactName(target.value)} placeholder='Contact name'/>
            </div>
            <label>Contact title</label>
            <div>
                <input type='text' value={editContactTitle} onChange={({target}) => setNewContactTitle(target.value)} placeholder='Contact title'/>
            </div>
            <label>Address</label>
            <div>
                <input type='text' value={editAddress} onChange={({target}) => setNewAddress(target.value)} placeholder='Address'/>
            </div>
            <label>City</label>
            <div>
                <input type='text' value={editCity} onChange={({target}) => setNewCity(target.value)} placeholder='City'/>
            </div>
            <label>Region</label>
            <div>
                <input type='text' value={editRegion} onChange={({target}) => setNewRegion(target.value)} placeholder='Region'/>
            </div>
            <label>Postal code</label>
            <div>
                <input type='text' value={editPostalCode} onChange={({target}) => setNewPostalCode(target.value)} placeholder='Postalcode'/>
            </div>
            <label>Country</label>
            <div>
                <input type='text' value={editCountry} onChange={({target}) => setNewCountry(target.value)} placeholder='Country'/>
            </div>
            <label>Phone</label>
            <div>
                <input type='text' value={editPhone} onChange={({target}) => setNewPhone(target.value)} placeholder='Phone'/>
            </div>
            <label>Fax</label>
            <div>
                <input type='text' value={editFax} onChange={({target}) => setNewFax(target.value)} placeholder='Fax'/>
            </div>
            <input type='submit' value='save'/>
            <input type='button' value='back' onClick={() => setMuokkaustila(false)}/>
        </form>

    </div>
  )
}

export default CustomerEdit