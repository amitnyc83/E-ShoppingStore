import React, { Component } from 'react'
import { connect } from 'react-redux'
import { Route, Switch } from 'react-router-dom'
import { Header, Divider } from 'semantic-ui-react'
import ProductsList from '../components/ProductsList'
import ProductShow from '../components/ProductShow'

const ProductsPage = ({ match, products }) =>
<div>
  <Header as='h2' textAlign='center'>
    Products
   <Divider hidden />
  </Header>
  <ProductsList products={products} />
</div>

export default ProductsPage
