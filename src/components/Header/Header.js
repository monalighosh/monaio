import React from 'react';
import './Header.scss';
import { Link } from 'react-router-dom';
import { auth } from '../../firebase/firebase.utils';

const Header = ({ currentUser }) => (
  <div className='header'>
    <Link to='/' className='logo-container'>
      Monaio
    </Link>
    <div className='options'>
      <Link className='option' to='/shop'>
        Shop
      </Link>
      <Link className='option' to='/shop'>
        Contact
      </Link>
      {currentUser ? (
        <div className='option' onClick={() => auth.signOut()}>Sign out</div>
      ) : (
        <Link className='option' to='/signInSignUp'>
          Sign In
        </Link>
      )}
    </div>
  </div>
);

export default Header;