import { StyleSheet, css } from 'aphrodite';
import React from "react";

function Login() {
    return (
        <React.Fragment>
            <div className={css(styles.Login)}>
                <p>Login to access the full dashboard</p>
                <label htmlFor='email'>Email</label>
                <input type="text" id="email"/>
                <label htmlFor='password'>Password</label>
                <input type="password" id="password"/>
                <button >OK</button>
            </div>
        </React.Fragment>
    );
}

const styles = StyleSheet.create({
    Login: {
        padding: '80px'
    }
})

export default Login;