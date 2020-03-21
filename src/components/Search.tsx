import React from 'react';
import {Link} from "react-router-dom";
import { TextField } from '@material-ui/core';
import DateFnsUtils from '@date-io/date-fns';
import {
    MuiPickersUtilsProvider,
    KeyboardTimePicker,
    KeyboardDatePicker,

  } from '@material-ui/pickers';

interface ComponentProps {}
interface ComponentState {}

class Search extends React.Component<ComponentProps, ComponentState> {
    selectedDate: Date = new Date('2014-08-18T21:11:54');
    setSelectedDate: Date= new Date('2014-08-18T21:11:54'); 

    handleDateChange( date :any ) {
        this.selectedDate = date;
    }

    render() {
        return (
            <>
            <MuiPickersUtilsProvider utils={DateFnsUtils}>
            <KeyboardDatePicker
          disableToolbar
          variant="inline"
          format="MM/dd/yyyy"
          margin="normal"
          id="date-picker-inline"
          label="Date picker inline"
          value={this.selectedDate}
          onChange={this.handleDateChange}
          KeyboardButtonProps={{
            'aria-label': 'change date',
          }}
        />
                </MuiPickersUtilsProvider>
            </>
        );
    }
}

export default Search;
