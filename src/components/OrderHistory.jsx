import React from 'react';
import { useSelector } from 'react-redux';
import { Link } from 'react-router-dom';
import '../App.css'
function OrderHistory() {
    const orders = useSelector((state) => state.cart.orders); 
    if (orders.length === 0) {
        return (
            <div className="order-history">
                <h1>Order History</h1>
                <div className="no-orders">
                  
                    <div className="message">No orders found.</div>
                </div>
            </div>
        );
    }

    return (
        <div className="order-history">
            <h1>Order History</h1>
            {orders.map((order) => (
                <div key={order.id} className="order-item">
                    <Link to={`/orders/${order.id}`}>
                        <img src={order.image} height="60px" alt={order.title} />
                        <div className="title">{order.title}</div>
                        <div className="price">${order.price.toFixed(2)}</div>
                        <div className="quantity">Quantity: {order.quantity}</div>
                        <div className="total-price">Total: ${(order.price * order.quantity).toFixed(2)}</div>
                    </Link>
                </div>
            ))}
        </div>
    );
}

export default OrderHistory;
