import React from 'react';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';

export default class Method extends React.Component {
    render() {
        return (
            <div className="method__content__card">
                <div className="method__content__card__image">
                    <img src={"/images/" + this.props.image} />
                </div>
                <h3>{this.props.title}</h3>
                <p>{this.props.text}</p>
            </div>
        );
    }
}
