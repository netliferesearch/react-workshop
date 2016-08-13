
import React from 'react';
import update from 'react-addons-update';
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
                options: ['none', 'id', 'import_datetime', 'trending_datetime'],
                selected: 'none',
            },
        });
    }

    sortList(field) {
        return () => {
            if (field === 'none') {
                this.setState(
                    update(this.state, {
                        gifs: {
                            $set: data.data,
                        },
                        sorting: {
                            selected: { $set: field },
                        },
                    })
                );
            }

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
