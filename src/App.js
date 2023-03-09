import React, {useState, useEffect} from 'react'
import { BrowserRouter, Route } from 'react-router-dom';
import NewHome from './NewHome';
import Sidebar from './Sidebar'
import Music from './components/Music';
import Resume from './components/Resume';

function App() {
  
  const [showContent, setShowContent] = useState(false);

  useEffect(() => {
    setShowContent(true);
  }, []);

  return (
    <div className={`content ${showContent ? 'fade-in-and-move-up' : ''}`}>

      <BrowserRouter className="app">

        <Sidebar/>

        <Route exact path="/" className="Home">

          <NewHome className="home"/>

        </Route>

        <Route exact path="/resume">

          <Resume/>

        </Route>

        <Route exact path="/music">

          <Music/>

        </Route>

      </BrowserRouter>

    </div>
  );
}

export default App;
