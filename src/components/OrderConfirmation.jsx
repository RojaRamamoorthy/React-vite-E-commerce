import React from 'react';
import { useSelector } from 'react-redux';

function OrderConfirmation() {
    const orderDetails = useSelector((state) => state.cart.orderDetails);

    if (!orderDetails) {
        return <div>No order found.</div>;
    }

    return (
        <div className="order-confirmation">
            <h1>Order Confirmation</h1>
            <p>Thank you for your order!</p>
            <div className="order-details">
                <img src={orderDetails.image} height="60px" alt={orderDetails.title} />
                <div className="title">{orderDetails.title}</div>
                <div className="price">${orderDetails.price.toFixed(2)}</div>
                <div className="quantity">Quantity: {orderDetails.quantity}</div>
                <div className="total-price">Total: ${(orderDetails.price * orderDetails.quantity).toFixed(2)}</div>
            </div>
        </div>
    );
}

export default OrderConfirmation;
