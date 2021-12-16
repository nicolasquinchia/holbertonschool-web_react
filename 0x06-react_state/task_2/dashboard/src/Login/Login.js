import { StyleSheet, css } from 'aphrodite';
import React from "react";

class Login extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            email: "",
            password: "",
            enableSubmit: false
        };
        this.handleLoginSubmit = this.handleLoginSubmit.bind(this);
        this.handleChangeEmail = this.handleChangeEmail.bind(this);
        this.handleChangePassword = this.handleChangePassword.bind(this);
    }

    handleLoginSubmit(event) {
        event.preventDefault();
        this.props.logIn(this.state.email, this.state.password);
    }

    handleChangeEmail(event) {
        this.setState({email: event.target.value})
        if (event.target.value.length > 0 && this.state.password.length > 0) {
            this.setState({enableSubmit: true});
        } else {
            this.setState({enableSubmit: false});
        }
    }

    handleChangePassword (event) {
        this.setState({password: event.target.value})
        if (event.target.value.length > 0 && this.state.email.length > 0) {
            this.setState({enableSubmit: true});
        } else {
            this.setState({enableSubmit: false});
        }
    }

    render () {
        return (
            <React.Fragment>
                <div className={css(styles.Login)}>
                    <p>Login to access the full dashboard</p>
                    <form action='' onSubmit={this.handleLoginSubmit}>
                        <div className={css(styles.inputLabel)}>
                            <label htmlFor='email'>Email</label>
                            <input
                                type="email"
                                id="email"
                                className={css(styles.inputStyle)}
                                value={this.state.email}
                                onChange={this.handleChangeEmail}
                            />
                        </div>
                        <div className={css(styles.inputLabel)}>
                            <label htmlFor='password'>Password</label>
                            <input
                                type="password"
                                id="password"
                                className={css(styles.inputStyle)}
                                value={this.state.password}
                                onChange={this.handleChangePassword}
                            />
                        </div>
                        <input type='submit' value='Submit' disabled={!this.state.enableSubmit}/>
                    </form>
                </div>
            </React.Fragment>
        );
    }
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