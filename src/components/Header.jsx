import React, { PropTypes } from 'react';

const Header = (props) => (
    <header>
        <h1>{props.title}</h1>
    </header>
);

Header.propTypes = {
    title: PropTypes.string.isRequired,
};

export default Header;
