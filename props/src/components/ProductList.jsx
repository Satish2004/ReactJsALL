import React from 'react'
import "./Product";
import Product from './Product';


const ProductList = (ProductName , Price) => {
  return (
  <>
  <Product ProductName= "Phone" Price ="30000"></Product>
  <Product ProductName= "Laptop" Price ="340000"></Product>
  <Product ProductName= "Drive" Price ={500}></Product>

  </>
  )
}

export default ProductList