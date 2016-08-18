import React from 'react';
import { Router, Route, IndexRoute, useRouterHistory } from 'react-router';
import { createHashHistory } from 'history';

import Main from './components/Main';
import Home from './pages/Home';
import ErrorPage from './pages/ErrorPage';

const appHistory = useRouterHistory(createHashHistory)({ queryKey: false });

const routes = (
    <Router history={appHistory}>
        <Route path="/" component={Main} >
            <IndexRoute component={Home} />
        </Route>
        <Route path="*" component={ErrorPage} />
    </Router>
);

export default routes;
