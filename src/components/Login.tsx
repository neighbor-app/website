import React, {ChangeEvent, FormEvent} from 'react';
import {TextField} from '@material-ui/core';
import Button from '@material-ui/core/Button';
import {Redirect} from 'react-router-dom';

import {Auth} from '../interfaces/auth';
import Header from './Header';

interface ComponentProps {}

interface errorFields {
    username: boolean,
    password: boolean
}

interface ComponentState {
    username: string,
    password: string,
    error: errorFields,
    loggedIn: boolean
}

class Login extends React.Component<ComponentProps, ComponentState> {
    constructor(props: ComponentProps) {
        super(props);
        let loggedIn: boolean = false;

        // Check if we are already logged in
        if (sessionStorage.getItem('auth')) {
            //@todo - validate token
            loggedIn = true;
        }

        // Function binding
        this.authenticate = this.authenticate.bind(this);
        this.handleChange = this.handleChange.bind(this);

        // Initial State
        this.state = {
            username: '',
            password: '',
            error: {
                username: false,
                password: false
            },
            loggedIn: loggedIn
        }
    }

    /**
     * Saves current values for Input elements
     *
     * @param event
     */
    handleChange(event: ChangeEvent<HTMLInputElement>) {
        let username: string = this.state.username;
        let password: string = this.state.password;

        if (event.target.name === 'username') {
            username = event.target.value;
        } else if (event.target.name === 'password') {
            password = event.target.value;
        }

        this.setState({
            username: username,
            password: password,
            error: {
                username: false,
                password: false
            },
            loggedIn: false
        });
    }

    /**
     * Handles authentication
     */
    authenticate(event: FormEvent<HTMLFormElement>) {
        event.preventDefault();

        let loggedIn: boolean = false;
        let auth: Auth | undefined;

        if (this.state.username === 'helper' && this.state.password === 'test123') {
            auth = {
                token: 'ea1e7d8d586ca3a97e84082746dc758a7dbb3e8daf985a9e0fbc3408da029bc7',
                user: {
                    username: 'helper',
                    name: 'Max Helfer'
                }
            };
        } else if (this.state.username === 'needer' && this.state.password === 'test123') {
            auth = {
                token: 'ea1e7d8d586ca3a97e84082746dc758a7dbb3e8daf985a9e0fbc3408da029bc7',
                user: {
                    username: 'needer',
                    name: 'Max Hilfe'
                }
            };
        }

        if (typeof auth === 'object') {
            sessionStorage.setItem('auth', JSON.stringify(auth));
            loggedIn = true;
        }

        this.setState({
           username: this.state.username,
           password: '',
           error: {
               username: true,
               password: true
           },
            loggedIn: loggedIn
        });
    }

    render() {
        return (
            <>
                <Header />
                {(this.state.loggedIn) ? <Redirect to="/" /> : null}
                <form
                    noValidate
                    autoComplete="off"
                    onSubmit={this.authenticate}
                >
                    <div>
                        <TextField
                            error={this.state.error.username}
                            value={this.state.username}
                            label="Username"
                            name="username"
                            onChange={this.handleChange}
                        />
                    </div>
                    <div>
                        <TextField
                            error={this.state.error.password}
                            value={this.state.password}
                            label="Password"
                            type="password"
                            name="password"
                            onChange={this.handleChange}
                        />
                    </div>
                    <div>
                        <Button
                            type="submit"
                        >Login</Button>
                    </div>
                </form>
            </>
        );
    }
}

export default Login;
