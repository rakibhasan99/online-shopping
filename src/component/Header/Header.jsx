import React from 'react';
import './Header.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
  import { faShop } from '@fortawesome/free-solid-svg-icons';
import logo from '../../assets/logo/Rakib world.png';
const Header = () => {
    return (
        <div className='header'>
            <img src={logo} alt="" />
            <div className='header-child'>
                <a href="home">Home</a>
                <a href="about">About</a>
                <a className='shop' href="shop"><FontAwesomeIcon icon={faShop}/></a>
                <button>Log in</button>
                <button>Sign up</button>
            </div>
        </div>
    );
};

export default Header;