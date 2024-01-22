import React from 'react';
import './Cart.css';
const Cart = ({cart}) => {
    // const cart = props.cart;
    // const {cart} = props;
    console.log(cart);
    let total = 0;
    let shipping = 0;
    let quantity = 0;
    for(const product of cart){
        // if(product.quantity === 0){
        //     product.quantity = 1;
        // }
        quantity = quantity + product.quantity;
        total = total + product.price * product.quantity;
        shipping = shipping + product.shipping * product.quantity;
        
    }
    const tax = total * 5 / 100;
    const totalPrice = total + shipping + tax;
return (
        <div className='cart'>
            <h4>Order Summary</h4>
            <p>Selected Items: {quantity}</p>
            <p>Total Price: ${total}</p>
            <p>Total Shipping Charge: ${shipping}</p>
            <p><small>Tax: ${tax.toFixed(2)}</small></p>
            <h5>Grand Total: ${totalPrice.toFixed(2)}</h5>
        </div>
    );
};

export default Cart;