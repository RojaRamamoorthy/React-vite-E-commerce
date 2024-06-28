import React from 'react';
import { useSelector } from 'react-redux';
import CartItem from './CartItem';

function Cart() {
    const items = useSelector((state) => state.cart.items);

    // Calculate the total price of all items in the cart
    const totalCartPrice = items.reduce((total, item) => total + item.price * item.quantity, 0);

    return (
        <div className="cart">
            <h1>Cart</h1>
            {items.map((item) => (
                <CartItem key={item.id} item={item} />
            ))}
            <div className="total-cart-price-container">
                <h2>Total Price: ${totalCartPrice.toFixed(2)}</h2>
            </div>
        </div>
    );
}

export default Cart;
