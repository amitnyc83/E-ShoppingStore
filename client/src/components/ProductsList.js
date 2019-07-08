import React from 'react'
import ProductBasic from '../components/ProductBasic'

const ProductsList = ({ products }) => {
  return(
    <div className='page-container'>
     {products.map(product =>
       <ProductBasic
         id={product.id}
         name={product.name}
         image={product.image}
         price={product.price}
        />
      )}
    </div>
  )
}


export default ProductsList
