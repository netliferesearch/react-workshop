import React from 'react';
import update from 'react-addons-update';
import sortBy from 'lodash/sortBy';

import Home from '.';
import data from '../../data/giphy.json';

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
            gifs: sortBy(data.data, ['gif', 'trending_datetime']),
            sorting: {
                options: ['trending_datetime', 'import_datetime', 'username', 'id'],
                selected: 'trending_datetime',
            },
        });
    }

    sortList(field) {
        return () => {
            this.setState(
                update(this.state, {
                    gifs: {
                        $set: sortBy(this.state.gifs, ['gif', field]),
                    },
                    sorting: {
                        selected: { $set: field },
                    },
                })
            );
        };
    }

    render() {
        return <Home state={this.state} sortFunc={this.sortList} />;
    }
}
