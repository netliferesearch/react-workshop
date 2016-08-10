
import React, { PropTypes } from 'react';
import data from '../data';

export default class Home extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            gifs: [],
        };
    }

    componentWillMount() {
        this.setState({
            gifs: data.data,
        });
    }

    render() {
        console.log(this.state);
        const list = this.state.gifs.map(gif => (
            <li key={gif.id} >
                {gif.id}
                <img src={gif.images.original.url} />
            </li>
            )
        );
        return (
            <div>
                <header>
                    <h1>Trending GIF´s</h1>
                </header>
                <ul className="list">
                    {list}
                </ul>
            </div>
        );
    }
}

Home.propTypes = {
    list: PropTypes.array.isRequired,
};
