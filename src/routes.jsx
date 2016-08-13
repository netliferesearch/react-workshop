
import React from 'react';
import { Router, Route, hashHistory, IndexRoute } from 'react-router';

import Main from './components/Main.jsx';
import Home from './components/Home/Container.jsx';
import Single from './components/Single/Container.jsx';

const routes = (
    <Router history={hashHistory}>
        <Route path="/" component={Main} >
            <IndexRoute component={Home} />
            <Route path=":slug" component={Single} />
        </Route>
    </Router>
);

export default routes;
