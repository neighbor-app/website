import React, {CSSProperties} from 'react';
import {Avatar} from "@material-ui/core";

interface ComponentProps {
    image: string,
    lat: number,
    lng: number
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
        return (
            <div style={markerStyles}>
                <Avatar alt="" src={this.props.image} />
            </div>
        );
    }
}

export default GMapsMarkerAvatar;