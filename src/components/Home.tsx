import React from 'react';
import {Link} from "react-router-dom";
interface ComponentProps {}
interface ComponentState {}

class Home extends React.Component<ComponentProps, ComponentState> {
    render() {
        return (
            <>
                <ul>
                    <li>
                        <Link to="/">Home</Link>
                    </li>
                    <li>
                        <Link to="/helper">Helper</Link>
                    </li>
                    <li>
                        <Link to="/needer">Needer</Link>
                    </li>
                </ul>
                <div>Home</div>
            </>
        );
    }
}

export default Home;
