import React, { useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import SwedbankLogo from '../images/swedbank_logo.png';
import HomeIcon from '../images/home.svg';
import WalletIcon from '../images/wallet.svg';

const Header = ({ toggleNav, navActive }) => {
    const location = useLocation();
    const currentPath = location.pathname;
  return (
    <header>
      <div className="header-container">
        <Link to="/" className="logo">
          <img alt="Swedbank logo" src={SwedbankLogo} />
        </Link>
        <nav className={`navbar ${navActive ? 'active' : ''}`}>
          <ul>
            <li>
              <Link to="/" className={`menu-item ${currentPath === '/' ? 'active' : ''}`}>
                <br/>
                <img src={HomeIcon} alt="Home icon" />
                Home
              </Link>
            </li>
            <li>
              <Link to="/about" className={`menu-item ${currentPath === '/about' ? 'active' : ''}`}>
                <br/>
                <img src={WalletIcon} alt="Wallet icon" />
                Everyday banking
              </Link>
            </li>
          </ul>
        </nav>
        <div className={`toggle-btn ${navActive ? 'active' : ''}`} onClick={toggleNav}>
          <span></span>
          <span></span>
          <span></span>
        </div>
      </div>
    </header>
  );
};

export default Header;
