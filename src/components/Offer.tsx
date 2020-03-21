import React from 'react';
import { Grid, Avatar, Button, Typography } from '@material-ui/core';
import Header from './Header';

interface ComponentProps {}
interface ComponentState {}

class Offer extends React.Component<ComponentProps, ComponentState> {
    state = { redirect: null };
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
                                <Button variant="contained" color="primary">Einkauf anfragen</Button>
                            </Grid>
                     </Grid>

                 
                </div>
            </>
        );
    }
}

export default Offer;
