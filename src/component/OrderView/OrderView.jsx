import React from 'react';
import './OrderView.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faTrashAlt } from '@fortawesome/free-solid-svg-icons';
const OrderView = ({product}) => {
    console.log(product);
    const {img, name, price, quantity} = product;
    return (
        <div className='view-container'>
            <img src={img} alt="" />
            <div className='view-details'>
                <h4 className='view-title'>{name}</h4>
                <p className='view-price'>Price: <span className='price-orange'>${price}</span></p>
                <p className='view-quantity'>Product Quantity: <span className='price-orange'>{quantity}</span></p>
            </div>
            <button className='view-btn'><FontAwesomeIcon className='delete-icon' icon={faTrashAlt}/></button>
        </div>
    );
};

export default OrderView;