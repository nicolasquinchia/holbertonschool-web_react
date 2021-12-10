import React from "react";
import hbtonlogo from '../assets/holberton-logo.jpg';
import { StyleSheet, css } from 'aphrodite';


function Header() {
    return (
        <header className={css(styles.Header)}>
            <img src={hbtonlogo} className={css(styles.AppLogo)} alt="logo" />
            <h1>School dashboard</h1>
        </header>
    );
}

const styles = StyleSheet.create({
    Header: {
        display: 'flex',
        alignItems: 'center',
        borderBottom: '3px solid #e1354b',
        color: '#e1354b',
        fontFamily: 'Arial, Helvetica, sans-serif'
    },

    AppLogo: {
        height: '200px',
        width: '200px'
    }
})

export default Header;