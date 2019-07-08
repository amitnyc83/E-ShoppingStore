import React from 'react'

const ProductBasic = ({ id, name, image, price }) =>
{
  return (
    <a className='product-link'  href={`/products/${id}`}>
     <div className='product-div'>
       <img className='product-img' src={image} alt='not loading' />
       <h4>{name}</h4>
       <em>{price}</em>
     </div>
    </a>
  )
}


export default ProductBasic
