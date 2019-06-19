import React from 'react'
import { Grid, Image, Header, Divider } from 'semantic-ui-react'
import ProductInfo from '../components/ProductInfo'

const ProductsList = () => (
  <div>
    <Divider hidden />
    <Header as='h2' textAlign='center'> Products
      <Divider hidden />
    </Header>
    <div className='product-container'>
      <ProductInfo />
      <ProductInfo />
      <ProductInfo />
      <ProductInfo />
      <ProductInfo />
      <ProductInfo />
      <ProductInfo />
      <ProductInfo />
      <ProductInfo />
    </div>
  </div>
)

export default ProductsList
