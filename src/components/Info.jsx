
import React, { PropTypes } from 'react';
import moment from 'moment';

const Info = (props) => {

    const time = moment(props.time).fromNow();

    let user;
    if (props.username === '') {
        user = 'Anonymous Geek';
    } else {
        user = (
            <img className="avatar" src={props.sourceUrl} alt={props.username} />
        );
    }

    let source;
    if (props.source === '') {
        source = 'somewhere on internet';
    } else {
        source = <a href={props.sourceUrl}>{props.source}</a>;
    }

    return(
        <div className="info">
            Posted <strong>{time}</strong> from {source} by {user}
        </div>
    )
};

Info.propTypes = {
    link: PropTypes.string.isRequired,
    user: PropTypes.object.isRequired,
    source: PropTypes.string.isRequired,
    sourceUrl: PropTypes.string.isRequired,
    time: PropTypes.string.isRequired,
};

export default Info;
