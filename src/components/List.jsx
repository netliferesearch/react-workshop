
import React, { PropTypes } from 'react';
import { Link } from 'react-router';

const List = (props) => {
    const list = props.gifs.map(gif => (
        <li key={gif.id}>
            <Link to={gif.slug}>
                <img src={gif.images.downsized.url} alt={gif.id} />
            </Link>
        </li>
        )
    );
    return (
        <ul className="list">
            {list}
        </ul>
    );
};

List.propTypes = {
    gifs: PropTypes.array.isRequired,
};

export default List;
