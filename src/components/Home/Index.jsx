
import React, { PropTypes } from 'react';
import Header from '../Header.jsx';
import SortButtons from '../SortButtons.jsx';
import List from '../List.jsx';

const Home = (props) => {
    return (
        <div>
            <Header title="😜 Awesome GIF´s 😹" />
            <SortButtons
                sorting={props.state.sorting}
                click={props.sortFunc}
            />
            <List gifs={props.state.gifs} />
        </div>
    );
};

Home.propTypes = {
    state: PropTypes.object.isRequired,
    sortFunc: PropTypes.func.isRequired,
};

export default Home;
