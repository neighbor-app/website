import React from 'react';
import {Link} from "react-router-dom";
import { Grid, Avatar, Button, List, ListItem, Divider, Typography, SnackbarContent, IconButton, Dialog, DialogTitle, DialogContent, DialogContentText, DialogActions } from '@material-ui/core';
import Header from './Header';
import Snackbar from '@material-ui/core/Snackbar';
import CloseIcon from '@material-ui/icons/Close';

interface ComponentProps {}
interface ComponentState {
    requesting:boolean
}

class Offer extends React.Component<ComponentProps, ComponentState> {
    constructor(props: ComponentProps) {
        super(props);
        
        // Function binding
        this.handleRequest = this.handleRequest.bind(this);
        this.handleCloseRequest = this.handleCloseRequest.bind(this);

        // Initial State
        this.state = {
            requesting: false,
        }
    }
    
    handleRequest(event?: React.SyntheticEvent, reason?: string) {
        this.setState({ requesting: true});
    }

    handleCloseRequest(event?: React.SyntheticEvent, reason?: string) {
        this.setState({ requesting: false});
    }
    
    render() {
        return (
            <>
                <Header/>
                <div style={{maxWidth:"500px", marginTop:"40px"}}>
                    <Grid container spacing={3}>
                        <Grid item>
                            <Avatar src="/media/avatar/1.jpg" style={{ width:"100px", height:"100px"}}/>
                        </Grid>
                        <Grid item>
                            <Typography variant="h5">Andy K.</Typography>
                            <Typography variant="subtitle2">Aus deiner Umgebung möchte helfen</Typography>
                        </Grid>
                    </Grid>
                    <Grid container spacing={3}>
                    <Grid item>
                    <Typography variant="subtitle2">Ich kann für dich einen Einkauf für 20 € erledigen, Ich werden bei Rewe und Lidl gegen 15:00 einkaufen </Typography>
                    </Grid>
                            <Grid item>
                                <Button variant="contained" color="primary">Nachricht senden</Button>
                            </Grid>
                            <Grid item>
                                <Button variant="contained" color="primary" onClick={this.handleRequest}>Einkauf anfragen</Button>
                            </Grid>
                    </Grid>
                    <Dialog open={this.state.requesting}>
                        <DialogTitle id="alert-dialog-title"></DialogTitle>
                        <DialogContent>
                        <DialogContentText id="alert-dialog-description">
                            Deine Anfrage ist wurde gesendet
                        </DialogContentText>
                        </DialogContent>
                        <DialogActions>
                        <Button onClick={this.handleCloseRequest} color="primary">
                            Alles Klar
                        </Button>
                        </DialogActions>
                    </Dialog>
                </div>
                
            </>
        );
    }
}

export default Offer;
