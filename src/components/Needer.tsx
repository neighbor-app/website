import React, {MouseEvent} from 'react';
import { List,ListItem ,ListItemAvatar,ListItemText, Avatar,Divider } from '@material-ui/core';
import Grid from "@material-ui/core/Grid";
import { Redirect } from "react-router-dom";
import GoogleMapReact from 'google-map-react';

import Header from './Header';
import GMapsMarker from './GMapsMarker';
import avatarImg001 from '../assets/images/avatar/001.jpg';
import avatarImg002 from '../assets/images/avatar/002.jpg';
import avatarImg003 from '../assets/images/avatar/003.jpg';

interface ComponentProps {}
interface ComponentState {}

class Needer extends React.Component<ComponentProps, ComponentState> {
    state = { redirect: null };
    
    handleToggle(event: MouseEvent) {
        this.setState({ redirect: "/website/offer" });

    };

    render() {
   
        if (this.state.redirect) {
            // wieso muss das denn so unschön sein?
            // @ts-ignore
            return <Redirect to={this.state.redirect} />
        }
     
   
        return (
            <>
             <Header />
                <Grid container spacing={2} justify="center" alignContent="center" alignItems="center" style={{margin: '10px'}}>
                    <Grid item xs={12} style={{ height: '50vh', width: '100%' }}>
                        <GoogleMapReact
                            bootstrapURLKeys={{ key: 'AIzaSyDawgu3zHf0qoi6ch1TGl35rO9viDOu5bQ' }}
                            defaultCenter={{lat: 52.519098, lng: 13.40391047}}
                            defaultZoom={15}
                            yesIWantToUseGoogleMapApiInternals
                            // onGoogleApiLoaded={({ map, maps }) => handleApiLoaded(map, maps)}
                        >
                            <GMapsMarker
                                lat={52.519998}
                                lng={13.40591047}
                                image={avatarImg002}
                            />
                            <GMapsMarker
                                lat={52.519098}
                                lng={13.40001047}
                                image={avatarImg001}
                            />
                            <GMapsMarker
                                lat={52.519898}
                                lng={13.41991047}
                                image={avatarImg003}
                            />
                        </GoogleMapReact>
                    </Grid>
                        <Grid item xs={12} md={6}>
                        <List >
                            <ListItem button onClick={this.handleToggle.bind(this)}>
                            <ListItemAvatar>
                                <Avatar alt="" src={avatarImg001} />
                            </ListItemAvatar>
                            <ListItemText
                                        primary="Andy K"
                                        secondary="Kann für dich einen Einkauf für 20 € tätigen">
                            </ListItemText>
                            <ListItemText primary="&lt; 30 m">

                            </ListItemText>
                            </ListItem>

                            <Divider variant="inset" component="li" />

                            <ListItem button onClick={this.handleToggle.bind(this)}>
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

                            <ListItem button onClick={this.handleToggle.bind(this)}>

                            <ListItemAvatar>
                                <Avatar alt="" src={avatarImg003} />
                            </ListItemAvatar>

                            <ListItemText
                                        primary="Armin R." secondary="Kann für dich einen Einkauf für 15 € tätigen">
                            </ListItemText>
                            <ListItemText primary="&lt; 40 m">

                            </ListItemText>
                            </ListItem>
                        </List>
                    </Grid>
                </Grid>
            </>
        );
    }
}

export default Needer;
