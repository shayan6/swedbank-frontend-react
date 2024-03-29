import React from "react";
import { Link, useLocation } from "react-router-dom";
import SwedbankLogo from "../images/swedbank_logo.png";
import HomeIcon from "../images/home.svg";
import WalletIcon from "../images/wallet.svg";

const Header = ({ toggleNav, navActive }) => {
  const location = useLocation();
  const currentPath = location.pathname;
  return (
    <header>
      <div className="header-container">
        <Link to="/" className="logo">
          <img alt="Swedbank logo" src={SwedbankLogo} />
        </Link>
        <nav className={`navbar ${navActive ? "active" : ""}`}>
          <ul>
            <li>
              <Link
                to="/"
                onClick={toggleNav}
                className={`menu-item ${currentPath === "/" ? "active" : ""}`}
              >
                <br />
                <img src={HomeIcon} alt="Home icon" />
                <span>Home</span>
              </Link>
            </li>
            <li>
              <Link
                to="/EverydayBanking"
                onClick={toggleNav}
                className={`menu-item ${
                  currentPath === "/EverydayBanking" ? "active" : ""
                }`}
              >
                <br />
                <img src={WalletIcon} alt="Wallet icon" />
                <span>Everyday banking</span>
              </Link>
            </li>
          </ul>
        </nav>
        <div
          className={`toggle-btn ${navActive ? "active" : ""}`}
          onClick={toggleNav}
        >
          <span></span>
          <span></span>
          <span></span>
        </div>
      </div>
    </header>
  );
};

export default Header;
