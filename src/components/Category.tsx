
import React, {MouseEvent} from 'react';
import { Grid, CardActionArea, Card, Typography } from '@material-ui/core';
import Header from './Header';
import ShoppingCartIcon from '@material-ui/icons/ShoppingCart';
import PetsIcon from '@material-ui/icons/Pets';
import { Redirect } from "react-router-dom";


interface ComponentProps {}
interface ComponentState {}

class SelectCategory extends React.Component<ComponentProps, ComponentState> {
    state = { redirect: null };

    handleSelect(event: MouseEvent) {
        this.setState({ redirect: "/website/search" });
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
                <div style={{maxWidth:"500px", width:"100%", marginTop:"40px"}}>
                    <Typography variant="h4" style={{ textAlign:"center", color:"#3f51b5" ,paddingBottom: "50px"}}>Wobei brauchst du Unterstütztung</Typography>
                <Grid container spacing={2} >
                    <Grid item xs={6}>
                    <Card>
             
                        <CardActionArea  style={{textAlign:"center",padding:"13px"}} onClick={this.handleSelect.bind(this)}>
                            <ShoppingCartIcon  style={{ fontSize: 140, textAlign:"center" }}></ShoppingCartIcon>
                            <Typography variant="subtitle1">Einkaufen gehen</Typography>
                        </CardActionArea>
                        
                    </Card>
                    </Grid>
                    <Grid item xs={6}>
                    <Card>
                        <CardActionArea style={{textAlign:"center",padding:"13px"}} onClick={this.handleSelect.bind(this)}>
                            <PetsIcon  style={{ fontSize: 140 }}></PetsIcon>
                            <Typography variant="subtitle1">Gassi gehen</Typography>
                        </CardActionArea>
                    </Card>
                    </Grid>
                </Grid> 
                </div>
            </>
        );
    }
}

export default SelectCategory;
