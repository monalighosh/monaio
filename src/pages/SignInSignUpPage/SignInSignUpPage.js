import React from 'react';
import './SignInSignUpPage.scss';
import SignIn from '../../components/SignIn/SignIn';
import SignUp from '../../components/SignUp/SignUp';

class SignInSignUpPage extends React.Component {

  render () {
    return (
      <div className='sign-in-sign-up'>
        <SignIn />
        <SignUp />
      </div>
    );
  }
}

export default SignInSignUpPage;