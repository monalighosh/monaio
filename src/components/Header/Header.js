import React from 'react';
import './Header.scss';
import { Link } from 'react-router-dom';

const Header = () => (
  <div className='header'>
    <Link to='/' className='logo-container'>Monaio</Link>
    <div className='options'>
      <Link className='option' to='/shop'>Shop</Link>
      <Link className='option' to='/shop'>Contact</Link>
    </div>
  </div>
);

export default Header;