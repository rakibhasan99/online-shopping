import React from 'react';
import './Header.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faShop } from '@fortawesome/free-solid-svg-icons';
import logo from '../../assets/logo/Rakib world.png';
import { Link } from 'react-router-dom';
const Header = () => {
    return (
        <div className='header'>
            <img src={logo} alt="" />
            <div className='header-child'>
                <Link to="/">Home</Link>
                <Link to="/orders">Orders</Link>
                <Link to="/inventory">Inventory</Link>
                <Link className='shop' to="/shop"><FontAwesomeIcon icon={faShop}/></Link>
                <Link to="/login"><button>Log in</button></Link>
                <Link to="/sign up"><button>Sign up</button></Link>
            </div>
        </div>
    );
};

export default Header;