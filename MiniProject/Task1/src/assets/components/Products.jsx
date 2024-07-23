import React from 'react'
import Product from './Product'



const Products = () => {
 

    
  return (
    <>
    <div className="productLists">
  <Product ProductName = "Logitech MX Mater" Desc1 ="8,000 DPI" Desc2 ="5 Programmable buttons" OldPrice = "1290" newPrice = " 1,000"></Product>
  <Product ProductName = "Apple Pencil" Desc1 ="DPI" Desc2 ="5 types buttons" OldPrice = "2990" newPrice = " 2,000"></Product>
  <Product ProductName = "Pentonic keyboard" Desc1 ="wireless" Desc2 =" side button features" OldPrice = "1090" newPrice = " 900"></Product>
  </div>
    </>
  )
}

export default Products