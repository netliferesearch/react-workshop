
import React, { PropTypes } from 'react';
import find from 'lodash/find';
import moment from 'moment';

import data from '../data';

export default class Single extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            gif: {},
        };
    }

    componentWillMount() {
        const id = this.props.params.id;
        this.setState({
            gif: find(data.data, { id }),
        });
    }


    render() {
        const gif = this.state.gif;
        const time = moment(gif.import_datetime).fromNow();

        let user;
        if (gif.username === '') {
            user = 'Anonymous Geek';
        } else {
            user = (
                <img className="avatar" src={gif.user.avatar_url} alt={gif.user.username} />
            );
        }

        let source;
        if (gif.source === '') {
            source = 'somewhere on internet';
        } else {
            source = <a href={gif.source_post_url}>{gif.source}</a>;
        }

        return (
            <div>
                <div className="single">
                    <img src={gif.images.original.url} alt={gif.id} />
                </div>
                <div className="info">
                    Posted <strong>{time}</strong> from {source} by {user}
                </div>
            </div>
        );
    }
}

Single.propTypes = {
    params: PropTypes.object,
};
