
import React, {MouseEvent} from 'react';
import {Link} from "react-router-dom";
import { List,ListItem ,ListItemAvatar,ListItemText, Avatar,Divider,Grid } from '@material-ui/core';
import Button from '@material-ui/core/Button';

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
                                    <Avatar alt="" src="/media/avatar/1.jpg" />
                                </ListItemAvatar>
                                <ListItemText
                                    primary="Andy K"
                                    secondary="Kann für dich einen Einkauf für 20 € tätigen">
                                </ListItemText>
                                <ListItemText primary="&lt; 30 m">

                                </ListItemText>
                            </ListItem>

                            <Divider variant="inset" component="li" />

                            <ListItem button onClick={this.handleToggle}>
                                <ListItemAvatar>
                                    <Avatar alt="" src="/media/avatar/2.jpg" />
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
                                    <Avatar alt="" src="/media/avatar/3.jpg" />
                                </ListItemAvatar>

                                <ListItemText
                                    primary="Armin R." secondary="Kann für dich einen Einkauf für 15 € tätigen">
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
