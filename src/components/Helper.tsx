
import React, {MouseEvent} from 'react';
import {Link} from "react-router-dom";
import { List,ListItem ,ListItemAvatar,ListItemText, Avatar,Divider,Grid } from '@material-ui/core';
import Button from '@material-ui/core/Button';
import avatarImg001 from '../assets/images/avatar/001.jpg';
import avatarImg002 from '../assets/images/avatar/002.jpg';
import avatarImg003 from '../assets/images/avatar/003.jpg';
import avatarImg004 from '../assets/images/avatar/004.jpg';
import avatarImg005 from '../assets/images/avatar/005.jpg';
import avatarImg006 from '../assets/images/avatar/006.jpg';

import Header from './Header';

interface ComponentProps {}
interface ComponentState {}

class Helper extends React.Component<ComponentProps, ComponentState> {

    handleToggle(event: MouseEvent) {
        alert('Weiter');

    };

    render() {



        return (
            <>
                <Header />
                <Grid container spacing={2}>
                    <Grid item xs={12}>
                        <List >
                            <ListItem button onClick={this.handleToggle}>
                                <ListItemAvatar>
                                    <Avatar alt="" src={avatarImg001} />
                                </ListItemAvatar>
                                <ListItemText
                                    primary="Emily E."
                                    secondary="Kann für dich einen Einkauf für 20 € tätigen">
                                </ListItemText>
                                <ListItemText primary="&lt; 30 m">

                                </ListItemText>
                            </ListItem>

                            <Divider variant="inset" component="li" />

                            <ListItem button onClick={this.handleToggle}>
                                <ListItemAvatar>
                                    <Avatar alt="" src={avatarImg002} />
                                </ListItemAvatar>
                                <ListItemText
                                    primary="Simon v. R." secondary="Kann für dich einen Einkauf für 30 € tätigen">
                                </ListItemText>
                                <ListItemText primary="&lt; 10 m">

                                </ListItemText>
                            </ListItem>

                            <Divider variant="inset" component="li" />

                            <ListItem button onClick={this.handleToggle}>

                                <ListItemAvatar>
                                    <Avatar alt="" src={avatarImg003}  />
                                </ListItemAvatar>

                                <ListItemText
                                    primary="Franziska F." secondary="Kann für dich einen Einkauf für 15 € tätigen">
                                </ListItemText>
                                <ListItemText primary="&lt; 40 m">

                                </ListItemText>
                            </ListItem>

                            <Divider variant="inset" component="li" />

                            <ListItem button onClick={this.handleToggle}>
                                <ListItemAvatar>
                                    <Avatar alt="" src={avatarImg004}  />
                                </ListItemAvatar>
                                <ListItemText
                                    primary="Philipp K."
                                    secondary="Kann für dich mit dem Hund Gassi gehen">
                                </ListItemText>
                                <ListItemText primary="&lt; 30 m">

                                </ListItemText>
                            </ListItem>

                            <Divider variant="inset" component="li" />

                            <ListItem button onClick={this.handleToggle}>
                                <ListItemAvatar>
                                    <Avatar alt="" src={avatarImg005} />
                                </ListItemAvatar>
                                <ListItemText
                                    primary="Marco P." secondary="Kann für dich mit dem Hund Gassi gehen">
                                </ListItemText>
                                <ListItemText primary="&lt; 10 m">

                                </ListItemText>
                            </ListItem>

                            <Divider variant="inset" component="li" />

                            <ListItem button onClick={this.handleToggle}>

                                <ListItemAvatar>
                                    <Avatar alt="" src={avatarImg006} />
                                </ListItemAvatar>

                                <ListItemText
                                    primary="Tim S." secondary="Kann für dich mit dem Hund Gassi gehen">
                                </ListItemText>
                                <ListItemText primary="&lt; 40 m">

                                </ListItemText>
                            </ListItem>
                        </List>
                    </Grid>
                    <Grid item xs={12} style={{margin: '10px'}}>
                        <Button color="primary" variant="contained" component={Link} to="/website/new-help">Neue Hilfe Anbieten</Button>
                    </Grid>
                </Grid>
            </>
        );
    }
}

export default Helper;
