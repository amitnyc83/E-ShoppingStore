import React, { Component } from 'react'
import { connect } from 'react-redux'
import { Route } from 'react-router-dom'
import { bindActionCreators } from 'redux'
import * as actions from '../actions/productActions'
import { Header, Divider } from 'semantic-ui-react'
import ProductsList from '../components/ProductsList'
import ProductShow from '../components/ProductShow'



class ProductsPage extends Component {

  componentDidMount() {
    this.props.actions.fetchProducts()
  }

  render() {
    return (
      <div>
        <Header as='h2' textAlign='center'>
          Products
        </Header>
        <Divider hidden />
        <ProductsList products={this.props.products} />
        <Route path={'/products/:productId'} component={ProductShow} />
      </div>
    )
  }
}


function mapStateToProps(state) {
  return { products: state.products }
}

function mapDispatchToProps(dispatch) {
  return { actions: bindActionCreators(actions, dispatch) }
}

export default connect(mapStateToProps, mapDispatchToProps)(ProductsPage)
