
import React, { PropTypes } from 'react';
import { Link } from 'react-router';

const App = props => (
    <div>
        <Link to="/">Awesome GIF´s</Link>
        {props.children}
    </div>
);

App.propTypes = {
    children: PropTypes.node,
};

export default App;
