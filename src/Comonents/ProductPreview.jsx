import React from 'react'
import product from '../assets/product.png'

export const ProductPreview = ()=> {
  return (
    <>
      <div className="product-main">
        <div className="container">
            <img src={product} alt="" />
        </div>{/**container**/}  
      </div>{/**main**/}  
    </>
  )
}

export default ProductPreview