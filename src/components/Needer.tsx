
import React, {MouseEvent} from 'react';
import {Link, Route} from "react-router-dom";
import { List,ListItem ,ListItemAvatar,ListItemText, Avatar,Divider,Grid } from '@material-ui/core';


import { Redirect } from "react-router-dom";



import Header from './Header';

interface ComponentProps {}
interface ComponentState {}



class Needer extends React.Component<ComponentProps, ComponentState> {
    state = { redirect: null };
    
    handleToggle(event: MouseEvent) {
        this.setState({ redirect: "/offer" });

    };

    render() {
   
        if (this.state.redirect) {
            // wieso muss das denn so unschön sein?
            // @ts-ignore
            return <Redirect to={this.state.redirect} />
        }
     
   
        return (
            <>
             <Header />
                <List >
                    <ListItem button onClick={this.handleToggle.bind(this)}>
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

                    <ListItem button onClick={this.handleToggle.bind(this)}>
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

                    <ListItem button onClick={this.handleToggle.bind(this)}>

                    <ListItemAvatar>
                        <Avatar alt="" src="/media/avatar/3.jpg" />
                    </ListItemAvatar>

                    <ListItemText
                                primary="Armin R." secondary="Kann für dich einen Einkauf für 15 € tätigen">
                    </ListItemText>
                    <ListItemText primary="&lt; 40 m">
                                
                    </ListItemText>
                    </ListItem>
                </List>
            </>
        );
    }
}

export default Needer;
