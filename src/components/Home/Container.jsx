
import React from 'react';
import sortBy from 'lodash/sortBy';
import data from '../../data';
import Home from './Index.jsx';

export default class HomeContainer extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            gifs: [],
            sorting: {},
        };
        this.sortList = this.sortList.bind(this);
    }

    componentWillMount() {
        this.setState({
            gifs: data.data,
            sorting: {
                options: ['none', 'id', 'import_datetime'],
                selected: 'none',
            },
        });
    }

    sortList(field) {
        return () => {
            let sortedGifs;
            if (field === 'none') {
                this.setState({
                    gifs: data.data,
                });
            } else {
                sortedGifs = sortBy(this.state.gifs, ['gif', field]);
            }

            this.setState({
                gifs: sortedGifs,
                sorting: {
                    options: ['none', 'id', 'import_datetime'],
                    selected: field,
                },
            });
        };
    }

    render() {
        return <Home state={this.state} sortFunc={this.sortList} />;
    }
}
