import './App.css';
import React from 'react';
import { Switch, Route, Link, NavLink } from "react-router-dom"
import NavBar from "NavBar"
import 

function App() {
  return (
    <div className="App">
      <header className='header'>
        <NavBar />
        <Route>
          <HousesDescription />
        </Route>
      </header>
      
    </div>
  );
}

export default App;
