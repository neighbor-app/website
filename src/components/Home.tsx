import React from 'react';
import Img from 'react-image';
import {Link} from 'react-router-dom';
import Button from '@material-ui/core/Button';
import Box from '@material-ui/core/Box';
import Grid from "@material-ui/core/Grid";
import Typography from '@material-ui/core/Typography';
import ListItem from '@material-ui/core/ListItem';
import ListItemText from '@material-ui/core/ListItemText';
import { ListItemAvatar,Avatar,Divider } from '@material-ui/core';

import Header from './Header';
import homeImg from '../assets/images/home.jpg';

interface ComponentProps {}
interface ComponentState {}

class Home extends React.Component<ComponentProps, ComponentState> {
    render() {
        return (
            <>
               <Header />
               <div>
                   <Img src={homeImg} style={{maxWidth: '100%'}} />
               </div>
                <Box
                    style={{paddingRight: '100px'}}
                >
                    <Button
                        component={Link}
                        to="/website/helper"
                        color="primary"
                        variant="contained"
                        style={{position: 'relative', top: '-50px'}}
                    >
                        Hilfe anbieten
                    </Button>
                </Box>
                <Box>
                    <Button
                        component={Link}
                        to="/website/search"
                        color="primary"
                        variant="contained"
                        style={{position: 'relative', top: '-50px'}}
                    >
                        Hilfe suchen
                    </Button>
                </Box>
                <Grid container spacing={2} style={{margin: '10px'}}>
                    <Grid item xs={12} md={6}>
                        <Typography variant="h6">
                            Helfer in deiner Nähe
                        </Typography>
                        <ListItem button>
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

                        <ListItem button>
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

                        <ListItem button>

                            <ListItemAvatar>
                                <Avatar alt="" src="/media/avatar/3.jpg" />
                            </ListItemAvatar>

                            <ListItemText
                                primary="Armin R." secondary="Kann für dich einen Einkauf für 15 € tätigen">
                            </ListItemText>
                            <ListItemText primary="&lt; 40 m">

                            </ListItemText>
                        </ListItem>
                    </Grid>
                    <Grid item xs={12} md={6}>
                        <Typography variant="h6">
                            Benötigte Hilfe in deiner Nähe
                        </Typography>
                        <ListItem button>
                            <ListItemAvatar>
                                <Avatar alt="" src="/media/avatar/2.jpg" />
                            </ListItemAvatar>
                            <ListItemText
                                primary="Simon v. R." secondary="Braucht einen Einkauf für 30 €">
                            </ListItemText>
                            <ListItemText primary="&lt; 10 m">

                            </ListItemText>
                        </ListItem>

                        <Divider variant="inset" component="li" />

                        <ListItem button>
                            <ListItemAvatar>
                                <Avatar alt="" src="/media/avatar/1.jpg" />
                            </ListItemAvatar>
                            <ListItemText
                                primary="Andy K"
                                secondary="Braucht einen Einkauf für 20 €">
                            </ListItemText>
                            <ListItemText primary="&lt; 30 m">

                            </ListItemText>
                        </ListItem>

                        <Divider variant="inset" component="li" />

                        <ListItem button>

                            <ListItemAvatar>
                                <Avatar alt="" src="/media/avatar/3.jpg" />
                            </ListItemAvatar>

                            <ListItemText
                                primary="Armin R." secondary="Braucht einen Einkauf für 15 €">
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

export default Home;
