import React from 'react';
import {Link} from 'react-router-dom';

import {AppBar} from '@material-ui/core';
import Toolbar from '@material-ui/core/Toolbar';
import IconButton from '@material-ui/core/IconButton';
import Typography from '@material-ui/core/Typography';
import Button from '@material-ui/core/Button';
import MenuIcon from '@material-ui/icons/Menu';

import {Auth} from '../interfaces/auth'
import {Helmet} from "react-helmet";

interface ComponentProps {}
interface ComponentState {
    auth: Auth | undefined
}

class Header extends React.Component<ComponentProps, ComponentState> {
    constructor(props: ComponentProps) {
        super(props);

        let sessionAuth = sessionStorage.getItem('auth');
        let auth: Auth | undefined;
        if (sessionAuth) {
            auth = JSON.parse(sessionAuth);
        }

        this.state = {
            auth: auth
        };

        this.handleLogout = this.handleLogout.bind(this);
    }

    handleLogout() {
        sessionStorage.removeItem('auth');
        this.setState({
            auth: undefined
        })
    }

    render() {

        return (
            <>
                <Helmet>
                    <meta charSet="utf-8" />
                    <title>Neighbor App</title>
                </Helmet>
                <AppBar position="static">
                    <Toolbar>
                        <IconButton edge="start" color="inherit" aria-label="menu">
                            <MenuIcon />
                        </IconButton>
                        <Typography variant="h6" style={{flexGrow: 1}}>
                            Neighbor App
                        </Typography>
                        {
                            (this.state.auth) ?
                                <Button
                                    onClick={this.handleLogout}
                                    color="inherit">Logout</Button>
                                :
                                <Button
                                    component={Link}
                                    to="/login"
                                    color="inherit">Login</Button>
                        }
                    </Toolbar>
                </AppBar>
            </>
        );
    }
}

export default Header;
