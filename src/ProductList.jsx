import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import React, {useState, useEffect} from 'react'
import './App.css'
import ProductService from './services/Product'
import Product from './Product'
import ProductAdd from './ProductAdd'
import ProductEdit from './ProductEdit'

const ProductList = ({setIsPositive, setShowMessage, setMessage}) => {

const [products, setProducts] = useState([])
const [showProducts, setShowProducts] = useState(true)
const [lisaystila, setLisaystila] = useState(false)
const [muokkaustila, setMuokkaustila] = useState(false)
const [reload, reloadNow] = useState(false)
const [muokattavaProduct, setMuokattavaProduct] = useState(false)
const [search, setSearch] = useState("")

useEffect(()=> {
    const token = localStorage.getItem('token')
    ProductService.setToken(token)
    
    ProductService.getAll()
    .then(data => {
        setProducts(data)
    })

}, [lisaystila, muokkaustila, reload]
)

const handleSearchInputChange = (event) => {
    // setShowProducts(true)
    setSearch(event.target.value.toLowerCase())
}

const editProduct = (product) => {
    setMuokattavaProduct (product)
    setMuokkaustila(true)
}

  return (
    <>
<h2><nobr>Products</nobr>
<br/>
        {!lisaystila && <button className='nappi' onClick={() => setLisaystila(true)}>Add new</button>}
</h2>
        {lisaystila && <ProductAdd  setLisaystila={setLisaystila} 
        setIsPositive={setIsPositive} setMessage={setMessage} setShowMessage={setShowMessage} />}

        {!lisaystila && !muokkaustila &&
            <input placeholder="Search by product name" value={search} onChange={handleSearchInputChange}/>
        }        

        {muokkaustila && <ProductEdit  setMuokkaustila={setMuokkaustila} 
        setIsPositive={setIsPositive} setMessage={setMessage} setShowMessage={setShowMessage}
        muokattavaProduct={muokattavaProduct} />}
        {
            !lisaystila && !muokkaustila && showProducts && products && products.map(p =>
                { 
                const lowerCaseName = p.productName.toLowerCase()
            if (lowerCaseName.indexOf(search) > -1) {
                    return (
                <Product key={p.productId} product={p} reloadNow={reloadNow} reload={reload}
                setIsPositive={setIsPositive} setShowMessage={setShowMessage} setMessage={setMessage}
                editProduct={editProduct} />
                        )
                    }
                }
            )
        }

    </>
  )
}

export default ProductList
