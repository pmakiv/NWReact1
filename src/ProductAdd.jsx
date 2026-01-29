import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import React, {useState} from 'react'
import './App.css'
import ProductService from './services/Product'

const ProductAdd = ({setLisaystila, setIsPositive, setShowMessage, setMessage}) => {

    const [newProductId, setNewProductId] = useState('');
    const [newProductName, setNewProductName] = useState('');
    const [newSupplierId, setNewSupplierId] = useState('');
    const [newCategoryId, setNewCategoryId] = useState('');
    const [newQuantityPerUnit, setNewQuantityPerUnit] = useState('');
    const [newUnitPrice, setNewUnitPrice] = useState('');
    const [newUnitsInStock, setNewUnitsInStock] = useState('');
    const [newUnitsOnOrder, setNewUnitsOnOrder] = useState('');
    const [newReorderLevel, setNewReorderLevel] = useState('');
    const [newDiscontinued, setNewDiscontinued] = useState('0');

    const handleSubmit = (event) => {
        event.preventDefault();
        var newProduct = {
            // ProductId: newProductId,
            ProductName: newProductName,
            SupplierId: newSupplierId,
            CategoryId: newCategoryId,
            QuantityPerUnit: newQuantityPerUnit,
            UnitPrice: newUnitPrice,
            UnitsInStock: newUnitsInStock,
            UnitsOnOrder: newUnitsOnOrder,
            ReorderLevel: newReorderLevel,
            // Discontinued: newDiscontinued
        }

        const token = localStorage.getItem('token')
        ProductService.setToken(token)

        ProductService.create(newProduct)
        .then(response => {
            if (response.status === 200) {
                setMessage("Added new product: " + newProduct.ProductName)
                setIsPositive(true)
                setShowMessage(true)
                setTimeout(() => {
                    setShowMessage(false)
                }, 5000)
                setLisaystila(false)
            }
        })
        .catch(error => {
            setMessage(error)
            setIsPositive(false)
            setShowMessage(true)
            setTimeout(() => {
                setShowMessage(false)
            }, 6000)
    })
        }
  return (
    <div id='addNew'>
        <h2>Add product:</h2>

        <form onSubmit={handleSubmit}>
            <div>
                <input type='hidden' value={newProductId} onChange={({target}) => setNewProductId(target.value)}/>
            </div>
            <div>
                <input type='text' value={newProductName} onChange={({target}) => setNewProductName(target.value)} placeholder='Product name'/>
            </div>
            <div>
                <input type='text' value={newSupplierId} onChange={({target}) => setNewSupplierId(target.value)} placeholder='Supplier ID'/>
            </div>
            <div>
                <input type='text' value={newCategoryId} onChange={({target}) => setNewCategoryId(target.value)} placeholder='Category ID'/>
            </div>
            <div>
                <input type='text' value={newQuantityPerUnit} onChange={({target}) => setNewQuantityPerUnit(target.value)} placeholder='Quantity per unit'/>
            </div>
            <div>
                <input type='text' value={newUnitPrice} onChange={({target}) => setNewUnitPrice(target.value)} placeholder='Unit price'/>
            </div>
            <div>
                <input type='text' value={newUnitsInStock} onChange={({target}) => setNewUnitsInStock(target.value)} placeholder='Units in stock'/>
            </div>
            <div>
                <input type='text' value={newUnitsOnOrder} onChange={({target}) => setNewUnitsOnOrder(target.value)} placeholder='Units on order'/>
            </div>
            <div>
                <input type='text' value={newReorderLevel} onChange={({target}) => setNewReorderLevel(target.value)} placeholder='Reorder level'/>
            </div>
            <div>
                <input type='hidden' value={newDiscontinued} onChange={({target}) => setNewDiscontinued(target.value)} placeholder='Discontinued'/>
            </div>
            <input type='submit' value='save'/>
            <input type='button' value='back' onClick={() => setLisaystila(false)}/>
        </form>

    </div>
  )
}

export default ProductAdd