
import React, { PropTypes } from 'react';
import moment from 'moment';
import User from './User.jsx';
import Source from './Source.jsx';

const Info = (props) => {
    const time = moment(props.time).fromNow();

    return (
        <div className="info">
            Posted <strong>{time}</strong>
            <Source url={props.sourceUrl} name={props.source} />
            <User user={props.user} />
        </div>
    );
};

Info.propTypes = {
    user: PropTypes.object.isRequired,
    source: PropTypes.string.isRequired,
    sourceUrl: PropTypes.string.isRequired,
    time: PropTypes.string.isRequired,
};

export default Info;
