import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import AppRouter, { history } from './routers/AppRouter';
import configureStore from './store/configureStore';
import { login, logout } from './actions/auth';
import 'react-dates/lib/css/_datepicker.css';
import 'normalize.css/normalize.css';
import './styles/styles.scss';
{/*import { firebase } from './firebase/firebase';*/}
import LoadingPage from './components/pages/LoadingPage';
const store = configureStore();

const jsx = (
    <Provider store={store}>
            <AppRouter />
    </Provider>
);

let hasRendered = false;

//
// setTimeout(function(){
//     ReactDOM.render(<LoadingPage />, document.getElementById('app'));
// }, 1000)
//


const renderApp = () => {
    if (!hasRendered) {
        ReactDOM.render(jsx, document.getElementById('app'));
        hasRendered = true;
    }
};

renderApp();

history.push('/');


{/*firebase.auth().onAuthStateChanged((user) => {
    if (user) {
        store.dispatch(login(user.uid));
        renderApp();
        if (history.location.pathname === '/about') {
            history.push('/about');
        }
    } else {
        store.dispatch(logout());
        renderApp();
        history.push('/about');
    }̵
});*/}
