import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import React, {useState} from 'react'
import './App.css'
import ProductService from './services/Product'

const ProductEdit = ({setMuokkaustila, muokattavaProduct, setIsPositive, setShowMessage, setMessage}) => {

    const [editProductId, setNewProductrId] = useState(muokattavaProduct.productId);
    const [editProductName, setNewProductName] = useState(muokattavaProduct.productName);
    const [editSupplierId, setNewSupplierId] = useState(muokattavaProduct.supplierId);
    const [editCategoryId, setNewCategoryId] = useState(muokattavaProduct.categoryId);
    const [editQuantityPerUnit, setNewQuantityPerUnit] = useState(muokattavaProduct.quantityPerUnit);
    const [editUnitPrice, setNewUnitPrice] = useState(muokattavaProduct.unitPrice);
    const [editUnitsInStock, setNewUnitsInStock] = useState(muokattavaProduct.unitsInStock);
    const [editUnitsOnOrder, setNewUnitsOnOrder] = useState(muokattavaProduct.unitsOnOrder);
    const [editReorderLevel, setNewReorderLevel] = useState(muokattavaProduct.reorderLevel);
    // const [editDiscontinued, setDiscontinued] = useState(muokattavaProduct.discontinued);

    const handleSubmit = (event) => {
        event.preventDefault();
        var editProduct = {
            ProductId: editProductId,
            ProductName: editProductName,
            SupplierId: editSupplierId,
            CategoryId: editCategoryId,
            QuantityPerUnit: editQuantityPerUnit,
            UnitPrice: editUnitPrice,
            UnitsInStock: editUnitsInStock,
            UnitsOnOrder: editUnitsOnOrder,
            ReorderLevel: editReorderLevel,
            // Discontinued: editDiscontinued,
        }

const token = localStorage.getItem('token')
        ProductService.setToken(token)

        ProductService.update(editProduct)
        .then(response => {
            if (response.status === 200) {
                setMessage("Edited product: " + editProduct.ProductName)
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
        <h2>Edit product:</h2>

        <form onSubmit={handleSubmit}>
            <label>ProductID (not changeable)</label>
            <div>
                <input type='text' value={editProductId} disabled/>
            </div>
            <label>Product name</label>
            <div>
                <input type='text' value={editProductName} onChange={({target}) => setNewProductName(target.value)} placeholder='Product name'/>
            </div>
            <label>Supplier ID</label>
            <div>
                <input type='text' value={editSupplierId} onChange={({target}) => setNewSupplierId(target.value)} placeholder='Supplier ID'/>
            </div>
            <label>Category ID</label>
            <div>
                <input type='text' value={editCategoryId} onChange={({target}) => setNewCategoryId(target.value)} placeholder='Category ID'/>
            </div>
            <label>Quantity per unit</label>
            <div>
                <input type='text' value={editQuantityPerUnit} onChange={({target}) => setNewQuantityPerUnit(target.value)} placeholder='Quantity per unit'/>
            </div>
            <label>Unit price</label>
            <div>
                <input type='text' value={editUnitPrice} onChange={({target}) => setNewUnitPrice(target.value)} placeholder='Unit price'/>
            </div>
            <label>UnitsInStock</label>
            <div>
                <input type='text' value={editUnitsInStock} onChange={({target}) => setNewUnitsInStock(target.value)} placeholder='Units in stock'/>
            </div>
            <label>Units on order</label>
            <div>
                <input type='text' value={editUnitsOnOrder} onChange={({target}) => setNewUnitsOnOrder(target.value)} placeholder='Units on order'/>
            </div>
            <label>Reorder level</label>
            <div>
                <input type='text' value={editReorderLevel} onChange={({target}) => setNewReorderLevel(target.value)} placeholder='Reorder level'/>
            </div>
            {/* <label>Discontinued</label>
            <div>
                <input type='text' value={editDiscontinued} onChange={({target}) => setNewDiscontinued(target.value)} placeholder='Discontinued'/>
            </div> */}
            <input type='submit' value='save'/>
            <input type='button' value='back' onClick={() => setMuokkaustila(false)}/>
        </form>

    </div>
  )
}

export default ProductEdit