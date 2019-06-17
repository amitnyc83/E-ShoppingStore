import React, { Component } from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom'
import './App.css';
import { Divider } from 'semantic-ui-react'
import HomePage from './components/HomePage'
import ProductsList from './containers/ProductsList'
import SignIn from './components/SignIn'




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
        <Route exact path="/SignIn" component={SignIn} />
      </div>
    </Router>
    )
  }
}

export default App;
