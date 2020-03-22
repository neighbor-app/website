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

interface ComponentProps {}
interface ComponentState {}

class Home extends React.Component<ComponentProps, ComponentState> {
    render() {
        return (
            <>
               <Header />
                <Grid container justify="center" alignItems="center" style={{backgroundImage: `url(${homeImg})`, minHeight: '500px'}}>
                    <Grid item xs={12} style={{textAlign: 'center', marginTop: '150px'}}>
                        <Typography variant="h1" style={{
                            color: '#fff'
                        }}>
                            Nachbarn wollen helfen
                        </Typography>
                    </Grid>
                    <Grid item xs={12} md={6} style={{textAlign: 'center'}}>
                        <Button
                            component={Link}
                            to="/website/helper"
                            color="primary"
                            variant="contained"
                        >
                            Hilfe anbieten
                        </Button>
                    </Grid>
                    <Grid item xs={12} md={6} style={{textAlign: 'center'}}>
                        <Button
                            component={Link}
                            to="/website/select"
                            color="primary"
                            variant="contained"
                        >
                            Hilfe suchen
                        </Button>
                    </Grid>
                </Grid>
                <Grid item xs={12} style={{ textAlign: 'center' }}>
                    <Typography variant="h5" style={{
                        color: '#333',
                        padding: '15px 100px 15px 100px',
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
                                primary="Andy K"
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

                        <Divider variant="inset" />

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

                        <Divider variant="inset" />

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
