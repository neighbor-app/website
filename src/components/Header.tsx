import React, {MouseEvent} from 'react';
import {Link} from 'react-router-dom';

import {AppBar} from '@material-ui/core';
import Toolbar from '@material-ui/core/Toolbar';
import IconButton from '@material-ui/core/IconButton';
import Typography from '@material-ui/core/Typography';
import Button from '@material-ui/core/Button';
import Menu from '@material-ui/core/Menu';
import MenuItem from '@material-ui/core/MenuItem';
import MenuIcon from '@material-ui/icons/Menu';

import {Auth} from '../interfaces/auth'
import {Helmet} from "react-helmet";

interface ComponentProps {}
interface ComponentState {
    auth: Auth | undefined,
    menuOpen: boolean,
    menuAnchorEl: Element | null
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
            auth: auth,
            menuOpen: false,
            menuAnchorEl: null
        };

        this.handleLogout = this.handleLogout.bind(this);
        this.handleClick = this.handleClick.bind(this);
        this.handleClose = this.handleClose.bind(this);
    }

    handleLogout() {
        sessionStorage.removeItem('auth');
        this.setState({
            auth: undefined,
            menuOpen: this.state.menuOpen,
            menuAnchorEl: this.state.menuAnchorEl
        })
    }

    handleClick(event: MouseEvent) {
        this.setState({
            auth: this.state.auth,
            menuOpen: true,
            menuAnchorEl: event.currentTarget
        });
    }

    handleClose() {
        this.setState({
            auth: this.state.auth,
            menuOpen: false,
            menuAnchorEl: null
        });
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
                        <IconButton edge="start" color="inherit" aria-label="menu" onClick={this.handleClick}>
                            <MenuIcon />
                        </IconButton>
                        <Menu
                            id="simple-menu"
                            anchorEl={this.state.menuAnchorEl}
                            keepMounted
                            open={this.state.menuOpen}
                            onClose={this.handleClose}
                        >
                            <MenuItem component={Link} to="/website/" onClick={this.handleClose}>Startseite</MenuItem>
                            <MenuItem component={Link} to="/website/helper" onClick={this.handleClose}>Helfer</MenuItem>
                            <MenuItem component={Link} to="/website/needer" onClick={this.handleClose}>Hilfe suchend</MenuItem>
                        </Menu>
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
                                    to="/website/login"
                                    color="inherit">Login</Button>
                        }
                    </Toolbar>
                </AppBar>
            </>
        );
    }
}

export default Header;
