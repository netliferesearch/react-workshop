import React, { PropTypes } from 'react';

import Header from '../../components/Header';
import SortButtons from '../../components/SortButtons';
import List from '../../components/List';

const Home = (props) => (
    <div>
        <Header title="😜 Awesome GIF´s 😹" />
        <SortButtons
            sorting={props.state.sorting}
            click={props.sortFunc}
        />
        <List gifs={props.state.gifs} />
    </div>
);

Home.propTypes = {
    state: PropTypes.object.isRequired,
    sortFunc: PropTypes.func.isRequired,
};

export default Home;
