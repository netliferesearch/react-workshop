
import React, { PropTypes } from 'react';
import Gif from '../Gif.jsx';
import Info from '../Info.jsx';

const Single = (props) => (
    <div>
        <Gif url={props.gif.images.original.url} alt={props.gif.id} />
        <Info
            user={props.gif.user || {}}
            source={props.gif.source}
            sourceUrl={props.gif.source_post_url}
            time={props.gif.import_datetime}
        />
    </div>
);


Single.propTypes = {
    gif: PropTypes.object.isRequired,
};

export default Single;
