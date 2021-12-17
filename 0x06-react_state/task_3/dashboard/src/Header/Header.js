import React from "react";
import hbtonlogo from '../assets/holberton-logo.jpg';
import { StyleSheet, css } from 'aphrodite';
import AppContext from "../App/AppContext";


class Header extends React.Component {
    constructor(props) {
        super(props);
    }

    render() {
        let { user, logOut } = this.context;
        return (
            <header className={css(styles.Header)}>
                <img src={hbtonlogo} className={css(styles.AppLogo)} alt="logo" />
                <h1>School dashboard</h1>
                {
                    user.isLoggedIn && (
                        <h2 id="logoutSection">
                            Welcome <b>{user.email}</b>
                            <span onClick={logOut} className={css(styles.logOutLink)}>
                                (logout)
                            </span>
                        </h2>
                    )
                }
            </header>
        );
    }
}

Header.contextType = AppContext;

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
    },

    logOutLink: {
        fontStyle: 'italic',
        cursor: 'pointer'
    }
})

export default Header;