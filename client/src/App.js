import React, { Component } from 'react';
import './App.css';
import HomePage from './components/HomePage'




class App extends Component {
  render(){
    return (
      <div className="App">
        <HomePage />
        <header>
        <h1 className="app-title">Welcome to E-Shopping Store</h1>
        </header>
      </div>
    )
  }
}

export default App;
