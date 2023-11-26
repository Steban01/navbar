import React from 'react';
import LogoImage from './img/bazaary.jpeg';
import CartImage from './img/cart.png';
import ProfileImage from './img/profile-picture.webp';
import SellImage from './img/sell.png';
import './Navbar.css';

function Navbar() {
  return (
    <nav className="navbar">
      <div className="navbar-left">
        <div className="logo-container">
          <img src={LogoImage} alt="Logo" className="logo circular-logo" />
        </div>
        <div className='company-name'>
          Bazaary
        </div>
      </div>
      <div className="navbar-center">
        <div className="search-bar">
          <input id="search-bar-input" type="text" placeholder="Buscar..." className="search-input" />
        </div>
      </div>
      <div className="navbar-right">
        <div className="button-group">
          <a href="http://localhost:3000/addingitem/category" className="for-sale">
            <img src={SellImage} alt="Vender" className="button-icon" />
          </a>
          <a href="http://localhost:3000/cart" className="shopping-cart">
            <img src={CartImage} alt="Carrito" className="button-icon" />
          </a>
          <a href="http://localhost:3000/profile" className="profile-button">
          </a>
        </div>
      </div>
    </nav>
  );
}

export default Navbar;
