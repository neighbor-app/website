import React, {MouseEvent} from 'react';
import { List,ListItem ,ListItemAvatar,ListItemText, Avatar,Divider } from '@material-ui/core';
import { Redirect } from "react-router-dom";

import Header from './Header';
import avatarImg001 from '../assets/images/avatar/001.jpg';
import avatarImg002 from '../assets/images/avatar/002.jpg';
import avatarImg003 from '../assets/images/avatar/003.jpg';


interface ComponentProps {}
interface ComponentState {}


class Needer extends React.Component<ComponentProps, ComponentState> {
    state = { redirect: null };
    
    handleToggle(event: MouseEvent) {
        this.setState({ redirect: "/website/offer" });

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
                <List style={{maxWidth:"500px",width:"100%"}} >
                    <ListItem button onClick={this.handleToggle.bind(this)}>
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

                    <ListItem button onClick={this.handleToggle.bind(this)}>
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

                    <ListItem button onClick={this.handleToggle.bind(this)}>

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
            </>
        );
    }
}

export default Needer;
