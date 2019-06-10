import React, { Component } from 'react';
import './App.css';
import HomePage from './components/HomePage'
import ProductsList from './containers/ProductsList'




class App extends Component {
  render(){
    return (
      <div className="App">
        <header>
        <h1 className="app-title">E-Shopping Store</h1>
        </header>
        <HomePage />
        <ProductsList />
      </div>
    )
  }
}

export default App;
