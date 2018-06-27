import React from 'react';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';
import StyleLink from '../general/StyleLink';

export const JoinSeedbright = () => (
    <div className="joinSeedbright">
        <img className="joinSeedbright__content__image" src="/images/join_seedbright.png" />
        <div className="joinSeedbright__content">
            <div className="joinSeedbright__content__text">
                <div className="joinSeedbright__content__text__actualtext">
                    <h2>Join Seedbright</h2>
                </div>
                <div className="joinSeedbright__content__text__bluerectangle">
                    <p>
                        If you want to take your creativity to the next level, send us a line.
                    </p>
                    <StyleLink
                        mail="mailto:hello@seedbright.com"
                        image="arrow_white.svg"
                        title="Get in touch"
                        color="white"
                    />
                </div>
            </div>
        </div>
    </div>
);

const mapDispatchToProps = () => ({

});

export default connect(undefined, mapDispatchToProps)(JoinSeedbright);
