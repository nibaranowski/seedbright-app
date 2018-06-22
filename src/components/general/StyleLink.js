import React from 'react';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';

export default class StyleLink extends React.Component {
    render() {
        return (
            <a style={{color: this.props.color}}  href={this.props.mail}>
                <img src={"/images/" + this.props.image} />
                <span>{this.props.title}</span>
            </a>
        );
    }
}
