import './App.css';
import React from 'react'
import { BrowserRouter, Route } from 'react-router-dom'
import Home from './lib/Home'
import NavBar from './lib/NavBar'
import Resume from './lib/Resume';

function App() {
  return (
    <div className="App">
      <NavBar />
      <BrowserRouter className="App">
        <Route exact path="/">
          <Home />
        </Route>
        <Route exact path="/resume">
          <Resume path/>
        </Route>
      </BrowserRouter>
    </div>
  );
}

export default App;
