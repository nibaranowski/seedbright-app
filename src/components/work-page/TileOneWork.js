import React from 'react';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';
import StyleActualLink from '../general/StyleActualLink'

export default class TileOneWork extends React.Component {
    render() {
        return (
            <div className={"tile-one-work__content__card" + this.props.margin} >
                <div className="tile-one-work__content__card__image">
                    <Link to={"/news/" + this.props.page}>
                        <img src={"/images/" + this.props.image}/>
                    </Link>
                </div>
                <div className="tile-one-work__content__card__text">
                    <Link to={"/news/" + this.props.page}>
                        <h3>{this.props.title}</h3>
                    </Link>
                    <h4>{this.props.subtitle}</h4>
                </div>
            </div>
        );
    }
}
