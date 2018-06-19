import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';

// dependencies
import { Route, Link, Redirect, Switch } from 'react-router-dom'
// components
import Navbar from './components/Global/Navbar/Navbar'
import HomePage from './components/Pages/Home/HomePage'
import ProjectsPage from './components/Pages/Projects/ProjectsPage/ProjectsPage'
import Main from "../src/components/Global/Main/Main"

class App extends Component {
  render() {
    return (
      <div>
        <Navbar />
        <Main />
      </div>
    );
  }
}

export default App;
