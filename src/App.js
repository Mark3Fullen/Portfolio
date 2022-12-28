import React from 'react'
import { BrowserRouter, Route } from 'react-router-dom';
import Home from './components/Home'
import NewHome from './NewHome';
import Sidebar from './Sidebar'
import Music from './components/Music';
import Resume from './components/Resume';

function App() {
  return (
    <div className="app">

      <BrowserRouter className="app">

        <Sidebar/>

        <Route exact path="/" className="Home">

          <NewHome className="home"/>

        </Route>

        <Route exact path="/resume">

          <Resume/>

        </Route>

        <Route exact path="/oldHome" classname="oldHome">

          <Home className="home"/>

        </Route>

        <Route exact path="/music">

          <Music/>

        </Route>

      </BrowserRouter>

    </div>
  );
}

export default App;
