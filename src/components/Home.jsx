
import React, { PropTypes } from 'react';
import { Link } from 'react-router';
import sortBy from 'lodash/sortBy';
import classNames from 'classnames';

import data from '../data';

export default class Home extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            gifs: [],
            sorting: 'none',
        };
    }

    componentWillMount() {
        this.setState({
            gifs: data.data,
        });
    }

    sortList(field) {
        let sortedGifs;
        if (field === 'none') {
            sortedGifs = data.data;
        } else {
            sortedGifs = sortBy(this.state.gifs, ['gif', field]);
        }

        this.setState({
            gifs: sortedGifs,
            sorting: field,
        });
    }

    render() {
        const sortOptions = ['none', 'id', 'import_datetime'];


        const sorting = sortOptions.map((option) => (
            <button
                className={classNames({
                    sort: true,
                    'sort--active': this.state.sorting === option,
                })}
                onClick={this.sortList.bind(this, option)}
            >
            { option }
            </button>
            )
        );

        const list = this.state.gifs.map(gif => (
            <li key={gif.id}>
                <Link to={gif.id}>
                    <img src={gif.images.downsized.url} alt={gif.id} />
                </Link>
            </li>
            )
        );

        return (
            <div>
                <header>
                    <h1>😜 Awesome GIF´s 😹</h1>
                </header>
                Sort by:
                { sorting }
                <ul className="list">
                    {list}
                </ul>
            </div>
        );
    }
}

Home.propTypes = {
    // list: PropTypes.array.isRequired,
};
