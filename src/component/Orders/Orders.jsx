import React from 'react';
import Cart from '../Cart/Cart';
import { useLoaderData } from 'react-router-dom';
import OrderView from '../OrderView/OrderView';
import './Order.css';

const Orders = () => {
    const cart = useLoaderData();
    console.log(cart);
    return (
        <div className='shop-container'>
            <div className='review-container'>
                {
                    cart.map (product => <OrderView 
                        key={product.id}
                        product ={product}
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