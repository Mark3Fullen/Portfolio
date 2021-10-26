import './App.css';
import React from 'react'
import { BrowserRouter, Route } from 'react-router-dom'
import Home from './lib/Home'
import NavBar from './lib/NavBar'
import Resume from './lib/Resume';
import Contact from './lib/Contact'

function App() {
  return (
    <div className="App">
      <BrowserRouter className="App">
      <NavBar className="NavBar"/>
        <Route exact path="/" >
          <Home className="Home"/>
        </Route>
        <Route exact path="/resume">
          <Resume />
        </Route>
        <Route exact path="/contact">
          <Contact />
        </Route>
      </BrowserRouter>
    </div>
  );
}

export default App;
