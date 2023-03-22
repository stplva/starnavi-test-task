import React from 'react';
import logo from '../img/logo.png';

const Header = () => (
  <header>
    <img src={logo} className='logo' alt='logo' />
    <h1>Hover Me!</h1>
    <span>by <a href='https://github.com/stplva/' target={'_blank'} >stplva</a></span>
  </header>
)

export default Header;