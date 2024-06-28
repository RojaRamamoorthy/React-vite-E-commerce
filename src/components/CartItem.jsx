// CartItem.jsx

import React from 'react';
import { useDispatch } from 'react-redux';
import { itemsDeleted, quantityAdded, quantityRemoved, orderPlaced } from '../reducers/cartSlice';
import { toast } from 'react-toastify';
import { useNavigate } from 'react-router-dom';

function CartItem(props) {
    const { image, title, price, quantity, id } = props.item;
    const dispatch = useDispatch();
    const navigate = useNavigate();

    function deleteItem() {
        dispatch(itemsDeleted(id));
        toast.success(title + " item(s) removed successfully");
    }

    function addQuantity() {
        dispatch(quantityAdded(id));
    }

    function removeQuantity() {
        dispatch(quantityRemoved(id));
    }

    function handleOrder() {
        dispatch(orderPlaced(id));
        toast.success(title + " item(s) ordered successfully");
        navigate('/orders'); // Redirect to orders page after placing order
    }

    const totalPrice = price * quantity;

    return (
        <div className="cart-item">
            <img src={image} height="60px" alt={title} />
            <div className="details">
                <div className="title">{title}</div>
                <div className="price">${price.toFixed(2)}</div>
                <div className="quantity-controls">
                    <button className="remove-quant" onClick={removeQuantity}>-</button>
                    <div className="quant">{quantity}</div>
                    <button className="add-quant" onClick={addQuantity}>+</button>
                </div>
                <div className="total-price">Item Total: ${totalPrice.toFixed(2)}</div>
                <button className="remove-cart" onClick={deleteItem}>Remove from Cart</button>
                <button className="order-now" onClick={handleOrder}>Order now</button>
            </div>
        </div>
    );
}

export default CartItem;
