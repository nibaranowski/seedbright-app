import React from 'react';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';

export default class Office extends React.Component {
    render() {
        return (
            <div className="office__content__card">
                <div className="office__content__card__image">
                    <img src={"/images/" + this.props.image} />
                </div>
                <h3>{this.props.title}</h3>
                <p className="office__content__card__text">{this.props.street}</p>
                <p className="office__content__card__text">{this.props.city}</p>
                <p className="office__content__card__text">{this.props.country}</p>
            </div>
        );
    }
}
