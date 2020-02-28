import React from 'react';
import './SignIn.scss';
import FormInput from '../FormInput/FormInput';
import CustomButton from '../CustomButton/CustomButton';
import { auth, signInWithGoogle } from '../../firebase/firebase.utils';

class SignIn extends React.Component {
  constructor() {
    super();

    this.state = {
      email: '',
      password: '',
    }
  }

  handleSubmit = async (e) => {
    e.preventDefault();

    const { email, password } = this.state;
    try {
      await auth.signInWithEmailAndPassword(email, password);
       this.setState({
         email: '',
         password: ''
       });
    } catch(error) {
      console.log('Error', error.message);
    }
  };

  handleChange = (e) => {
    const {value, name} = e.target;
    this.setState({[name]: value});
  };

  render() {
    return (
      <div className='sign-in'>
        <h2>I alreaday have an account</h2>
        <span>SIgn in with your email and password</span>

        <form onSubmit={this.handleSubmit}>
          <FormInput
            label='Email'
            name='email'
            type='email'
            value={this.state.email}
            onChange={this.handleChange}
            required
          />
          <FormInput
            label='Password'
            name='password'
            type='password'
            value={this.state.password}
            onChange={this.handleChange}
            required
          />
          <div className='buttons'>
            <CustomButton type='submit'>Sign In</CustomButton>
            <CustomButton onClick={signInWithGoogle} isGoogleSignIn>
              Sign in with google
            </CustomButton>
          </div>
        </form>
      </div>
    );
  }
}

export default SignIn;