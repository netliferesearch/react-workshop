import React, { Component, PropTypes } from 'react';

export default class Layout extends Component {
    render() {
        return (
            <app>
                { this.props.children }
            </app>
        );
    }
}

Layout.propTypes = {
    children: PropTypes.node.isRequired,
};
