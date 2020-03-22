import React from 'react';
import {RouteComponentProps, withRouter} from 'react-router';

import Header from './Header';

interface ComponentState {}

class UserView extends React.Component<RouteComponentProps, ComponentState> {

    componentDidMount() {
        // this.userId = this.props.match.params.id;
    }

    render() {
        return (
            <>
                <Header/>

            </>
        );
    }
}

export default withRouter(UserView);
