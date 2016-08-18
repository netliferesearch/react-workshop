import React from 'react';
import { Router, Route, IndexRoute, useRouterHistory } from 'react-router';
import { createHashHistory } from 'history';

import Layout from './Layout';
import Home from './Home';

const appHistory = useRouterHistory(createHashHistory)({ queryKey: false });

const routes = (
    <Router history={appHistory}>
        <Route path="/" component={Layout} >
            <IndexRoute component={Home} />
        </Route>
    </Router>
);

export default routes;
