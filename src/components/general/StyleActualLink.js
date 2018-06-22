import React from 'react';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';

export default class StyleActualLink extends React.Component {
    render() {
        return (
            <Link style={{color: this.props.color}}  to={this.props.link}>
                <img src={"/images/" + this.props.image} />
                <span>{this.props.title}</span>
            </Link>
        );
    }
}
