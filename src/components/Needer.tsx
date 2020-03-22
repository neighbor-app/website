import React from 'react';
import { List,ListItem ,ListItemAvatar,ListItemText, Avatar,Divider } from '@material-ui/core';
import Grid from "@material-ui/core/Grid";
import { Link } from "react-router-dom";
import GoogleMapReact from 'google-map-react';

import Header from './Header';
import GMapsMarkerAvatar from './GMapsMarkerAvatar';
import GMapsMarker from './GMapsMarker';

import avatarImg001 from '../assets/images/avatar/001.jpg';
import avatarImg002 from '../assets/images/avatar/002.jpg';
import avatarImg003 from '../assets/images/avatar/003.jpg';

interface ComponentProps {}
interface ComponentState {
    clicked: number | null,
    lat: number,
    lng: number
}

class Needer extends React.Component<ComponentProps, ComponentState> {
    constructor(props: ComponentProps) {
        super(props);

        this.state = {
            clicked: null,
            lat: 52.519098,
            lng: 13.40391047
        };

        this.onGMarkerClick = this.onGMarkerClick.bind(this);
        this.handleGeolocation = this.handleGeolocation.bind(this);

       navigator.geolocation.getCurrentPosition(this.handleGeolocation);
    }

    handleGeolocation(position: Position) {
        this.setState({
            clicked: this.state.clicked,
            lat: position.coords.latitude,
            lng: position.coords.longitude
        });
    }

    onGMarkerClick(key: string, childProps: any) {
        this.setState({
            clicked: parseInt(key),
            lat: this.state.lat,
            lng: this.state.lng
        });
    }

    render() {
        return (
            <>
             <Header />
                <Grid container spacing={2} justify="center" alignContent="center" alignItems="center" style={{margin: '10px'}}>
                    <Grid item xs={12} style={{ height: '50vh', width: '100%' }}>
                        <GoogleMapReact
                            bootstrapURLKeys={{ key: 'AIzaSyDawgu3zHf0qoi6ch1TGl35rO9viDOu5bQ' }}
                            center={{lat: this.state.lat, lng: this.state.lng}}
                            defaultZoom={15}
                            yesIWantToUseGoogleMapApiInternals
                            onChildClick={this.onGMarkerClick}
                        >
                            <GMapsMarkerAvatar
                                key={0}
                                lat={(this.state.lat + 0.0009)}
                                lng={(this.state.lng + 0.002)}
                                image={avatarImg002}
                                clicked={this.state.clicked === 0}
                                name="Simon v. R."
                                offerText="Kann für dich einen Einkauf für 30 € tätigen"
                                distance="&lt; 10 m"
                            />
                            <GMapsMarkerAvatar
                                key={1}
                                lat={(this.state.lat + 0.0002)}
                                lng={(this.state.lng - 0.0039)}
                                image={avatarImg001}
                                clicked={this.state.clicked === 1}
                                name="Emily E."
                                offerText="Kann für dich einen Einkauf für 20 € tätigen"
                                distance="&lt; 30 m"
                            />
                            <GMapsMarkerAvatar
                                key={2}
                                lat={(this.state.lat + 0.0008)}
                                lng={(this.state.lng + 0.016)}
                                image={avatarImg003}
                                clicked={this.state.clicked === 2}
                                name="Armin R."
                                offerText="Kann für dich einen Einkauf für 15 € tätigen"
                                distance="&lt; 40 m"
                            />
                            <GMapsMarker lat={this.state.lat} lng={this.state.lng} />
                        </GoogleMapReact>
                    </Grid>
                        <Grid item xs={12} md={6}>
                        <List >
                            <ListItem button component={Link} to="/website/offer">
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

                            <ListItem button component={Link} to="/website/offer">
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

                            <ListItem button component={Link} to="/website/offer">

                            <ListItemAvatar>
                                <Avatar alt="" src={avatarImg003} />
                            </ListItemAvatar>

                            <ListItemText
                                        primary="Franziska F." secondary="Kann für dich einen Einkauf für 15 € tätigen">
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
