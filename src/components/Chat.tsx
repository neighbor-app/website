
import React from 'react';
import { TextField, Card, CardContent, CardActions } from '@material-ui/core';
import Button from '@material-ui/core/Button';
import Header from './Header';
import SendIcon from '@material-ui/icons/Send';



interface ComponentProps {}

interface Message {
    User:string,
    Date:Date,

}

interface ComponentState {
    Text:Message[]
}

class Chat extends React.Component<ComponentProps, ComponentState> {
/**
 *     
 */
    style:any = { me : {
        background:"rgb(182, 223, 158)",
        padding: "15px",
        borderRadius: "10px",
        width: "70%",
        flexBasis: "left",
        alignSelf: "end",
        marginBottom: "20px"
    },
    nme : {
        background:"rgb(232, 232, 232)",
        padding: "15px",
        borderRadius: "10px",
        width: "70%",
        marginBottom: "20px"
    } };

    render() {
        return (
            <>
                <Header />
                <Card style={{ marginTop:"30px"}}>
                <CardContent>
                    
                <div style={{display:"flex",flexDirection:"column", minHeight:"400px"}}>
                    <div   className="me" style={this.style.me}>Ich brauche Möhren, Kartoffeln und Zwiebeln, geht das?</div>
                    <div className="him" style={this.style.nme}>Ja, geht klar</div>
                    <div className="me" style={this.style.me}>Danke</div>
                </div>
                </CardContent>
                <CardActions>
       
                <TextField style={{width:"440px"}}></TextField>
                <Button><SendIcon/></Button>
                </CardActions>
                </Card>
            </>
        );
    }
}

export default Chat;
