import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import React, {useState} from 'react'
import './App.css'
import ProductService from './services/Product'
import ProductEdit from './ProductEdit.jsx'

const Product = ({product, editProduct, setIsPositive, setShowMessage, setMessage, reload, reloadNow}) => {

const [showDetails, setShowDetails] = useState(false)

const deleteProduct = (product) => {
 
    let answer = window.confirm(`Remove product ${product.productName}?`)
    if (answer === true) {
    ProductService.remove(product.productId)
    .then(res => {
        if (res.status === 200) {
          setMessage("Removed product " + product.productName + " successfully.") 
            setIsPosivite(true)
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
    <div className='productDiv'>
        <h4 onClick={() => setShowDetails (!showDetails)}>{product.productName}</h4>
    {showDetails && <div className='productDetails'>
        {product.productName}<br/>
        <button onClick={() => editProduct(product)}>Edit</button>
        <button onClick={() => deleteProduct(product)}>Delete</button>
        <table>
            <thead>
                <tr>
                    <th>ProductID</th>
                    <th>ProductName</th>
                    <th>SupplierID</th>
                    <th>CategoryID</th>
                    <th>QuantityPerUnit</th>
                    <th>UnitPrice</th>
                    <th>UnitsInStock</th>
                    <th>UnitOnOrder</th>
                    <th>ReorderLevel</th>
                    {/* <th>Discontinued</th> */}
                </tr>
            </thead>
            <tbody>
                <tr>
                    <td>{product.productId}</td>
                    <td>{product.productName}</td>
                    <td>{product.supplierId}</td>
                    <td>{product.categoryId}</td>
                    <td>{product.quantityPerUnit}</td>
                    <td>{product.unitPrice}</td>
                    <td>{product.unitsInStock}</td>
                    <td>{product.unitOnOrder}</td>
                    <td>{product.reorderLevel}</td>
                    {/* <td>{product.discontinued}</td> */}
                </tr>
            </tbody>
        </table>
    </div>
    }
    </div>
  )
}

export default Product