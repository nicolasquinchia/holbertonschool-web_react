import React from "react";
import hbtonlogo from '../assets/holberton-logo.jpg';
import './Header.css';

function Header() {
    return (
        <header className="Header">
            <img src={hbtonlogo} className="App-logo" alt="logo" />
            <h1>School dashboard</h1>
        </header>
    );
}

export default Header;