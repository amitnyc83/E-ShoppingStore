import React, { Component } from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom'
import './App.css';
import HomePage from './components/HomePage'
import ProductsList from './containers/ProductsList'
import SignUp from './components/SignUp'
import LogIn from './components/LogIn'
import Account from './components/Account'
import Cart from './containers/Cart'



class App extends Component {
  render(){
    return (
      <Router>
      <div className="App">
        <header>
        <h1 className="app-title">E-Shopping Store</h1>
        </header>
        <HomePage />
        <Route exact path="/" component={ProductsList}/>
        <Route exact path="/LogIn" component={LogIn} />
        <Route exact path="/SignUp" component={SignUp} />
        <Route exact path="/account" component={Account} />
        <Route exact path='/cart' component={Cart}/>
      </div>
    </Router>
    )
  }
}

export default App;
