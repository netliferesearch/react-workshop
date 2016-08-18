import React, { PropTypes } from 'react';
import find from 'lodash/find';

import Single from '.';
import data from '../../data/giphy.json';

export default class SingleContainer extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            gif: {},
        };
    }

    componentWillMount() {
        const slug = this.props.params.slug;
        this.setState({
            gif: find(data.data, { slug }),
        });
    }

    render() {
        return <Single gif={this.state.gif} />;
    }
}

SingleContainer.propTypes = {
    params: PropTypes.object,
};
