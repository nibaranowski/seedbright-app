import React from 'react';
import { Router, Route, Switch, Link, NavLink } from 'react-router-dom';
import createHistory from 'history/createBrowserHistory';
// import AOS from 'aos';
// import 'aos/dist/aos.css';


import HomePage from '../components/pages/HomePage';
import WorkPage from '../components/pages/WorkPage';
import AboutPage from '../components/pages/AboutPage';
import NewsPage from '../components/pages/NewsPage';
import CareersPage from '../components/pages/CareersPage';
import ContactPage from '../components/pages/ContactPage';
import NotFoundPage from '../components/pages/NotFoundPage';
import PublicRoute from './PublicRoute';

export const history = createHistory();

const AppRouter = () => (
    <Router history={history}>
    <div>
        <Switch>
            <Route path="/" component={HomePage} exact={true}/>
            <Route path="/work" component={WorkPage} exact={true}/>
            <Route path="/about" component={AboutPage} exact={true}/>
            <Route path="/news" component={NewsPage} exact={true}/>
            <Route path="/careers" component={CareersPage} exact={true}/>
            <Route path="/contact" component={ContactPage} exact={true}/>
            <Route component={NotFoundPage} />
        </Switch>
    </div>
    </Router>
);

export default AppRouter;
