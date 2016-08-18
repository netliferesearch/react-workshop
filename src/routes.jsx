
import React from 'react';
import { Router, Route, hashHistory, IndexRoute } from 'react-router';
import createHashHistory from 'history/lib/createHashHistory';

import Main from './components/Main';
import Home from './pages/Home';
import ErrorPage from './pages/ErrorPage';

const history = createHashHistory({ queryKey: false });

const routes = (
    <Router history={history}>
        <Route path="/" component={Main} >
            <IndexRoute component={Home} />
        </Route>
        <Route path="*" component={ErrorPage} />
    </Router>
);

export default routes;
