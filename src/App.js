import React, { Component } from 'react';
import home from './home';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import './App.css';

const App = () =>
  <Router>
    <div>
      <Route exact path="/" component={home} />
    </div>
  </Router>;

export default App;


