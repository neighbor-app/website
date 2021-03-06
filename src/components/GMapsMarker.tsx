import React, {CSSProperties} from 'react';
import RoomIcon from '@material-ui/icons/Room';

interface ComponentProps {
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
    color: '#b5263b',
    fontSize: 16,
    padding: 4
};

class GMapsMarkerAvatar extends React.Component<ComponentProps, ComponentState> {
    render() {
        return (
            <div style={markerStyles}>
                <RoomIcon fontSize="large" color="primary" />
            </div>
        );
    }
}

export default GMapsMarkerAvatar;