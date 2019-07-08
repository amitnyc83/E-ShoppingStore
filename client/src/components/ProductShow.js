import React from 'react'

const ProductShow = ({ id, name, image, price, description }) => {
  return (
    <div className='product-div'>
     <h3>Test Content</h3>
     <img className='product-img' src={image} alt='loading' />
     <h4>{name}</h4>
     <em>{price}</em>
    </div>
  )
}


export default ProductShow
