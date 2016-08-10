
import React from 'react';
import { Router, Route, hashHistory, IndexRoute } from 'react-router';

import Main from './components/Main.jsx';
import Home from './components/Home.jsx';
import Single from './components/Single.jsx';

const routes = (
    <Router history={hashHistory}>
        <Route path="/" component={Main} >
            <IndexRoute component={Home} />
            <Route path=":id" component={Single} />
        </Route>
    </Router>
);

export default routes;
