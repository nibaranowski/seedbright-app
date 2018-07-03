import React from 'react';

import { connect } from 'react-redux';
import StyleActualLink from '../general/StyleActualLink'

export default class TileOneWork extends React.Component {
    render() {
        return (
            <div className={"tile-one-work__content__card" + this.props.margin} >
                <div className="tile-one-work__content__card__image">
                    <a target="_blank" href="https://seedbright.typeform.com/to/mglblB">
                        <img src={"/images/" + this.props.image}/>
                    </a>
                </div>
                <div className="tile-one-work__content__card__text">
                    <h3><a target="_blank" href="https://seedbright.typeform.com/to/mglblB">{this.props.title}</a></h3>
                    <h4>{this.props.subtitle}</h4>
                </div>
            </div>
        );
    }
}
