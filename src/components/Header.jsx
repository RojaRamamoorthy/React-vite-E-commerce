import React from "react";
import '../App.css'
import ThemeButton from "./ThemeButton";
import { useSelector } from "react-redux";
import { Link } from "react-router-dom";

function Header() {
    const cartItems = useSelector((state) => state.cart.items);
    const confirmedOrders = useSelector((state) => state.cart.orders.length); // Get length of orders array

    return (
        <>
            <header>
                <div className="logo">LOGO</div>
                <div className="menu">
                    <Link to="/home">Home</Link>
                    <Link to="/about">About</Link>
                    <Link to="/cart">Cart: {cartItems.length}</Link>
                    <Link to="/product">Products</Link>
                    <Link to="/orders">Orders: {confirmedOrders}</Link> {/* Display confirmed orders count */}
                    <ThemeButton />
                </div>
            </header>
        </>
    );
}

export default Header;
