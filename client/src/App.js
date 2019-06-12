import React, { Component } from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom'
import './App.css';
import HomePage from './components/HomePage'
import ProductsList from './containers/ProductsList'




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
      </div>
    </Router>
    )
  }
}

export default App;
