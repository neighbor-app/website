import React from 'react';
import {Link} from "react-router-dom";
import { TextField, Grid, Button, Divider } from '@material-ui/core';
import Autocomplete from '@material-ui/lab/Autocomplete';
import DateFnsUtils from '@date-io/date-fns';

import {
    MuiPickersUtilsProvider,
    KeyboardTimePicker,
    KeyboardDatePicker,

} from '@material-ui/pickers';
import Header from './Header';
import { makeStyles } from '@material-ui/core/styles';


interface ComponentProps {}
interface ComponentState {}



class NewHelp extends React.Component<ComponentProps, ComponentState> {

    selectedDate: Date = new Date();



    handleDateChange( date :any ) {
        console.log(date)
        console.log(this);
        this.selectedDate = date;

        console.log(this.selectedDate);
    }

    stores = [
        'REWE',
        'Aldi',
        'Lidl',
        'Netto',
        'Fressnapf',
        'Edeka'
    ];

    styles = {
        container : {
            width:"100%",
            maxWidth:"800px"
        },
        header : {
            color:"#3f51b5"
        }
    };

    render() {
        return (
            <>
                <Header/>
                <div style={this.styles.container}>
                    <h1 style={this.styles.header}>Biete deine Hilfe in deiner Umgebung an</h1>
                    <Grid container direction="column" spacing={4} justify="center" alignItems="stretch">

                        <Grid item>
                            <MuiPickersUtilsProvider  utils={DateFnsUtils}>
                                <KeyboardDatePicker

                                    disablePast={true}

                                    format="dd/MM/yyyy"
                                    margin="normal"
                                    id="date-picker-"
                                    label="Wann kannst du deinen Einkauf durchführen?"
                                    style={{width: '350px'}}
                                    value={this.selectedDate}
                                    onChange={this.handleDateChange.bind(this)}
                                    KeyboardButtonProps={{
                                        'aria-label': 'change date',
                                    }}
                                />
                            </MuiPickersUtilsProvider>
                        </Grid>
                        <Grid item>
                            <Autocomplete

                                options={ this.stores }
                                getOptionLabel={(option:string) => option}

                                renderInput={ (params:any) => <TextField {...params} label="Zu welchem Laden gehst du?" variant="outlined" />}
                            />
                        </Grid>
                        <Divider/>
                        <Grid item container direction="row"  justify="center" alignItems="center">
                            <Grid item >
                                <Link to="/helper"><Button variant="contained" color="primary">Hinzufügen</Button></Link>
                            </Grid>
                        </Grid>
                    </Grid>
                </div>
            </>
        );
    }
}

export default NewHelp;
