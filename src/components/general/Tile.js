import React from 'react';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';

export default class Tile extends React.Component {
    render() {
        return (
            <Link className={"tile__content__card" + this.props.margin} to={"/project/" + this.props.page}>
                <div className="tile__content__card__image">
                    <img src={"/images/" + this.props.image}/>
                </div>
                <div className="tile__content__card__text">
                    <h3>{this.props.title}</h3>
                    <h4>{this.props.subtitle}</h4>
                </div>
            </Link>
        );
    }
}
