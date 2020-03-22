import React, {CSSProperties} from 'react';
import {Avatar, ListItem, ListItemText} from "@material-ui/core";

interface ComponentProps {
    image: string,
    lat: number,
    lng: number,
    clicked: boolean,
    key: number,
    name: string,
    offerText: string,
    distance: string
}
interface ComponentState {}

const markerStyles: CSSProperties = {
    // initially any map object has left top corner at lat lng coordinates
    // it's on you to set object origin to 0,0 coordinates
    position: 'absolute',
    width: 40,
    height: 40,
    left: -40 / 2,
    top: -40 / 2,

    textAlign: 'center',
    color: '#3f51b5',
    fontSize: 16,
    padding: 4
};

class GMapsMarkerAvatar extends React.Component<ComponentProps, ComponentState> {
    render() {
        let showBox: boolean = false;
        if (this.props.clicked) {
            showBox = true;
        }
        // console.log(this.props);

        return (
            <div style={markerStyles}>
                <Avatar alt="" src={this.props.image} />
                {showBox ?
                    <div style={{
                        backgroundColor: '#fff',
                        width: '350px'
                    }}>
                        <ListItem>
                            <ListItemText
                                primary={this.props.name}
                                secondary={this.props.offerText}>
                            </ListItemText>
                            <ListItemText primary={this.props.distance}>

                            </ListItemText>
                        </ListItem>
                    </div>
                : ''}
            </div>
        );
    }
}

export default GMapsMarkerAvatar;