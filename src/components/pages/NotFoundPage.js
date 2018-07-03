import React from 'react';
import { Link } from 'react-router-dom';

export default class NotFoundPage extends React.Component {
    componentDidMount () {
        console.log('NotFoundPage mounted!')
        window.scrollTo(0, 0);
    }
    render() {
        return (
            <div>
                404 - <Link to="/">Go home</Link>
            </div>
        );
    }
}
