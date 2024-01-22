import React, { useState } from 'react';
import Cart from '../Cart/Cart';
import OrderView from '../OrderView/OrderView';
import './Order.css';
import { removeShoppingDb } from '../../utilities/storage';
import { useLoaderData } from 'react-router-dom';

const Orders = () => {
    const savedCart = useLoaderData();
    console.log(savedCart);
    const [cart, setCart] = useState(savedCart);
    const handleRemoveCart = (id) =>{
        const remaining = cart.filter(product => product.id !== id);
        setCart(remaining);
        removeShoppingDb(id);
    }
    return (
        <div className='shop-container'>
            <div className='review-container'>
                {
                    cart.map (product => <OrderView 
                        key={product.id}
                        product ={product}
                        handleRemoveCart = {handleRemoveCart}
                    ></OrderView>)
                }
            </div>
            <div className='cart-container'>
                <Cart
                    cart = {cart}   
                ></Cart>
            </div>
        </div>
    );
};

export default Orders;