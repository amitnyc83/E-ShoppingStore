import React, { Component } from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import * as actions from './actions/productActions';
import './App.css';
import HomePage from './components/HomePage';
import ProductsPage from './containers/ProductsPage';
import SignUp from './components/SignUp';
import LogIn from './components/LogIn';
import Account from './components/Account';
import Cart from './containers/Cart'



class App extends Component {

  componentDidMount(){
    this.props.actions.fetchProducts()
  }

  render(){
    return (
      <Router>
      <div className="App">
        <HomePage />
        <header>
        <h1 className="app-title">E-Shopping Store</h1>
        </header>
        <Route exact path="/" component={ProductsPage} />
        <Route exact path="/products" component={ProductsPage} />
        <Route exact path="/LogIn" component={LogIn} />
        <Route exact path="/SignUp" component={SignUp} />
        <Route exact path="/account" component={Account} />
        <Route exact path='/cart' component={Cart}/>
      </div>
    </Router>
    )
  }
}


function mapStateToProps(state) {
  return { products: state.products }
}

function mapDispatchToProps(dispatch) {
  return { actions: bindActionCreators(actions, dispatch) }
}

export default connect(mapStateToProps, mapDispatchToProps)(App)
