import React from 'react';
import { Switch, Route } from 'react-router-dom';
import './App.css';
import Homepage from './pages/Homepage/Homepage';
import Shoppage from './pages/Shoppage/Shoppage';
import Header from './components/Header/Header'
import SignInSignUpPage from './pages/SignInSignUpPage/SignInSignUpPage';
import { auth } from './firebase/firebase.utils';

class App extends React.Component {

  constructor() {
    super();

    this.state = {
      currentUser: null,
    }
  }

  unsubscribeFromAuth = null;

  componentDidMount() {
    this.unsubscribeFromAuth = auth.onAuthStateChanged(user => {
      this.setState({ currentUser: user });
    });
  }

  componentWillUnmount() {
    this.unsubscribeFromAuth();
  }

  render () {
      return (
      <div>
        <Header currentUser={this.state.currentUser} />
        <Switch>
          <Route exact path='/' component={Homepage} />
          <Route path='/shop' component={Shoppage} />
          <Route path='/signInSignUp' component={SignInSignUpPage} />
        </Switch>
      </div>
    );
  }
}

export default App;
