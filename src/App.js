import React from 'react';
import { Switch, Route } from 'react-router-dom';
import './App.css';
import Homepage from './pages/Homepage/Homepage';

const Hatspage = () => (
  <div>
    <h1>HATS</h1>
  </div>
);

function App() {
  return (
    <Switch>
      <Route exact path='/' component={Homepage} />
      <Route path='/hats' component={Hatspage} />
    </Switch>
  );
}

export default App;
