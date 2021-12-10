import { StyleSheet, css } from 'aphrodite';
import React from "react";

function Login() {
    return (
        <React.Fragment>
            <div className={css(styles.Login)}>
                <p>Login to access the full dashboard</p>
                <div className={css(styles.inputLabel)}>
                    <label htmlFor='email'>Email</label>
                    <input type="text" id="email" className={css(styles.inputStyle)}/>
                </div>
                <div className={css(styles.inputLabel)}>
                    <label htmlFor='password'>Password</label>
                    <input type="password" id="password" className={css(styles.inputStyle)}/>
                </div>
                <button >OK</button>
            </div>
        </React.Fragment>
    );
}

const screen = {
    small: "@media screen and (max-width: 900px)",
};


const styles = StyleSheet.create({
    Login: {
        padding: '80px',
        [screen.small]: {
            padding: '0',
        }
    },

    inputStyle: {
        [screen.small]: {
            border: 'none'
        }
    },

    inputLabel: {
        display: 'inline',
        [screen.small]: {
            display: 'flex'
        }
    }
})

export default Login;