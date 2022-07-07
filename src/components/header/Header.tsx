import React from 'react';
import './Header.css'
import logo from '../../assets/images/logo.svg';

const Header: React.FunctionComponent<{ title: string; }> = ({ title }) => {
  return (
    <header>
      <h2>{title}</h2>
      <img className='logo' src={logo} alt="Logo" />
    </header>
  )
}

export default Header