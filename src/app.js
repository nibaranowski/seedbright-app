import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import AppRouter, { history } from './routers/AppRouter';
import ScrollToTop from './routers/ScrollToTop';
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

history.pushState('/');


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

// import React from 'react';
// import { render } from 'react-dom';
// import { Link } from 'react-router-dom';
// import { connect } from 'react-redux';
// import { withFormik, Form, Field } from 'formik';
// import * as Yup from 'yup'
//
// import nodemailer from 'nodemailer';
// import { smtp } from './config'
//
// let email = nodemailer.createTransport(smtp);
//
// app.email = email;
//
// const App = ({
//     values,
//     errors,
//     touched,
//     isSubmitting
// }) => (
//     <Form>
//         <div>
//             { touched.email && errors.email && <p>{errors.email}</p> }
//             <Field type="email" name="email" placeholder="Email"/>
//         </div>
//         <div>
//             { touched.password && errors.password && <p>{errors.password}</p> }
//             <Field type="password" name="password" placeholder="Password"/>
//         </div>
//         <label>
//             <Field type="checkbox" name="newsletter" checked={values.newsletter}/>
//             Join our newsletter
//         </label>
//         <Field component="select" name="plan">
//             <option value="free">Free</option>
//             <option value="premium">Premium</option>
//         </Field>
//         <button disabled={isSubmitting}>Submit</button>
//
//     </Form>
// )
//
// const FormikApp = withFormik({
//     mapPropsToValues({ email, password, newsletter, plan}) {
//         return {
//             email: email || '',
//             password: password || '',
//             newsletter: newsletter || true,
//             plan: plan || 'free'
//         }
//     },
//   validationSchema: Yup.object().shape({
//     email: Yup.string().email('Email not valid').required('Email is required'),
//     password: Yup.string().min(9, 'Password must be 9 characters or longer').required('Password is required')
//   }),
//     handleSubmit(values, {resetForm, setErrors, setSubmitting }) {
//         setTimeout(() => {
//           if(values.email === 'andrew@test.io') {
//             setErrors({ email: 'That email is already taken' })
//           } else {
//             resetForm()
//           }
//           setSubmitting(false)
//         }, 2000)
//       }
// })(App)
//
// render(<FormikApp email="" password=""/>, document.getElementById('app'))
