import React from 'react';
import { render } from 'react-dom';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';
import { withFormik } from 'formik';
import Yup from 'yup';

const App = () => (
    <div>
        <input type="email" name="email" placeholder="Email"/>
    </div>
)

const FormikApp = withFormik({
    mapPropsToValues() {
        return {
            email: 'test text'
        }
    }
})(App)

render(<FormikApp />, document.getElementById('app'))
