import React from 'react';
import {Link} from 'react-router-dom';
import Button from '@material-ui/core/Button';
import Grid from "@material-ui/core/Grid";
import Typography from '@material-ui/core/Typography';
import ListItem from '@material-ui/core/ListItem';
import ListItemText from '@material-ui/core/ListItemText';
import { ListItemAvatar,Avatar,Divider } from '@material-ui/core';

import Header from './Header';
import homeImg from '../assets/images/home.jpg';
import avatarImg001 from '../assets/images/avatar/001.jpg';
import avatarImg002 from '../assets/images/avatar/002.jpg';
import avatarImg003 from '../assets/images/avatar/003.jpg';
import avatarImg004 from '../assets/images/avatar/004.jpg';
import avatarImg005 from '../assets/images/avatar/005.jpg';
import avatarImg006 from '../assets/images/avatar/006.jpg';
interface ComponentProps {}
interface ComponentState {}

class Home extends React.Component<ComponentProps, ComponentState> {
    render() {
        return (
            <>
               <Header />
                <Grid container justify="center" alignItems="center" style={{backgroundImage: `url(${homeImg})`, minHeight: '500px'}}>
                    <Grid item style={{ textAlign: 'center', marginTop: '100px'}}>
                        <Typography variant="h1" align="center" style={{
                            color: '#fff',
                            textShadow: '2px 2px #000000'
                        }}>
                            Nachbarn wollen helfen
                        </Typography>
                        <Grid container style={{marginTop: '75px'}}>
                            <Grid item xs={6} style={{ textAlign: 'left'}}>
                                <Button
                                    component={Link}
                                    to="/website/helper"
                                    color="primary"
                                    variant="contained"
                                    style={{ height: '100px', width: '350px', fontSize: '26px'}}
                                >
                                    Hilfe anbieten
                            </Button>
                            </Grid>
                            <Grid item xs={6} style={{ textAlign: 'right' }}>
                                <Button
                                    component={Link}
                                    to="/website/select"
                                    color="primary"
                                    variant="contained"
                                    style={{ height: '100px', width: '350px', fontSize: '26px'}}
                                >
                                    Hilfe suchen
                            </Button>
                            </Grid>
                        </Grid>
                    </Grid>
                    
                </Grid>
                <Grid item xs={12} style={{ textAlign: 'center' }}>
                    <Typography variant="h5" style={{
                        color: '#333',
                        padding: '25px 150px 25px 150px',
                        display: 'inline-block'
                    }}>
                        Während der Krise konzentrieren wir uns auf die Verringerung der Einkaufenden in den Supermärkten. Zeigt wann ihr einkaufen geht oder was ihr benötigt. Erfahrt, für wen ihr Lebensmittel & Medikamente mitbringen könnt oder wer sie euch mitbringt. Helft euch und schützt unsere tapferen Kassierer*innen.
                        </Typography>
                </Grid>
                <Grid container spacing={2} style={{margin: '10px'}}>
                    <Grid item xs={12} md={6}>
                        <Typography variant="h6">
                            Helfer in deiner Nähe
                        </Typography>
                        <ListItem button component={Link} to="/website/offer">
                            <ListItemAvatar>
                                <Avatar alt=""  src={avatarImg002} />
                            </ListItemAvatar>
                            <ListItemText
                                primary="Simon v. R." secondary="Kann für dich einen Einkauf für 30 € tätigen">
                            </ListItemText>
                            <ListItemText primary="&lt; 10 m">

                            </ListItemText>
                        </ListItem>

                        <Divider variant="inset" />

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

                        <Divider variant="inset" />

                        <ListItem button component={Link} to="/website/offer">

                            <ListItemAvatar>
                                <Avatar alt=""  src={avatarImg003} />
                            </ListItemAvatar>

                            <ListItemText
                                primary="Franziska F." secondary="Kann für dich einen Einkauf für 15 € tätigen">
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
                                <Avatar alt="" src={avatarImg004} />
                            </ListItemAvatar>
                            <ListItemText
                                primary="Philipp K." secondary="Braucht einen Einkauf für 30 €">
                            </ListItemText>
                            <ListItemText primary="&lt; 10 m">

                            </ListItemText>
                        </ListItem>

                        <Divider variant="inset" />

                        <ListItem button>
                            <ListItemAvatar>
                                <Avatar alt="" src={avatarImg005} />
                            </ListItemAvatar>
                            <ListItemText
                                primary="Marco P."
                                secondary="Braucht einen Einkauf für 20 €">
                            </ListItemText>
                            <ListItemText primary="&lt; 30 m">

                            </ListItemText>
                        </ListItem>

                        <Divider variant="inset" />

                        <ListItem button>

                            <ListItemAvatar>
                                <Avatar alt="" src={avatarImg006} />
                            </ListItemAvatar>

                            <ListItemText
                                primary="Tim S." secondary="Braucht einen Einkauf für 15 €">
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
