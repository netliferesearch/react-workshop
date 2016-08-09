
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
            <div key={photo.id} className="item">
                <div className="item__info">
                    📅 {photo.earth_date}<br />
                    🚀 {photo.rover.name}<br />
                    📷 {photo.camera.name} ({photo.camera.full_name})
                </div>
                <img src={photo.img_src} alt={photo.camera.name} />
            </div>
            )
        );
        return (
            <div>
                <header>
                    <h1>The adventures of the Mars Rovers</h1>
                </header>
                {list}
            </div>
        );
    }
}

Home.propTypes = {
};
