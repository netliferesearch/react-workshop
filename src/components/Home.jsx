
import React, { PropTypes } from 'react';
import data from '../data';

export default class Home extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            photos: [],
        };
    }

    componentWillMount() {
        this.setState({
            photos: data.photos,
        });
    }

    render() {
        console.log(this.state);
        const list = this.state.photos.map(photo => (
            <ul key={photo.id} className="list">
                <li>
                    <div className="info">
                        📅 {photo.earth_date}<br />
                        🚀 {photo.rover.name}<br />
                        📷 {photo.camera.name} ({photo.camera.full_name})
                    </div>
                    <img src={photo.img_src} alt={photo.camera.name} />
                </li>
            </ul>
            )
        );
        return (
            <div>
                <header>
                    <h1>The adventures of the Mars Rovers</h1>
                    <img src="./src/images/mars-rover.jpg" alt="Mars Rover" />
                </header>
                {list}
            </div>
        );
    }
}

Home.propTypes = {
};
