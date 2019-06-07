import React, { Component } from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import './App.css';

import Cart from './containers/Cart.js';
import Login from './components/Login.js';
import Signup from './containers/Signup.js';
import HomePage from './components/HomePage.js';
import UseProfilePage from './components/UserProfilePage.js'


function App() {
  return (
    <Router>
      <div className="App">
       <Route exact path="/" component={HomePage} />
       <Route exact path="/login" component={Login} />
       <Route exact path="/signup" component={Signup} />
       <Route exact path={'/users/:userId/cart'} component={Cart} />
       <Route path={'/users/:userId'} component={UserProfilePage} />
       <Route path={'/products/:productId'} component={ProductShow} />
       <Route path="/products" component={Products} />
      </div>
    </Router>
  );
}

export default App;
