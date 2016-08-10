
import React, { PropTypes } from 'react';
import { Link } from 'react-router';

const App = props => (
    <div>
        <Link to="/">Awesome GIF´s</Link>
        {props.children}
    </div>
);

export default App;

App.PropTypes = {
    children: PropTypes.object.isRequired,
};
