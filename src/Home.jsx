import React, {Component} from 'react';
import { Link } from 'react-router';

class Home extends Component {
    render() {
        return (
            <div>
                <h1>Hello, world!</h1>
                <Link to="/slfkjsfd">foobar</Link>
            </div>
        );
    }
}

export default Home;
