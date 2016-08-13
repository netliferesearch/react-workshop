import React from 'react';
import sortBy from 'lodash/sortBy';

import Header from './Header.jsx';
import SortButtons from './SortButtons.jsx';
import List from './List.jsx';

import data from '../data';

export default class Home extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            gifs: [],
            sortOptions: [],
            sortSelected: '',
        };
        this.sortList = this.sortList.bind(this);
    }

    componentWillMount() {
        this.setState({
            gifs: data.data,
            sortOptions: ['none', 'id', 'import_datetime'],
            sortSelected: 'none',
        });
    }

    sortList(field) {
        return () => {
            let sortedGifs;
            if (field === 'none') {
                sortedGifs = data.data;
            } else {
                sortedGifs = sortBy(this.state.gifs, ['gif', field]);
            }

            this.setState({
                gifs: sortedGifs,
                sortSelected: field,
            });
        };
    }

    render() {
        return (
            <div>
                <Header title="😜 Awesome GIF´s 😹" />
                <SortButtons
                    options={this.state.sortOptions}                     selected={this.state.sortSelected}
                    click={this.sortList}
                />
                <List gifs={this.state.gifs} />
            </div>
        );
    }
}
