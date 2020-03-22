import React from 'react';
import {Avatar, Divider, Grid, ListItem, ListItemText} from "@material-ui/core";
import {RouteComponentProps, withRouter} from 'react-router';

import Header from './Header';
import avatarImg001 from '../assets/images/avatar/001.jpg';
import Typography from "@material-ui/core/Typography";


interface ComponentState {}

class UserView extends React.Component<RouteComponentProps, ComponentState> {

    // componentDidMount() {
    //     // this.userId = this.props.match.params.id;
    // }

    render() {
        return (
            <>
                <Header/>
                <Grid container spacing={2} style={{margin: '10px'}}>
                    <Grid item xs={2}>
                        <Avatar alt="" src={avatarImg001} style={{width:'100px',height:'100px'}}/>
                    </Grid>
                    <Grid item xs={10}>
                    <Typography variant="h4"> Emily E.</Typography>
                    </Grid>
                    <Grid item xs={12} style={{marginTop: '10px'}}>
                        Helfer aus Berlin
                    </Grid>
                    <Grid item xs={12} style={{marginTop: '10px'}}>
                        <Typography variant="body1">
                            Aktuelle Angebote
                        </Typography>
                        <ListItem button>
                            <ListItemText
                                primary="Kann für dich einen Einkauf für 20 € tätigen">
                            </ListItemText>
                            <ListItemText primary="&lt; 30 m">
                            </ListItemText>
                        </ListItem>

                        <Divider variant="inset" />

                        <ListItem button>
                            <ListItemText
                                primary="Kann für dich einen Einkauf für 30 € tätigen">
                            </ListItemText>
                            <ListItemText primary="&lt; 10 m">

                            </ListItemText>
                        </ListItem>

                        <Divider variant="inset" />

                        <ListItem button>

                            <ListItemText
                                primary="Kann für dich einen Einkauf für 15 € tätigen">
                            </ListItemText>
                            <ListItemText primary="&lt; 40 m">

                            </ListItemText>
                        </ListItem>
                    </Grid>
                </Grid>
            </>
        );
    }
}

export default withRouter(UserView);
