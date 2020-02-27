import React from 'react';
import { Switch, Route } from 'react-router-dom';
import './App.css';
import Homepage from './pages/Homepage/Homepage';
import Shoppage from './pages/Shoppage/Shoppage';

function App() {
  return (
    <Switch>
      <Route exact path='/' component={Homepage} />
      <Route path='/shop' component={Shoppage} />
    </Switch>
  );
}

export default App;
