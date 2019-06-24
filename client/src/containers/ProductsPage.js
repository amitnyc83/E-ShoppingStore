import React, { Component } from 'react'
import { Header, Divider } from 'semantic-ui-react'
import ProductsList from '../components/ProductsList'

class ProductsPage extends Component {
  constructor() {
    super()
    this.state = {
      products: []
    }
  }

  componentDidMount() {
    fetch(`/api/products`)
    .then(resp => resp.json())
    .then(products => this.setState({ products: products }))
  }

  render() {
    return(
      <div>
        <Header as='h2' textAlign='center'>
          Products
          <Divider hidden />
        </Header>
        <ProductsList products={this.state.products} />
      </div>
    )
  }
}

export default ProductsPage
