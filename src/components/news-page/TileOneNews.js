import React from 'react';
import { connect } from 'react-redux';
import StyleActualLink from '../general/StyleActualLink'

export default class TileOneNews extends React.Component {
    render() {
        return (
            <div className={"tile-one-news__content__card" + this.props.margin} >
                <div className="tile-one-news__content__card__image">
                    <a target="_blank" href="https://seedbright.typeform.com/to/mglblB">
                        <img src={"/images/" + this.props.image}/>
                    </a>
                </div>
                <div className="tile-one-news__content__card__text">
                    <p>{this.props.date}</p>
                    <h3><a target="_blank" href="https://seedbright.typeform.com/to/mglblB">{this.props.title}</a></h3>
                    <h4>{this.props.subtitle}</h4>
                    <StyleActualLink
                        link={"https://seedbright.typeform.com/to/K2u5PL"}
                        // link={"/news/" + this.props.page}
                        image="arrow.svg"
                        title="Learn More"
                        color="#4a73ff"
                    />
                </div>
            </div>
        );
    }
}
