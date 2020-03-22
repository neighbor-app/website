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
    clicked: number | null
}

class Needer extends React.Component<ComponentProps, ComponentState> {
    constructor(props: ComponentProps) {
        super(props);

        this.state = {
            clicked: null
        };

        this.onGMarkerClick = this.onGMarkerClick.bind(this);
    }

    onGMarkerClick(key: string, childProps: any) {
        this.setState({
            clicked: parseInt(key)
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
                            defaultCenter={{lat: 52.519098, lng: 13.40391047}}
                            defaultZoom={15}
                            yesIWantToUseGoogleMapApiInternals
                            onChildClick={this.onGMarkerClick}
                        >
                            <GMapsMarkerAvatar
                                key={0}
                                lat={52.519998}
                                lng={13.40591047}
                                image={avatarImg002}
                                clicked={this.state.clicked === 0}
                                name="Simon v. R."
                                offerText="Kann für dich einen Einkauf für 30 € tätigen"
                                distance="&lt; 10 m"
                            />
                            <GMapsMarkerAvatar
                                key={1}
                                lat={52.519098}
                                lng={13.40001047}
                                image={avatarImg001}
                                clicked={this.state.clicked === 1}
                                name="Andy K"
                                offerText="Kann für dich einen Einkauf für 20 € tätigen"
                                distance="&lt; 30 m"
                            />
                            <GMapsMarkerAvatar
                                key={2}
                                lat={52.519898}
                                lng={13.41991047}
                                image={avatarImg003}
                                clicked={this.state.clicked === 2}
                                name="Armin R."
                                offerText="Kann für dich einen Einkauf für 15 € tätigen"
                                distance="&lt; 40 m"
                            />
                            <GMapsMarker lat={52.519098} lng={13.40391047} />
                        </GoogleMapReact>
                    </Grid>
                        <Grid item xs={12} md={6}>
                        <List >
                            <ListItem button component={Link} to="/website/offer">
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
