import React from 'react';
import './Product.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faShoppingCart } from '@fortawesome/free-solid-svg-icons';
const Product = (props) => {
    const { img, category, name, price, seller } = props.product;
    const handleAddToCart = props.handleAddToCart;
    return (
        <div className='product-list'>
            <img src={img} alt="" />
            <div className='product-child'>
                <h6 style={{ marginTop: '20px' }}>Category: {category}</h6>
                <h4 style={{ marginTop: '0px', paddingTop: '0px' }}>{name}</h4>
                <p style={{ marginTop: '40px' }}>Price: ${price}</p>
                <p style={{ marginTop: '-10px' }}>Seller: {seller}</p>
            </div>
            <button onClick={() => handleAddToCart(props.product)} className='btn-cart' >Add To Cart<FontAwesomeIcon icon={faShoppingCart}/></button>
        </div>
    );
};

export default Product;