import React from 'react'

const Product = ({ProductName , Price}) => {
 let style = {backgroundColor: Price> 30000 ? "yellow": null}
  return (
    <>
      <div className="ProductTab" style={style}>
  <h2>Product: { ProductName}</h2>
  <p>this is our product description</p>
  <span>Price: { Price}</span>
  {Price > 30000 ? <p>Discount of extra 5%</p>: null}
  {ProductName =="Phone"? <a href='#'>See More</a>:null}

  </div>
    </>
  )
}

export default Product;