
import React, { PropTypes } from 'react';
import find from 'lodash/find';

import Gif from './Gif.jsx';
import Info from './Info.jsx';

import data from '../data';

export default class Single extends React.Component {
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
        const gif = this.state.gif;
        console.log(gif);
        return (
            <div>
                <Gif url={gif.images.original.url} alt={gif.id} />
                <Info
                    link={gif.source_post_url}
                    username={gif.user || {}}
                    source={gif.source}
                    sourceUrl={gif.source_post_url}
                    time={gif.import_datetime}
                />
            </div>
        );
    }
}

Single.propTypes = {
    params: PropTypes.object,
};
