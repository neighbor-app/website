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



class Search extends React.Component<ComponentProps, ComponentState> {

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
    
    searchContainer = {
      width:"100%",
      maxWidth:"500px"
    };

    render() {
        return (
            <>
            <Header/>
            <div style={this.searchContainer}>
            <Grid container direction="column" spacing={4} justify="center" alignItems="stretch">
              <Grid item>
              <MuiPickersUtilsProvider utils={DateFnsUtils}>
                      <KeyboardDatePicker
                    disablePast={true}
                    variant="inline"
                    format="dd/MM/yyyy"
                    margin="normal"
                    id="date-picker-inline"
                    label="Wann brauchst du deinen Einkauf"
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
         
                  renderInput={ (params:any) => <TextField {...params} label="Aus welchem Laden brauchst du etwas?" variant="outlined" />}
                />
                </Grid>
                <Divider/>
                  <Grid item container direction="row"  justify="center" alignItems="center">
                    <Grid item >
                    <Link to="/needer"><Button variant="contained" color="primary">Suchen</Button></Link>
                    </Grid>
                  </Grid>
                </Grid> 
                </div>
            </>
        );
    }
}

export default Search;
